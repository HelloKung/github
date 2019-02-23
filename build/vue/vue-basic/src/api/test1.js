var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'vue_base'
});
 
connection.connect();
 
connection.query('SELECT * from test1', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results );
});