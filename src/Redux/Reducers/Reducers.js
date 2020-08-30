import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import Actions from '../Actions/Actions'

const onAddTask = (state, action)=>[...state, action.payload.contact];
const onRemoveContact = (state, action)=> state.filter(contact => contact.id !== action.payload.contactID)




const contacts = createReducer([], {
  [Actions.addContact]: onAddTask,
  [Actions.removeContact]:onRemoveContact,
})

const filter = createReducer('', {
  [Actions.filterChange]:(state, action)=> action.payload.filter,
})


const alert = (state = false, { type, payload }) => {
  switch (type) {
    case  Actions.alertError.type:
      return state;
    default:
      return state;
  }
};

export default combineReducers({ contacts, filter, alert })
