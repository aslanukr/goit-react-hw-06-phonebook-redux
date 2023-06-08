import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import phoneIcon from '../images/phone-icon.png';
import { Container, Logo, Icon, SectionTitle, Wrapper } from './Styles.styled';
import { useState, useEffect } from 'react';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Kyivstar', number: '0 800 300 466' },
      { id: 'id-2', name: 'Lifecell', number: '0 800 20 5433' },
      { id: 'id-3', name: 'Vodafone', number: '0 800 400 111' },
    ]
  );

  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    if (
      contacts
        .map(contact => contact.name.toLowerCase())
        .includes(normalizedName)
    )
      return alert(`${name} is already in contacts`);

    const newContact = { id: nanoid(), name, number };
    setContacts(prev => [...prev, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  const filterHandler = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const sortedContacts = contacts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return sortedContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Logo href="">
        <Icon src={phoneIcon} alt="phone icon" />
        <h1>Phonebook</h1>
      </Logo>

      <ContactForm onSubmit={addContact} />
      <Wrapper>
        <SectionTitle>Contacts</SectionTitle>
        <Filter filter={filter} onChange={filterHandler} />
      </Wrapper>
      <ContactList
        contactsArray={getFilteredContacts()}
        deleteContact={deleteContact}
      />
    </Container>
  );
}
