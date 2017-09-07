var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
const conf = require('../conf.js');
var db = mongojs(conf.values.server, ['users']);

const userpass = conf.values.userpass;
/* GET All users */
router.get('/users', function(req, res, next) {
    db.users.find(function(err, users) {
        if (err) {
            res.send(err);
        } else {
            var aTest = { 'maikeldotuk': 'something' };
            res.json(aTest);
        }
    });
});
/* GET One Todo with the provided ID */
router.get('/user/:password', function(req, res, next) {
    if (req.params.password === userpass) {
        var results = { 'password': 'true' }
        res.json(results);
    } else {
        var results = { 'password': 'false' }
        res.json(results);
    }

});
/* POST/SAVE a Todo */
router.post('/user', function(req, res, next) {

    var auser = req.body;
    if (!auser.name) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.users.save(auser, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
});
/* PUT/UPDATE a Todo */
router.put('/user/:id', function(req, res, next) {
    //This two headers are very important, without them the app won't work. 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var auser = req.body;
    var updObj = {};
    if (auser.name) {
        updObj.name = auser.name;
        updObj.password = auser.password;
    }

    if (!updObj) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.users.update({
            _id: mongojs.ObjectId(req.params.id)
        }, updObj, {}, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
});
/* DELETE a Todo */
router.delete('/user/:id', function(req, res) {
    //This two headers are very important, without them the app won't work. 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    db.users.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, '', function(err, result) {
        if (err) {
            res.send(err);
        } else {
            //This two headers are very important, without them the app won't work. 
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.json(result);
        }
    });
});
module.exports = router;
