import { Contact } from 'components/Contact/Contact';
import { ColorRing } from 'react-loader-spinner';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectVisibleContacts } from '../../redux/selectors';
import { useEffect } from 'react';
import { apiGetContacts } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactList = () => {
  const filteredProfiles = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  return (
    <List>
      {isLoading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#FFFF00', '#FFA500', '#FF0000', '#FFA500', '#FFFF00']}
        />
      )}

      {filteredProfiles.map(item => (
        <li key={item.id}>
          <Contact contact={item} />
        </li>
      ))}
    </List>
  );
};
