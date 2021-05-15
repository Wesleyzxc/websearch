import * as vscode from "vscode";
import searchInput from "./components/searchInput";
import searchSelected from "./components/searchSelected";
import { setSearchEngine } from "./components/setSearchEngine";

export function activate(context: vscode.ExtensionContext) {
  const setSearchEngineDisposable = vscode.commands.registerCommand("websearch.configureViewOnWindowOpen", setSearchEngine);
  const searchSelectedDisposable = vscode.commands.registerCommand("websearch.searchSelected", searchSelected);
  const searchInputdDisposable = vscode.commands.registerCommand("websearch.searchWeb", searchInput);

  context.subscriptions.push(searchSelectedDisposable, searchInputdDisposable, setSearchEngineDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
