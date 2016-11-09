var orm = require('../config/orm.js');

/*
Here is where you setup a model for how to interface with the database.
*/
var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, status, cb) {
        orm.updateOne('burgers', objColVals, status, function(res) {
            cb(res);
        });
    },
    delete: function(status, cb) {
        orm.delete('burgers', status, function(res) {
            cb(res);
        });
    }
};


module.exports = burger;