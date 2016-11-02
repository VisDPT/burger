//connecting Node to MYSQL

var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'uma1234'
    database: 'not_Burgers_todo_db'
});

connection.connec(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;