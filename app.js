if (process.env.NODEFLY_KEY) {
  require('nodefly').profile(
      process.env.NODEFLY_KEY,
      'matiasdoyle'
  );
}

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

app.configure('development', function () {
  app.use(express.logger('dev'));
  app.use(express.errorHandler());
});

app.configure('production', function () {
  app.use(express.logger('tiny'));
  app.use(express.errorHandler());
})

app.configure(function () {
  app.set('port', process.env.PORT || 3000);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});
