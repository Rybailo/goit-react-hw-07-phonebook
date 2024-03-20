import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts ',
  async (_, thunkApi) => {
    try {
      const contacts = await axios.get(
        'https://65f84921df151452460f04ff.mockapi.io/contacts/contacts'
      );
      return contacts.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const contacts = await axios.post(
        'https://65f84921df151452460f04ff.mockapi.io/contacts/contacts/',
        contact
      );
      console.log('contact', contact);
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const contacts = await axios.delete(
        `https://65f84921df151452460f04ff.mockapi.io/contacts/contacts/${contactId}`
      );
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
