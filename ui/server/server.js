const path = require('path');
const express = require('express');
const http = require('http');
// const https = require('https');
// const fs = require('fs');

const app = express();
const publicPath = path.join(__dirname, '..', 'dist');

app.use(express.static(publicPath));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

// Create an HTTP service.
http.createServer(app).listen(4000);
// Create an HTTPS service identical to the HTTP service.


// This line is from the Node.js HTTPS documentation.
// var options = {
//   key: fs.readFileSync('/etc/cert/key.pem'),
//   cert: fs.readFileSync('/etc/cert/cert.pem')
// };
// https.createServer(options, app).listen(443);