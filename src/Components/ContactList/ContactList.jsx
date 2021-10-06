import { useEffect } from 'react';
// import * as contactsApi from "./../../contacts-api"
import * as contactsOperations from './../../redux/contacts/contacts-operations';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import s from './ContactList.module.css';

function ContactList({ deleteContact }) {
  // function ContactList({ contacts, deleteContact }) {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.entities);
  console.log(contacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
    console.log(contacts);
  }, [dispatch]);

  return (
    <div>
      {contacts.length > 0 && (
        <ul>
          {contacts.map(cont => {
            return (
              <li className={s.contactList__item} key={cont.id}>
                <span className={s.contactList__name}>{cont.name}</span>
                <span className={s.contactList__number}>{cont.number}</span>
                <Button variant="danger" onClick={() => deleteContact(cont.id)}>
                  Delete
                </Button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export { ContactList };
