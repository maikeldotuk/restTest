var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
//var db = mongojs('mongodb://admin:admin123@ds037827.mongolab.com:37827/ng2todoapp', ['pages']);
//var db = mongojs('mongodb://maikeldotuk:54d413k14M@ds036617.mlab.com:36617/skillboxdb', ['pages']);
var db = mongojs('mongodb://maikel:54d413k14M@localhost:27017/skillboxdb', ['pages']);

/* GET All pages */
router.get('/pages', function(req, res, next) {

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
    if (todo.title) {
        updObj.title = todo.title;
        updObj.content = todo.content;
        updObj.skill = todo.skill;
	updObj.editDate = todo.editDate;
    }

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
                res.json(result);
            }
        });
    }
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
