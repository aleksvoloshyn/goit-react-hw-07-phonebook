// import types from './contacts-types';
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', contact => ({
  payload: {
    id: uuidv4(),
    name: contact.name,
    number: contact.number,
  },
}));

const deleteContact = createAction('contacts/delete');

const filter = createAction('contacts/filter');

const actions = {
  addContact,
  filter,
  deleteContact,
};

// ---------------
// pending
export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
// fulfilled
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
// rejected
export const fetchContactsError = createAction('contacts/fetchContactsError');
// ---------------

export default actions;
