import PropTypes from 'prop-types';
import { BiTrash, BiPhoneCall } from 'react-icons/bi';
import { ContactItem, DeleteBtn, PhoneWrapper } from 'components/Styles.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

export const ListItem = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();

  return (
    <ContactItem>
      {name}
      <PhoneWrapper href={`tel:${number}`}>
        <BiPhoneCall color="rgba(66, 137, 254, 255)" />
        {number}
      </PhoneWrapper>
      <div>
        <DeleteBtn
          type="button"
          name="delete"
          value={id}
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          <BiTrash size="20px" />
        </DeleteBtn>
      </div>
    </ContactItem>
  );
};

ListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
