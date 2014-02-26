/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express')
  , app = express();
  
    var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
  

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

app.configure(function() {
  app.use(allowCrossDomain);
  //app.set('views', __dirname + '/views');
  //app.set('view engine', 'ejs'); 
  app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
  //app.use(express.cookieParser());
  //app.use(express.bodyParser());
 // app.use(express.methodOverride());
  //app.use(express.session({ secret: 'keyboard cat' }));
  // Initialize Passport!  Also use passport.session() middleware, to support
  // persistent login sessions (recommended).
 // app.use(passport.initialize());
 // app.use(passport.session());
  app.use(app.router);
  //app.use(express.static(__dirname + '/../../public'));
});

//enable CORS
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });
app.get('/', function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World from ExpressServ\n");
});
// Listen on port 8000, IP defaults to 127.0.0.1
app.listen(8000, function() {
  console.log('Express server listening on port 8000');
});
// Put a friendly message on the terminal
