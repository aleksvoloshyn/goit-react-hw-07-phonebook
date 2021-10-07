import { combineReducers } from 'redux';
import { createReducer, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import actions from './contacts-actions';
import * as contactsActions from './contacts-actions';
import { fetchContacts, addItem } from './contacts-operations';
import { addContacts } from './../../contacts-api';

import {
  onDeleteNotification,
  onSuccsessNotification,
  onErrorNotification,
} from '../../Components/Notifications/Notifications';

const defaultContacts = [
  { id: 'id-1', name: 'Funny', number: '459-12-56' },
  { id: 'id-2', name: 'Doctor', number: '443-89-12' },
  { id: 'id-3', name: 'Anchous', number: '645-17-79' },
  { id: 'id-4', name: 'Peppylotta', number: '227-91-26' },
  { id: 'id-5', name: 'Asusena', number: '227-91-236' },
];

const items = createReducer([], {
  [actions.addContact]: (state, action) => {
    // if (
    //   state.find(cont => {
    //     return cont.name === action.payload.name;
    //   })
    // ) {
    //   onErrorNotification();
    //   return [...state];
    // } else {
    //   onSuccsessNotification();

    //   return [action.payload, ...state];
    // }
    console.log(action.payload);

    addContacts(action.payload);
  },

  [actions.deleteContact]: (state, action) => {
    onDeleteNotification();
    return state.filter(item => {
      return item.id !== action.payload;
    });
  },
});

const filter = createReducer([], {
  [actions.filter]: (_, action) => [action.payload.toLowerCase()],
});

// export default combineReducers({ items, filter });

const entities = createReducer([], {
  // [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,
  [fetchContacts.fulfilled]: (state, action) => {
    return action.payload;
  },
});

const isLoading = createReducer(false, {
  // [contactsActions.fetchContactsRequest]: () => true,
  // [contactsActions.fetchContactsSuccess]: () => false,
  // [contactsActions.fetchContactsError]: () => false,
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  // [contactsActions.fetchContactsError]: (_, action) => action.payload,
  // [contactsActions.fetchContactsRequest]: () => null,
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
  filter,
  // addContact,
  items,
});
