var http = require('http');

var createRouter = require('http-router-fn');

var mw = require('mw-compose');


var router = createRouter();

require('./routes')(router);


http.createServer(mw([
	require('./static-files'),
	router,
	notFound
])).listen(80, function() {
	console.log('Listening on port 80')
});


// TODO: Better 404 page
function notFound(req, res) {
	res.writeHead(404);
	res.end('Not found');
}
