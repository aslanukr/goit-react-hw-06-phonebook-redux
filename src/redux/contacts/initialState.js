const storedContacts = JSON.parse(localStorage.getItem('contacts'));

export const initialState = {
  contacts: storedContacts ?? [
    { id: 'id-1', name: 'Kyivstar', number: '0 800 300 466' },
    { id: 'id-2', name: 'Lifecell', number: '0 800 20 5433' },
    { id: 'id-3', name: 'Vodafone', number: '0 800 400 111' },
  ],
};
