var orm = require('../config/orm.js');

/*
Here is where you setup a model for how to interface with the database.
*/
var toDosNotBurger = {
    selectAll: function(cb) {
        orm.selectAll('toDo', function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne('toDo', cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne('toDo', objColVals, condition, function(res) {
            cb(res);
        });
    }
}


module.exports = toDosNotBurger;