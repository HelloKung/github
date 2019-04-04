var express = require('express');
var url = require("url");
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


router.get('/table/node/getMaptitle', function (req, res) {

    console.log(req.body,req.query);


    let {type,zoom,x,y} = req.query;

    connection.query(`select Tile from gmapnetcache where Type=${type} and Zoom=${zoom} and X=${x} and Y=${y}`, function (error, results, fields) {
        if (error || !results || !results[0]) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "text/plain");
            res.write(error + "\n");
            res.end();
            return;
        };
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/png');
        res.write(results[0].Tile, "binary");
        res.end();
    });
})




// router.post('/table/node/fileUpload', function (req, res) {
 
//     console.log("asdas",req); 
//     console.log(req.files[0]);  // 上传的文件信息
  
//     var des_file = __dirname + "/" + req.files[0].originalname;
//     fs.readFile( req.files[0].path, function (err, data) {
//          fs.writeFile(des_file, data, function (err) {
//           if( err ){
//                console.log( err );
//           }else{
//                 res = {
//                     message:'File uploaded successfully', 
//                     filename:req.files[0].originalname
//                };
//            }
//            console.log( res );
//            res.end( JSON.stringify( res ) );
//         });
//     });
//  })
  

 





module.exports = router;