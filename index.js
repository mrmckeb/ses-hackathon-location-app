/*
 * index.js
 */

// Set up redis
// TODO: Handle not connecting gracefully
var redisAddr = process.env.REDIS_ADDR || '127.0.0.1';
var redisPort = process.env.REDIS_PORT || 6379;
var redis = require('redis');
var redisClient = redis.createClient(redisPort, redisAddr);
redisClient.on('connect', function() { console.log('connected to redis'); });

// Set up express
var express = require('express')
var app = express();

// Set up HTTPS
var fs = require('fs');
var credentials = {
  key: fs.readFileSync('file.pem'),
  cert: fs.readFileSync('file.crt')
};
var https = require('https').Server(credentials, app);
var io = require('socket.io')(https);
require('socketio-auth')(io, {
  authenticate: authenticate,
  postAuthenticate: postAuthenticate
});

// Listen
var appAddr = process.env.APP_ADDR || '0.0.0.0';
var appPort = process.env.APP_PORT || 3000;
https.listen(appPort, appAddr, function() { console.log('listening on ' + appAddr + ':' + appPort); });
io.on('connection', function(socket) {
  socket.on('distance', function(msg) { storeDistance(msg, socket); });
});

/*
 * Views
 */
app.use(function(req, res, next) {
  // FIXME: Lock down
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Client
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// API
// TODO: Add Rank and Name fields
var Promise = require("bluebird");
app.get('/api/1/unit/:unit/all', function(req, res) { ; });
app.param('unit', function(req, res, next, value) {
  redisClient.smembers(value, function(err, msg) {
    if (msg && !err) {
      var unit = [];
      var promises = [];
      msg.forEach(function(username) {
        promises.push(new Promise(function(resolve) {
          redisClient.hgetall(username, function(err, msg) {
            if (msg && !err) { unit.push(builder(msg, username)); resolve(); }
          });
        }));
      });
      Promise.all(promises).then(function () { apiSendResponse(req, res, unit); });
    }
  });
});

app.get('/api/1/user/:user', function(req, res) { ; });
app.param('user', function(req, res, next, value) {
  redisClient.hgetall(value, function(err, msg) {
    if (msg && !err) {
      res.send(JSON.stringify({'status': 'OK', 'user': msg}));
    } else {
      res.send(JSON.stringify({'status': 'ERROR'}));
      console.log(err);
    }
  });
});

/*
 * Controllers
 */

function apiError(res) {
  res.send(JSON.stringify({'status': 'ERROR'}));
}


function apiFilter(req, unit) {
   var filters = {
     "available": req.query.available,
     "distance": parseInt(req.query.distance)
   };
   if (filters.available) { unit = availableFilter(unit); }
   if (filters.distance) { unit = distanceFilter(unit, filters.distance); }
   return unit;
}

function apiSendResponse(req, res, unit) {
   if (unit.length < 1) { apiError(res); }
   unit = apiFilter(req, unit);
   res.send(JSON.stringify({'status': 'OK', 'unit': unit}));
}

function builder(msg, username) {
   msg['username'] = username;
   return msg;
}

function availableFilter(values) {
  return values.filter(function(value) { return value.available; });
}

function distanceFilter(values, distance) {
  return values.filter(function(value) { return value.distance <= distance; });
}

function authenticate(socket, msg, callback) {
  // XXX: Always auths
  return callback(null, true);
}

function postAuthenticate(socket, msg) {
  socket.client.username = msg.username;
}

// Turn coords into distance
function storeDistance(msg, socket) {
  if (!socket.auth) {
    console.log('Unauth');
    return;
  }
  var username = socket.client.username;
  var distance = JSON.parse(msg).distance;

  // Set
  redisClient.hmset(username, 'distance', distance, 'available', true);
  redisClient.sadd('wollongong', username);
}
