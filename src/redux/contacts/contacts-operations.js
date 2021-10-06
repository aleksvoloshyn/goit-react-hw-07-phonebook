import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsActions from './contacts-actions';
import * as contactsApi from './../../contacts-api';
// import axios from 'axios';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());
  try {
    const contacts = await contactsApi.fetchContacts();

    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};
