import { combineReducers } from 'redux';
import constans from '../constans'


const contacts = (state = [], { type, payload }) => {

  switch (type) {
    case constans.ADD:
      return [...state, payload.contact];
    case constans.REMOVE:
      return state.filter(contact => contact.id !== payload.contactID)




    default:
      return state;
  }
};
const alert = (state = false, action) => state;

const filter = (state = '', action) => state;



export default combineReducers({ contacts, filter, alert })
