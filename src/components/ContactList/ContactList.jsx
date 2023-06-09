import { useSelector } from 'react-redux';
import { ListItem } from './ListItem';
import { List, Info } from 'components/Styles.styled';
import Notiflix from 'notiflix';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // localStorage.setItem('contacts', JSON.stringify(contacts));

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const sortedContacts = contacts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return sortedContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilteredContacts();

  return (
    <>
      <List>
        {visibleContacts.length ? (
          visibleContacts.map(({ id, name, number }) => (
            <ListItem key={id} contact={{ id, name, number }} />
          ))
        ) : (
          <>
            {Notiflix.Notify.info('No contacts found')}
            <Info>No contacts</Info>
          </>
        )}
      </List>
    </>
  );
};
