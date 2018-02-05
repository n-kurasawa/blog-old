const LOAD = 'article/LOAD';

const initialState = {
  articles: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        articles: action.articles,
      };
    default:
      return state;
  }
}

export function load() {
  return (dispatch, getState, api) => {
    return api.all().then(articles => {
      dispatch({ type: LOAD, articles });
    });
  };
}
