import { createAsyncThunk } from '@reduxjs/toolkit';

import * as API from '../../shared/services/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const data = await API.getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const newContact = await API.addContact(data);
      return newContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      const repeatedContact = contacts.items.find(
        contact => contact.number === data.number
      );
      if (repeatedContact) {
        alert(`${data.number} is already in contacts!`);
        return false;
      }
      return data;
    },
  }
);

export const removeContact = createAsyncThunk(
  'contact/remove',
  async (id, { rejectWithValue }) => {
    try {
      const contactId = await API.removeContact(id);

      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
