import React from 'react';
import style from './ListItemPeople.module.css'
import PropTypes from 'prop-types';

const ListItemPeople = ({ name, number, id, deliteContact }) => {
  return (
    <>
      <li className={style.listItem}>{name}: {number}
      <button type="button" onClick={deliteContact} name={id}>Delite</button>
      </li>
    </>
  )
}

export default ListItemPeople

ListItemPeople.propTypes = {
  deliteContact:PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};