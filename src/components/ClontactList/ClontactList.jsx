import { Contact } from 'components/Contact/Contact';
import { List } from './ClontactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

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
