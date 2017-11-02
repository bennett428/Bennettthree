var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var PORT = process.env.PORT || 80;

app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/node_modules/three/build'));
app.use('/js', express.static(__dirname + '/node_modules/three/examples/js'));
app.use('/fonts', express.static(__dirname + '/node_modules/three/examples/fonts'));

server.listen(PORT);

var sliderValueOnServer1 = 0;
var sliderValueOnServer2 = 0;
var sliderValueOnServer3 = 0;
var sliderValueOnServer4 = 0;
var sliderValueOnServer5 = 0;

io.on('connection',function(socket){
    console.log("client "+socket['id']+" connected");
    socket.emit('serverSendf1DataToClients',sliderValueOnServer1);
    
    socket.on('clientSendf1DataToServer',function(data1){
        console.log(data1);
        sliderValueOnServer1 = data1;
        socket.broadcast.emit('serverSendf1DataToClients',data1);
    });
});

io.on('connection',function(socket){
    socket.emit('serverSendf2DataToClients',sliderValueOnServer2);
    
    socket.on('clientSendf2DataToServer',function(data2){
        console.log(data2);
        sliderValueOnServer2 = data2;
        socket.broadcast.emit('serverSendf2DataToClients',data2);
    });
});

io.on('connection',function(socket){
    socket.emit('serverSendf3DataToClients',sliderValueOnServer3);
    
    socket.on('clientSendf3DataToServer',function(data3){
        console.log(data3);
        sliderValueOnServer3 = data3;
        socket.broadcast.emit('serverSendf3DataToClients',data3);
    });
});

io.on('connection',function(socket){
    socket.emit('serverSendf4DataToClients',sliderValueOnServer4);
    
    socket.on('clientSendf4DataToServer',function(data4){
        console.log(data4);
        sliderValueOnServer4 = data4;
        socket.broadcast.emit('serverSendf4DataToClients',data4);
    });
});

io.on('connection',function(socket){
    socket.emit('serverSendf5DataToClients',sliderValueOnServer5);
    
    socket.on('clientSendf5DataToServer',function(data5){
        console.log(data5);
        sliderValueOnServer5 = data5;
        socket.broadcast.emit('serverSendf5DataToClients',data5);
    });
});