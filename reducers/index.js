import { combineReducers } from 'redux';
import keys from './keys_reducers';
import selectedValues from './selections_reducers';

export default combineReducers({
  keys,
  selectedValues
});
