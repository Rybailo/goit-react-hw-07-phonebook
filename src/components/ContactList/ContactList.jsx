import { Contact } from 'components/Contact/Contact';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getError, getFilter } from '../../redux/selectors';
import { useEffect } from 'react';
import { apiGetContacts } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {visibleContacts.map(item => (
        <li key={item.id}>
          <Contact contact={item} />
        </li>
      ))}
    </List>
  );
};
