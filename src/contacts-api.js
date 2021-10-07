import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

// export async function fetchContactsById(contactId) {
//   const { data } = await axios.get(`/contacts/${contactId}`);
//   return data;
// }

export async function addContacts(contact) {
  console.log(contact);
  const { data } = await axios.post(`/contacts`, contact);
  return data;
}

export async function deleteContacts(id) {
  const { data } = await axios.delete(`/contacts`, +id);
  return data;
}
