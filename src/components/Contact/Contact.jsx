import { Button } from 'components/ContactForm/ContactForm.styled';
import { ContactWrapper } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'services/api';

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <ContactWrapper>
      <p>
        {name}: {number}
      </p>
      <Button onClick={() => handleDelete(id)}>Delete</Button>
    </ContactWrapper>
  );
};
