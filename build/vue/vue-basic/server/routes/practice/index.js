var express = require('express');
var router = express.Router();
var fs = require("fs");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'vue_base'
});
 
connection.connect();
 




router.post('/table/node/querylist', function(req, res, next) {
    
    

    let sql = `select * from test1 limit 5`;


    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });



});







router.post('/table/node/fileUpload', function (req, res) {
 
    console.log("asdas",req); 
    console.log(req.files[0]);  // 上传的文件信息
  
    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
         fs.writeFile(des_file, data, function (err) {
          if( err ){
               console.log( err );
          }else{
                response = {
                    message:'File uploaded successfully', 
                    filename:req.files[0].originalname
               };
           }
           console.log( response );
           res.end( JSON.stringify( response ) );
        });
    });
 })
  



module.exports = router;