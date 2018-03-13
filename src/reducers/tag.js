const SELECT = 'tag/SELECT';

const initialState = {
  tag: '',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SELECT:
      return {
        tag: action.tag,
      };
    default:
      return state;
  }
}

export function select(tag) {
  return { type: SELECT, tag };
}
