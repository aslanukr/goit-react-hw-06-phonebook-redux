import { combineReducers } from 'redux';
import { filterReducer } from './filter/filterReducer';
import { contactsReducer } from './contacts/contactsReducer';

export const reducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});
