const { nanoid } = require('nanoid');

export const addContact = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = id => {
  return { type: 'contacts/deleteContact', payload: id };
};

export const setFilter = value => {
  return { type: 'filter/setFilter', payload: value };
};
