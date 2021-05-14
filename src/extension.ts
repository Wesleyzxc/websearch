import * as vscode from "vscode";
import searchInput from "./components/searchInput";
import searchSelected from "./components/searchSelected";

export function activate(context: vscode.ExtensionContext) {
  let searchSelectedDisposable = vscode.commands.registerCommand("websearch.searchSelected", searchSelected);
  let searchInputdDisposable = vscode.commands.registerCommand("websearch.searchWeb", searchInput);

  context.subscriptions.push(searchSelectedDisposable, searchInputdDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
