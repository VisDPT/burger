//connecting Node to MYSQL

var mysql = require('mysql');
var connection = mysql.createConnection({
    // port: 3000,
    host: 'localhost',
    user: 'root',
    password: 'Aji1234',
    database: 'not_Burgers_todo_db'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;