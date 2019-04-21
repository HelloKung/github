

var app = require('../app');
var http = require('http');

var server = http.createServer(app);

var io = require('socket.io').listen(server);

let timer = null;

io.on('connection', (socket)=> {

    

    io.sockets.emit('conn', '连接成功');

    socket.on("start",(socket)=>{

 
    
        timer = setInterval(()=>{
    
             io.sockets.emit('message', '请求数据');
    
        },1000)
    
    
    })

    socket.on("end",(socket)=>{

        clearInterval(timer);
    
        io.sockets.emit('message', '结束请求');
    
    })


})




module.exports = io;
