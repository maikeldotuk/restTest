var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
const conf = require('../conf.js');
var db = mongojs(conf.values.server, ['pages']);

/* GET All pages */
router.get('/pages', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    db.pages.find(function(err, pages) {
        if (err) {
            res.send(err);
        } else {

            res.json(pages);
        }
    });
});
/* GET One Todo with the provided ID */
router.get('/page/:id', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    db.pages.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, pages) {
        if (err) {
            res.send(err);
        } else {

            res.json(pages);
        }
    });
});
/* POST/SAVE a Todo */
router.post('/page', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    var todo = req.body;
    if (!todo.title) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.pages.save(todo, function(err, result) {
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
/* PUT/UPDATE a Todo */
router.put('/page/:id', function(req, res, next) {
    //This two headers are very important, without them the app won't work. 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var todo = req.body;
    var updObj = {};

    // Need to get the test from the old object. This is a hack and should be refactored as it is copying other
    // function
    var old = {}
    db.pages.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, pages) {
        if (err) {
            res.send(err);
        } else {
            old = pages;
            if (todo.title) {
                updObj.title = todo.title;
                updObj.content = todo.content;
                updObj.skill = todo.skill;
                updObj.imgURL = todo.imgURL !== undefined  ? todo.imgURL : 'empty';
                updObj.editDate = todo.editDate;
                updObj.test = old.test !== undefined  ? old.test : [];
                updObj.scores = old.scores !== undefined  ? old.scores : [];
            }
            console.log("Updating page");
            console.log("\n");
            console.log(updObj);

            if (!updObj) {
                res.status(400);
                res.json({
                    "error": "Invalid Data"
                });
            } else {
                db.pages.update({
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
        }
    });
});
/* DELETE a Todo */
router.delete('/page/:id', function(req, res) {
    //This two headers are very important, without them the app won't work. 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    db.pages.remove({
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
