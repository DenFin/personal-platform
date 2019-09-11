const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'personal-platform',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

connection.connect(function(error){
    if(error) throw error;
});


module.exports = connection;

module.exports = {
    connection
};