import { combineReducers } from 'redux';
import keys from './keys_reducers';
import selectedValues from './selections_reducers';
import modal from './modal_reducer'

export default combineReducers({
  keys,
  selectedValues,
  modal
});
