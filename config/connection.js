//connecting Node to MYSQL

var mysql = require('mysql');
var connection = mysql.createConnection({
    // port: 3000,
    host: 'localhost',
    user: 'root',
    password: 'JkJkJk',
    database: 'not_Burgers_todo_db'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected to the Database as id ' + connection.threadId);
});

module.exports = connection;