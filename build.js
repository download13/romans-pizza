var fs = require('fs');


var header = loadTemplate('header').contents;

var footer = loadTemplate('footer').contents;


['index', 'menu', 'map', 'feedback', 'contact']
.map(loadTemplate)
.map(render)
.forEach(function(file) {
	fs.writeFileSync(__dirname + '/public/' + file.name + '.html', file.contents);
});


function loadTemplate(name) {
	return {
		name: name,
		contents: fs.readFileSync(__dirname + '/templates/' + name + '.html', 'utf8')
	};
}

function render(template) {
	template.contents = header + template.contents + footer;

	return template;
}
