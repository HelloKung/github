var express = require('express');
var url = require("url");
var router = express.Router();
var child_process=require("child_process");
var fs = require("fs");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'vue_base'
});
 
connection.connect();
 








router.post('/Integrate/node/runKtr', function(req, res, next) {
    
    console.log("开始调用转换");

    child_process.execFile("run.bat",null,{cwd:'G:/data/kettle培训/文件'},function(error,stdout,stderr){
      if(error !==null){
          console.log("exec error"+error)
          res.send("exec error"+error);
      }
      else{ 
        
         console.log("成功")
         res.send("成功");

      }
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
    })
  

    

});



module.exports = router;