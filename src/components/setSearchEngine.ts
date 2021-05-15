import { ConfigurationTarget, window, workspace } from "vscode";
import { CFG_PROPERTY, CFG_SEARCH_SELECTED, SearchEngines, SupportedSites } from "./helpers";

export const setSearchEngine = async () => {
  const title = "Set your search engine";
  const selectedSearchEngine = await window.showQuickPick(SupportedSites, {
    placeHolder: title,
    title,
  });
  if (!selectedSearchEngine) {
    return;
  }
  const newQueryURL = SearchEngines[selectedSearchEngine];
  const webSearchCfg = workspace.getConfiguration(CFG_SEARCH_SELECTED);
  await webSearchCfg.update(CFG_PROPERTY, newQueryURL, ConfigurationTarget.Global);

  window.showInformationMessage("Search Engine successfully updated to be " + selectedSearchEngine);
};
