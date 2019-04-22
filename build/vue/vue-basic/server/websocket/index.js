

var app = require('../app');
var http = require('http');
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'vue_base'
  });
   
  connection.connect();

var server = http.createServer(app);

var io = require('socket.io').listen(server);

let timer = null;

io.on('connection', (socket)=> {

    

    io.sockets.emit('conn', '连接成功');

    socket.on("start",(socket)=>{

 
    
        timer = setInterval(()=>{
    
             io.sockets.emit('message', '请求数据');
    
        },1000)

        // let sql = "select * from router"

        // connection.query(sql, function (error, results, fields) {
        //     if (error) throw error;
        //     //res.send(results);

        //     io.sockets.emit('message', '请求数据:'+JSON.stringify(results));
        // });
    
    
    })

    socket.on("end",(socket)=>{

        clearInterval(timer);
    
        io.sockets.emit('message', '结束请求');
    
    })


})




module.exports = io;
