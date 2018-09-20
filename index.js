var express = require('express');
var server = express();
//var router = express.Router();

server.set('view engine', 'html');
server.use('/', express.static(__dirname));

server.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
});

server.get('/', function(req, res){
	res.sendFile('index.html');
});



server.listen(8080, function(){
	console.log('Server listening at port 8080');
});