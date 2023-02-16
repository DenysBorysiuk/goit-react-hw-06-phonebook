import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
// import PropTypes from 'prop-types';
import { List, Notice } from './ContactList.styled';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <List>
      {contacts.length === 0 ? (
        <Notice>Contacts list is empty!</Notice>
      ) : (
        visibleContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))
      )}
    </List>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
