const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('ksextension.helloWorld', function () {
		vscode.window.showInformationMessage('Hello World from KeshavSoft---!');
	});

	

	context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
