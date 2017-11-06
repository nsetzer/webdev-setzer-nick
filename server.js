/**
 * Created by sesha on 6/2/17.
 */

// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');
const session      = require('express-session');
var passport = require('passport');

app.use(cookieParser());
app.use(session({ secret: (process.env.SESSION_SECRET || "SECRET") }));
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// youtube streaming can cause unhandled exceptions
// which take down the server
process.on('uncaughtException', function (err) {
  console.error(err);
});

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist')));


// CORS
app.use(function(req, res, next) {
  // in development, this needs to be set to the frontend hostname+port
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.get('/public/uploads/*', function(req, res) {
  res.sendFile(path.join(__dirname, req.path));
});

const port = process.env.PORT || '3100';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

let model = require("./server/app")(app);

// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

server.listen( port , () => console.log('Running on port ' + port));

// for testing
server.model = model
module.exports = server