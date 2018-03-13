import { combineReducers } from 'redux';

import article from './article';
import tag from './tag';

export default combineReducers({
  article,
  tag,
});
