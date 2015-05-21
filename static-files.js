var createDirHandler = require('file-mw');


module.exports = createDirHandler(__dirname + '/public', {
	buffer: true,
	watch: true
	// TODO: Use cache
});
