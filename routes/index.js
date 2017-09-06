var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.html');
});
module.exports = router;

router.post('/images', function (req, res) {

    // Store image.
    FroalaEditor.Image.upload(req, '/images/', function(err, data) {
        // Return data.
        if (err) {
            return res.send(JSON.stringify(err));
        }
        console.log(data);
        res.send(data);
    });
});