// Inside the burgers_controller.js file, import the following:  Express  &  burger.js
// Create the router for the app, and export the router at the end of your file.

var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    res.redirect('/burgers');
});

//----------- SELECT ALL
router.get('/burgers', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

//----------- INSERT ONE/ CREATE ONE
router.post('/burgers/create', function(req, res) {
    burger.insertOne(['task', 'completed'], [req.body.task, req.body.completed], function() {
        res.redirect('/burgers');

    });
});

//----------- UPDATE ONE
router.put('/burgers/update/:ID', function(req, res) {
    var condition = 'id = ' + req.params.ID;

    console.log('condition', condition);

    burger.updateOne({ completed: req.body.completed }, condition, function() {
        res.redirect('/burgers');
    });
});

// //--------------- DELETE ONE
// router.delete('/burgers/delete/:id', function(req, res) {
//     var condition = 'id = ' + req.params.ID;

//     burger.delete(condition, function() {
//         res.redirect('/burgers');
//     });
// });

module.exports = router;