var express = require('express');
var router = express.Router();
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


router.get('/', function(req, res, next) {

    connection.query('SELECT * from test1', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });



});

router.post('/name', function(req, res, next) {


  connection.query(`SELECT '${tt}' tt, name from test1`, function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });



});


module.exports = router;