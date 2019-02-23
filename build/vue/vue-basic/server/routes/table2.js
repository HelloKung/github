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
 

router.post('/querylist', function(req, res, next) {
    
    let pageSize = req.body.pageSize;  //1
    let pageNum = req.body.pageNum;    //5     0,5 6,10 11,15
    

    let sql = `select * from test1 limit  ${(pageSize-1)*pageNum},${pageNum}`;

    console.log(sql);

    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });



});


router.post('/querylist/total', function(req, res, next) {
    
    

    let sql = `select count(*) total from test1 `;


    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });



});


router.post('/name', function(req, res, next) {

  console.log(req.body);

  let tt = req.body.key || 123; 

  console.log(tt);

  connection.query(`SELECT '${tt}' tt, name from test1`, function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });



});


module.exports = router;