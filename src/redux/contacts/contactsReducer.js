import { addContact, deleteContact } from 'redux/types';
import { initialState } from './initialState';

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case addContact:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case deleteContact:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
