import axois from 'axios';

export const requestContacts = async () => {
  const { data } = await axois.get(
    'https://65f84921df151452460f04ff.mockapi.io/contacts/contacts'
  );

  return data;
};
/* export const requestContacts = async () => {
  const { data } = await axois.get(
    'https://65f84921df151452460f04ff.mockapi.io/contacts/contacts'
  );

  return data;
};
 */
