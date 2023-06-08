import PropTypes from 'prop-types';
import { ListItem } from './ListItem';
import { List, Info } from 'components/Styles.styled';
import Notiflix from 'notiflix';

export const ContactList = ({ contactsArray, deleteContact }) => {
  return (
    <>
      <List>
        {contactsArray.length ? (
          contactsArray.map(({ id, name, number }) => (
            <ListItem
              key={id}
              contact={{ id, name, number }}
              deleteItem={deleteContact}
            />
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

ContactList.propTypes = {
  contactsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
