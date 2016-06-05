let socket;

function doSend(response, status) {
  if (status === google.maps.DistanceMatrixStatus.OK) {
    var distance = response.rows[0].elements[0].duration.value;
    socket.emit('distance', JSON.stringify({ "distance": distance }));
  } else {
    console.log('Maps Error:', status);
  }
}

function doCoordinate(latitude, longitude) {
  var origin = new google.maps.LatLng(latitude, longitude);
  var destination = new google.maps.LatLng(-34.402074, 150.8953366);
  var distanceService = new google.maps.DistanceMatrixService();
  distanceService.getDistanceMatrix({
    origins: [origin],
    destinations: [destination],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
  }, doSend);
}

function geoSuccess(position) {
  doCoordinate(position.coords.latitude, position.coords.longitude);
}

function geoError() {
  console.log("GPS Error: No position available");
}

function init() {
  socket.on('connect', function () {
    socket.emit('authentication', { username: "lbrynn", password: "secret" });
    socket.on('authenticated', function (msg) {
      navigator.geolocation.watchPosition(geoSuccess, geoError, { enableHighAccuracy: true });
    });
  });
}

export default function (serverAddress) {
  socket = io.connect(`https://${serverAddress}`)
  init();
  return socket;
};
