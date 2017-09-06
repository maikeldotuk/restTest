var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://maikel:54d413k14M@maikel.uk:27017/skillboxdb', ['todos']);

/* GET All Todos */
router.get('/todos', function(req, res, next) {

    db.todos.find(function(err, todos) {
        if (err) {
            res.send(err);
        } else {

            res.json(todos);
        }
    });
});
/* GET One Todo with the provided ID */
router.get('/todo/:id', function(req, res, next) {
    db.todos.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, todos) {
        if (err) {
            res.send(err);
        } else {

            res.json(todos);
        }
    });
});
/* POST/SAVE a Todo */
router.post('/todo', function(req, res, next) {

    var todo = req.body;
    if (!todo.title || !todo.logoURL) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.todos.save(todo, function(err, result) {
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
router.put('/todo/:id', function(req, res, next) {
    //This two headers are very important, without them the app won't work. 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var todo = req.body;
    var updObj = {};
    if (todo.title) {
        updObj.title = todo.title;
        updObj.logoURL = todo.logoURL;
        updObj.mastery = todo.mastery;
        updObj.descriptHTML = todo.descriptHTML;
    }
    if (todo.text) {
        updObj.text = todo.text;
    }
    if (!updObj) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.todos.update({
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


/* DELETE a Todo */
router.delete('/todo/:id', function(req, res) {
    //This two headers are very important, without them the app won't work. 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    db.todos.remove({
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
