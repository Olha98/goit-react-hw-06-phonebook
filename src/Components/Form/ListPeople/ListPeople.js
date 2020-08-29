import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListItemPeople from './ListItemPeople/ListItemPeople';
import style from './ListPeople.module.css'
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ListPeople = ({ contacts, deliteContact }) => {

  return (
    <TransitionGroup className={style.list}>
   
      {contacts.map(contact => 
       <CSSTransition
       key={contact.id}
       timeout={500}
       classNames={style}>
      <ListItemPeople key={uuidv4()} {...contact} deliteContact={deliteContact} />
     </CSSTransition>
      
      )}
    </TransitionGroup>
  )

}

export default ListPeople

ListPeople.propTypes = {
  deliteContact:PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};