import PropTypes from 'prop-types';
import { BiTrash, BiPhoneCall } from 'react-icons/bi';
import { ContactItem, DeleteBtn, PhoneWrapper } from 'components/Styles.styled';

export const ListItem = ({ contact, deleteItem }) => {
  const { id, name, number } = contact;
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
          onClick={() => deleteItem(id)}
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
  deleteItem: PropTypes.func.isRequired,
};
