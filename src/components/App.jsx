import { Toaster } from 'react-hot-toast';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ClontactList/ClontactList';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <Toaster />
    </Layout>
  );
};
