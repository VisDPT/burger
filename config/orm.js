//importing (require) connection.js into orm.js
var connection = ('../config/connection.js');

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
            console.log(result);
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
            console.log(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = 'UPDATE ' + table;

        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
            console.log(result);

        });
    }
};



module.exports = orm;