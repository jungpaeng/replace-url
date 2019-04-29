import { createBrowserHistory } from "history";
import * as queryString from "query-string";

interface Indexable {
  [key: string]: any;
}

export const replaceUrl = (url: string) => {
  const history = createBrowserHistory();
  history.replace(url);
};

export const replaceUrlParams = (params: Indexable) => {
  if (typeof window === "undefined") {
    return null;
  }

  const { pathname, search } = window.location;
  const parsed = queryString.parse(search);

  replaceUrl(
    `${pathname}?` +
      queryString.stringify({
        ...parsed,
        ...params
      })
  );
};
