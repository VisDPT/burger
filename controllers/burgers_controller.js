// Inside the burgers_controller.js file, import the following:  Express  &  burger.js
// Create the router for the app, and export the router at the end of your file.

var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    res.redirect('/toDo');
});

//----------- SELECT ALL
router.get('/toDo', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = { toDo: data };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

//----------- INSERT ONE/ CREATE ONE
router.post('/toDo/create', function(req, res) {
    burger.insertOne(['toDoItem', 'completed'], [req.body.toDoItem, req.body.completed], function() {
        res.redirect('/toDo');
    });
});

//----------- UPDATE ONE
router.put('/toDo/update/:id', function(req, res) {
    var condition = 'id = ' + req.params.ID;

    console.log('condition', condition);

    burger.updateOne({ toDoItem: req.body.burger }, condition, function() {
        res.redirect('/toDo');
    });
});

module.exports = router;