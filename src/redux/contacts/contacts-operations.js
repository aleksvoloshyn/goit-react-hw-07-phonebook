import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as contactsActions from './contacts-actions';
import * as contactsApi from './../../contacts-api';
// import axios from 'axios';

// export const fetchContacts = () => async dispatch => {
//   dispatch(contactsActions.fetchContactsRequest());
//   try {
//     const contacts = await contactsApi.fetchContacts();

//     dispatch(contactsActions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error));
//   }
// };

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addItem = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    try {
      const contacts = await contactsApi.addContacts(contact);
      return contacts;
    } catch (error) {
      return error;
    }
  },
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async contact => {
    try {
      const contacts = await contactsApi.addContacts(contact);
      return contacts;
    } catch (error) {
      return error;
    }
  },
);
