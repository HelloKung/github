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
 




router.post('/getRouter', function(req, res, next) {
    
    

    let sql = `select * from router `;


    connection.query(sql, function (error, results, fields) {
        if (error) throw error;

        res.send(results);
      });



});



module.exports = router;