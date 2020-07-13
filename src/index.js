import _ from 'lodash';
import monaco from 'monaco-editor';

function component() {
	const element = document.createElement('div');

	monaco.editor.create(document.getElementById("container"), {
		value: "function hello() {\n\talert('Hello world!');\n}",
		language: "javascript"
	});
	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
}

document.body.appendChild(component());