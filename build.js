var fs = require('fs');

var path = require('path');

var uglifycss = require('uglifycss');


var header = loadTemplate('header');

var footer = loadTemplate('footer');


[
	'index',
	'menu',
	'map',
	'feedback',
	'contact',
	'404',
].forEach(buildHTMLByName);


minifyCSS([
	'public/css/reset.css',
	'public/css/common.css',
	'public/css/home.css',
	'public/css/feedback.css',
	'public/css/contact.css',
], 'public/css/compiled.min.css');

minifyCSS([
	'public/css/common_520.css',
	'public/css/home_520.css',
], 'public/css/compiled_520.min.css');


function loadTemplate(name) {
	return fs.readFileSync(__dirname + '/templates/' + name + '.html', 'utf8');
}

function render(template) {
	template.contents = header + template.contents + footer;

	return template;
}

function buildHTMLByName(name) {
	buildHTML('templates/' + name + '.html', 'public/' + name + '.html');
}

function buildHTML(inputFile, outputFile) {
	var contents = fs.readFileSync(inputFile, 'utf8');

	contents = header + contents + footer;

	fs.writeFileSync(path.resolve(__dirname, outputFile), contents);
}

function minifyCSS(inputFiles, outputFile) {
	inputFiles = inputFiles.map(function(file) {
		return path.resolve(__dirname, file);
	});

	var uglified = uglifycss.processFiles(inputFiles);

	fs.writeFileSync(path.resolve(__dirname, outputFile), uglified);
}