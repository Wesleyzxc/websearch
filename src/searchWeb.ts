import * as vscode from "vscode";

//Strings
const CFG_COMMAND = "webSearch";
const CFG_PROPERTY = "QueryTemplate";
const DEFAULT_TEMPLATE = "https://www.google.com/search?q=";

//Function to launch the Search URL in default browser
export function webSearch() {
  const selectedText = getSelectedText();
  if (!selectedText) {
    return;
  }
  const uriText = encodeURI(selectedText);
  const webSearchCfg = vscode.workspace.getConfiguration(CFG_COMMAND);
  const queryTemplate: string | undefined = webSearchCfg.get(CFG_PROPERTY);
  const query = (queryTemplate ?? DEFAULT_TEMPLATE).concat(uriText);
  vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(query));
}

/**
 * @description Gets selected text whether selected or typed in cmd
 * @return {string} a URL for search based on the selection
 */
function getSelectedText() {
  // string of whole file
  const documentText = vscode.window.activeTextEditor?.document.getText();
  // selected word
  const activeSelection = vscode.window.activeTextEditor?.selection;

  if (documentText && !activeSelection?.isEmpty && activeSelection) {
    const selStartoffset = vscode.window.activeTextEditor?.document.offsetAt(activeSelection.start);
    const selEndOffset = vscode.window.activeTextEditor?.document.offsetAt(activeSelection.end);

    const selectedText = documentText.slice(selStartoffset, selEndOffset).trim();
    return selectedText.replace(/\s\s+/g, " ");
  }

  return "";
}
