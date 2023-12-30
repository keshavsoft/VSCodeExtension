const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
let activate = async (context) => {
	let disposable = vscode.commands.registerCommand('ksextension.helloWorld', async ()=> {
	let LocalFromInformation= await	vscode.window.showInformationMessage('Hello World from KeshavSoft',"Good","Bad");

	if (LocalFromInformation==="Bad") {
		vscode.window.showInformationMessage('So sad to hear that');
	};
	});

	context.subscriptions.push(disposable);
};

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
