
import constans from '../constans'


const addContact = (contact) => ({
  type: constans.ADD,
  payload:{
    contact
  },
})

const removeContact = contactID => ({
  type: constans.REMOVE,
  payload: {
    contactID
  }
})


const filterChange = filter => ({
  type: constans.FILTER,
  payload: {
    filter
  }
})

const AllertError =()=>({
  type: constans.ALERT,
  payload: {
    alert: false
  }
})

export default {addContact, removeContact, filterChange, AllertError}