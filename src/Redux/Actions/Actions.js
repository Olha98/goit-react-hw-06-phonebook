import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/ADD', contact=>({ payload:{contact}}))
const removeContact = createAction('contact/REMOVE', contactID=>({ payload: {contactID}}))
const filterChange = createAction('contacts/filterChange', filter=>({ payload:{filter}}))
const alertError = createAction('contacts/alertError')

export default {addContact, removeContact, filterChange, alertError}