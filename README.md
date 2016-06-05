# SES Hackathon 2016 - My SES app

## Client
To run the client, use `npm start` in the client folder.

## Server
The server needs HTTPS.

To generate the required keys, use:
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem

Then run `npm start` in that folder.