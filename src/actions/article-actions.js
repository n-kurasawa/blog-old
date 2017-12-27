const url = 'https://blog-77588.firebaseio.com/articles.json';

import { ARTICLE } from './';

export function load() {
  return (dispatch, getState, client) => {
    return client
      .get(url)
      .then(res => res.data)
      .then(data => {
        const results = data;
        dispatch({ type: ARTICLE.LOAD, results });
      });
  };
}
