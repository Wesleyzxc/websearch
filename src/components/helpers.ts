import { workspace } from "vscode";

interface SearchEngineMap {
  [name: string]: string;
}

// configs and commands to match package.json
export const CFG_SEARCH_WEB = "searchWeb";
export const CFG_SEARCH_SELECTED = "websearch";
export const CFG_PROPERTY = "QueryTemplate";
export const DEFAULT_TEMPLATE = "https://www.google.com/search?q=";

export const SearchEngines: SearchEngineMap = {
  Google: "https://www.google.com/search?q=",
  Bing: "https://www.bing.com/search?q=",
  DuckDuckGo: "https://duckduckgo.com/?q=",
  Yahoo: "https://search.yahoo.com/search?q=",
};

export const SupportedSites = Object.keys(SearchEngines);

export function getQueryString(searchText: string): string {
  const uriText = encodeURI(searchText);
  const webSearchCfg = workspace.getConfiguration(CFG_SEARCH_SELECTED);
  const queryTemplate: string | undefined = webSearchCfg.get(CFG_PROPERTY);
  return (queryTemplate ?? DEFAULT_TEMPLATE).concat(uriText);
}
