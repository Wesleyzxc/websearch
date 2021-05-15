import * as vscode from "vscode";
import { getQueryString } from "./helpers";

async function searchInput() {
  const inputText = await vscode.window.showInputBox({
    value: "",
    placeHolder: "Type in what you want to search",
  });
  if (inputText) {
    const query = getQueryString(inputText);
    vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(query));
  }
}

export default searchInput;
