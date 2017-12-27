import { ARTICLE } from '../actions';

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
