var fileMw = require('file-mw');


module.exports = function(router) {
	router.get('/', createHandler('home'));

	router.get('/menu', createHandler('menu'));

	router.get('/map', createHandler('map'));

	router.get('/feedback', createHandler('feedback'));

	router.get('/contact', createHandler('contact'));
};


function createHandler(name) {
	// TODO: Use cache
	return fileMw.createFileHandler(__dirname + '/pages/' + name + '.html', {buffer: true});
}
