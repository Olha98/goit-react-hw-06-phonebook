import { v4 as uuidv4 } from 'uuid';
import {ADD, REMOVE, FILTER, ALERT} from '../constans'

const addContact = (name, number) => ({
  type: ADD,
  payload:{
    contact:{
      id: uuidv4(),
      name,
      number
    },
  },
})

const removeContact = contactID => ({
  type: REMOVE,
  payload: {
    contactID
  }
})


const filterChange = filter => ({
  type: FILTER,
  payload: {
    filter
  }
})

const AllertError =()=>({
  type: ALERT,
  payload: {
    alert: false
  }
})

export default {addContact, removeContact, filterChange, AllertError}