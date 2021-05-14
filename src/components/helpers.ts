import { workspace } from "vscode";

// configs and commands to match package.json
export const CFG_SEARCH_WEB = "searchWeb";
export const CFG_SEARCH_SELECTED = "searchSelected";
export const CFG_PROPERTY = "QueryTemplate";
export const DEFAULT_TEMPLATE = "https://www.google.com/search?q=";

export enum SearchEngines {
  "google" = "https://www.google.com/search?q=",
  "bing" = "https://www.bing.com/search?q=",
  "duckDuckGo" = "https://duckduckgo.com/?q=",
  "yahoo" = "https://search.yahoo.com/search?q=",
}

export function getQueryString(searchText: string): string {
  const uriText = encodeURI(searchText);
  const webSearchCfg = workspace.getConfiguration(CFG_SEARCH_SELECTED);
  const queryTemplate: string | undefined = webSearchCfg.get(CFG_PROPERTY);
  return (queryTemplate ?? DEFAULT_TEMPLATE).concat(uriText);
}
