import { Toaster } from 'react-hot-toast';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { Layout } from '../components/Layout';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

export const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        <Toaster />
      </Layout>
    </Provider>
  );
};
