var connection = require('../config/connection.js');

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
};

function objToSql(ob) {
    // column1=value, column2=value2,...
    var arr = [];
    for (var key in ob) {
        if (ob.hasOwnProperty(key)) {
            arr.push(key + '=' + ob[key]);
        }
    }
    return arr.toString();
};


// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers.These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.


var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
            //console.log(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = 'INSERT INTO ' + table;

        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
            //console.log(result);
        });
    },
    updateOne: function(table, objColVals, status, cb) {
        var queryString = 'UPDATE ' + table;

        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += status;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
            //console.log(result);
        });
    },
    delete: function(table, status, cb) {
        var queryString = 'DELETE FROM ' + table;
        queryString = queryString + ' WHERE ';
        queryString = queryString + status;

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};



module.exports = orm;