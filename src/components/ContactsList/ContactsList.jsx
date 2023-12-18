import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'components/Redux/selectors';

import { deleteContact } from 'components/Redux/contactsSlice';

import css from './ContactsList.module.css';

export const ContactsList = contact => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter).filter;

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (contact) => dispatch(deleteContact(contact.id))

  return (
    <div className={css.contactListWrapper}>
      <ul className={css.contactsList}>
        {filteredContacts.map(contact => (
          <li className={css.contactListItem} key={contact.id}>
            {' '}
            <span>
              {contact.name}: {contact.number}{' '}
            </span>
            <button type="submit" onClick={() => handleDelete(contact)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
