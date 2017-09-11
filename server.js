var express = require('express');
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var skills = require('./routes/skills');
var pages = require('./routes/pages');
var users = require('./routes/users');
var cors = require('cors')
var serveIndex = require('serve-index');
var iplocation = require('iplocation');
var chalk = require('chalk');
const fallback = require('express-history-api-fallback');
var FroalaEditor = require('wysiwyg-editor-node-sdk/lib/froalaEditor.js');
var handlebars = require('handlebars');
var cons = require('consolidate');
var exphbs = require('express-handlebars')
var hbs = exphbs.create();
var mongojs = require('mongojs');
const conf = require('./conf.js');
var db = mongojs(conf.values.server, ['skills']);

var detector = require('spider-detector');

var app = express();
app.engine('handlebars', hbs.engine);


app.use(detector.middleware());

app.enable('trust proxy');
// view engine setup
app.set('views', path.join(__dirname, 'cmsDIST'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
var called = false
function doThis(req, ipNumber) {
    const spider = req.isSpider();
    if (called == false) {
        called = true;
        setTimeout(() => {
            iplocation(ipNumber).then(res => {
                console.log('Last user connected from: ' + chalk.inverse(res.country_name + ': ' + res.city) + chalk.red(' Spider:' + spider));
            });
            called = false;
        }, 2000)
    }
}

function colorify(data) {
    return chalk.red(data);
}
morgan.token('type', function (req, res) {
    return req.headers['x-forwarded-for'] || req.connection.remoteAddress
});
app.use(morgan(function (tokens, req, res) {
    doThis(req, tokens.type(req, res));
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        colorify(tokens.status(req, res)),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        tokens['user-agent'](req, res),
        colorify(tokens.type(req, res))
    ].join(' ')
}));

const ipfilter = require('express-ipfilter').IpFilter;
var ips = ['51.255.173.44'];
app.use(ipfilter(ips));

/*
 app.get('/', function(req, res, next) {
 if (req.isSpider()) {
 console.log("Is a Spider");
 res.render('spider.html');
 } else {
 console.log("Is not a Spider");

 next();
 }
 })*/


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(cors());
app.use('/', index);
app.use('/api/v1/', skills);
app.use('/api/v1/', pages);
app.use('/api/v1/', users);
app.use(express.static('cmsDIST'));
app.use('/images', express.static('images'));

//app.use(require('prerender-node').set('prerenderServiceUrl', 'http://localhost:3000/').set('prerenderToken', '21C18DSm7DHmzORM1Q2Z'));


var options = {
    validation: {
        'allowedExts': ['gif', 'jpeg', 'jpg', 'png', 'svg', 'blob'],
        'allowedMimeTypes': ['image/gif', 'image/jpeg', 'image/pjpeg', 'image/x-png', 'image/png', 'image/svg+xml']
    }
}
// Path to upload image.
app.post('/upload_image', function (req, res) {

    // Store image.
    FroalaEditor.Image.upload(req, '/images/', options, function (err, data) {
        // Return data.
        if (err) {
            return res.send(JSON.stringify(err));
        }

        res.send(data);
    });
});

app.get('/load_images', function (req, res) {

    FroalaEditor.Image.list('/images/', function (err, data) {

        if (err) {
            return res.status(404).end(JSON.stringify(err));
        }
        return res.send(data);
    });
});

app.post('/delete_image', function (req, res) {

    FroalaEditor.Image.delete(req.body.src, function (err) {

        if (err) {
            return res.status(404).end(JSON.stringify(err));
        }
        return res.end();
    });
});


app.get('/skills/*', function (req, res, next) {
    if (req.isSpider()) {
   //if (true) {
        const theURL = req.url;

        //To get rid of the %20
        const prettyTitle = decodeURIComponent(theURL).replace('/', '')
        // To get rid of the bar and to uppercase the first letter, then replace it in the original string.

        // Seven because /skills counts as the first.
        const theTitle = prettyTitle.slice(7).split('/')[0];
        var results = 'http://www.maikel.uk:3000/images/logos/neverstop.jpg';
        const descBase = 'A Content Management System to empower self-directed learning.';
        db.skills.findOne({'title': theTitle},

            function (err, skills) {
                if ((err) || skills === null) {
                    console.log('Doesn\'t exist');
                    res.render('../seo.handlebars', {
                        address: 'https://www.maikel.uk' + theURL,
                        title: theTitle,
                        description: descBase,
                        imgINSECURE: 'http://www.maikel.uk:3000/images/logos/neverstop.jpg',
                        imgSECURE: 'https://www.maikel.uk/images/logos/neverstop.jpg',
                    });
                } else {
                    console.log(skills);
                    results = skills.logoURL;
                    console.log(results);

                    res.render('../seo.handlebars', {
                        address: 'https://www.maikel.uk' + theURL,
                        title: theTitle,
                        description: skills.descriptHTML.substring(0, 300).replace(/<(?:.|\n)*?>/gm, ' ') + "...",
                        imgSECURE: skills.logoURL,
                        imgINSECURE: 'http://www.maikel.uk:3000/' + skills.logoURL.substring(22)
                    });
                }
            });


    } else {
        next();
    }

});


// This fixed the fallback address and at the same time got rid of the need for a 404.html file
app.use(fallback(__dirname + '/cmsDIST/'));


var server = app.listen(3000, function () {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});

module.exports = app;
