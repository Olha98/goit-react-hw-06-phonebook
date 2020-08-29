import { combineReducers } from 'redux';

const contacts =(state =[], action)=>state;
const alert =(state = false, action)=> state;

const filter =(state ='', action)=> state;



export default combineReducers({contacts, filter, alert})
