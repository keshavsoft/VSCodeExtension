const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('ksextension.helloWorld', async () => {
		let LocalFromInformation = await vscode.window.showInformationMessage('Hello World from KeshavSoft', "Good", "Bad");

		let uri = vscode.window.activeTextEditor.document.uri.fsPath;

		if (LocalFromInformation === "Bad") {
			// vscode.window.showInformationMessage(path.dirname(uri));


			//vscode.window.showInformationMessage('So sad to hear that');
			fs.mkdirSync(`${path.dirname(uri)}/AddListeners`)
		};

		if (LocalFromInformation === "Good") {

			vscode.window.showInformationMessage(uri);

		};
	});

	context.subscriptions.push(disposable);
}

function activate1(context) {
	let disposable = vscode.commands.registerCommand('ksextension.helloWorld', function () {
		// vscode.window.showInformationMessage(vscode.window.activeTextEditor.document.uri.path);
		const CurrentFileName = vscode.window.activeTextEditor.document.fileName;
		vscode.window.showInformationMessage(path.parse(CurrentFileName).name);

		const CurrentPath = vscode.window.activeTextEditor.document.uri.path;
		vscode.window.showInformationMessage(CurrentPath);

		// fs.writeFileSync(`${vscode.window.activeTextEditor.document.uri.path}/k1.txt`, "aaaaaaa");
	});

	context.subscriptions.push(disposable);
}


// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
};
