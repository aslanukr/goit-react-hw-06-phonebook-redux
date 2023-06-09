import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const storedContacts = JSON.parse(localStorage.getItem('contacts'));

const initialState = {
  contacts: storedContacts ?? [
    { id: 'id-1', name: 'Kyivstar', number: '0 800 300 466' },
    { id: 'id-2', name: 'Lifecell', number: '0 800 20 5433' },
    { id: 'id-3', name: 'Vodafone', number: '0 800 400 111' },
  ],
  filter: '',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'contacts/addContact') {
    return {
      ...state,
      contacts: [...state.contacts, action.payload],
    };
  }

  if (action.type === 'contacts/deleteContact') {
    return {
      ...state,
      contacts: [
        ...state.contacts.filter(contact => contact.id !== action.payload),
      ],
    };
  }

  if (action.type === 'filter/setFilter') {
    return {
      ...state,
      filter: action.payload,
    };
  }

  return state;
};

const enhancer = devToolsEnhancer();

export const store = createStore(reducer, enhancer);
