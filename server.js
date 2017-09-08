var express = require('express');
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var todos = require('./routes/todos');
var pages = require('./routes/pages');
var users = require('./routes/users');
var cors = require('cors')
var serveIndex = require('serve-index');
var iplocation = require('iplocation');
var chalk = require('chalk');
const fallback = require('express-history-api-fallback');



var app = express();
app.enable('trust proxy');
// view engine setup
app.set('views', path.join(__dirname, 'cmsDIST'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
var called = false
function doThis(ipNumber) {
    if (called==false) {
        called = true;
        setTimeout(() => {
        iplocation(ipNumber).then(res => { console.log('Last user connected from: ' + chalk.inverse(res.country_name + ': ' + res.city)); });
        called = false;
    },2000)
    }
}

function colorify(data) {
    return chalk.red(data);
}
morgan.token('type', function (req, res) { return req.headers['x-forwarded-for'] || req.connection.remoteAddress});
app.use(morgan(function (tokens, req, res) {
    doThis(tokens.type(req, res));
        return [
            tokens.method(req, res),
            tokens.url(req, res),
            colorify(tokens.status(req, res)),
            tokens.res(req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms',
            tokens['user-agent'](req, res),
            colorify(tokens.type(req,res))
        ].join(' ')
}));



const Meta = require('express-metatag');

const middleware = Meta('tags', true)(function(req, res, next){
    const url = req.protocol + "://" + req.get('host');
    return [{
    'twitter:card': 'summary',
    'twitter:site': '@maikeldotuk',
    'twitter:title': 'Maikel.uk',
    'twitter:description': 'A Content Management System to empower self-directed learning.',
    'twitter:image': 'https://www.maikel.uk/images/logo.png',

    'og:url' : url,
    'og:type': 'website',
    'og:title': 'Maikel.uk',
    'og:description': 'A Content Management System to empower self-directed learning.',
    'og:image' : 'https://www.maikel.uk/images/logo.png',
    }]
});



app.use(middleware);
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


// This fixed the fallback address and at the same time got rid of the need for a 404.html file

app.use(fallback(__dirname + '/cmsDIST/'));



var server = app.listen(3000, function() {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});

module.exports = app;
