const initialState = {
  articles: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ARTICLE.LOAD:
      return {
        articles: action.results,
      };
    default:
      return state;
  }
}

export const ARTICLE = {
  LOAD: 'article/load',
};

export function load() {
  return (dispatch, getState, client) => {
    return client
      .get('https://blog-77588.firebaseio.com/articles.json')
      .then(res => res.data)
      .then(data => {
        const results = data;
        dispatch({ type: ARTICLE.LOAD, results });
      });
  };
}