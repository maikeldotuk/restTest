var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
const conf = require('../conf.js');
var db = mongojs(conf.values.server, ['skills']);

/* GET All Skills */
router.get('/skills', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    db.skills.find(function(err, skills) {
        if (err) {
            res.send(err);
        } else {

            res.json(skills);
        }
    });
});
/* GET One Skill with the provided ID */
router.get('/skill/:id', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    db.skills.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, skills) {
        if (err) {
            res.send(err);
        } else {

            res.json(skills);
        }
    });
});
/* POST/SAVE a Skill */
router.post('/skill', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    var skill = req.body;
    if (!skill.title || !skill.logoURL) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.skills.save(skill, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                var constID = mongojs.ObjectId(req.params.id);
                result.newID = constID;
                res.json(result);
            }
        })
    }
});
/* PUT/UPDATE a Skill */
router.put('/skill/:id', function(req, res, next) {
    //This two headers are very important, without them the app won't work. 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var skill = req.body;
    var updObj = {};
    if (skill.title) {
        updObj.title = skill.title;
        updObj.logoURL = skill.logoURL;
        updObj.mastery = skill.mastery;
        updObj.descriptHTML = skill.descriptHTML;
    }
    if (skill.text) {
        updObj.text = skill.text;
    }
    if (!updObj) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.skills.update({
            _id: mongojs.ObjectId(req.params.id)
        }, updObj, {}, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                var constID = mongojs.ObjectId(req.params.id);
                result.newID = constID;
                res.json(result);
            }
        });
    }
});


/* DELETE a Skill */
router.delete('/skill/:id', function(req, res) {
    //This two headers are very important, without them the app won't work. 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    db.skills.remove({
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
