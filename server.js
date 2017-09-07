var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var todos = require('./routes/todos');
var pages = require('./routes/pages');
var users = require('./routes/users');
var cors = require('cors')
var serveIndex = require('serve-index');

var app = express();
app.enable('trust proxy');
// view engine setup
app.set('views', path.join(__dirname, 'cmsDIST'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(logger(':method :url :status - :res[content-length] :user-agent :remote-addr'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(cors());
app.use('/', index);
app.use('/api/v1/', todos);
app.use('/api/v1/', pages);
app.use('/api/v1/', users);
app.use(express.static('cmsDIST'));
app.use('/images', express.static('images'));
app.use('/images', serveIndex('public/images', {'icons': true}));
// catch 404 and forward to error handler
app.use(function(req, res, next) {

    res.render('404.html', { status: 404, url: req.url });
});
var server = app.listen(3000, function() {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});

module.exports = app;
