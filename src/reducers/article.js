const initialState = {
  articles: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ARTICLE.LOAD:
      return {
        articles: action.articles,
      };
    default:
      return state;
  }
}

export const ARTICLE = {
  LOAD: 'article/load',
};

export function load() {
  return (dispatch, getState, api) => {
    return api.all().then(articles => {
      dispatch({ type: ARTICLE.LOAD, articles });
    });
  };
}
