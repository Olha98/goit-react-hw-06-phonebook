import React from 'react';
import style from './FillterForm.module.css'
import PropTypes from 'prop-types';

const FillterForm=({filter, onChange})=>{
return(
  <>
    <h2>Contacts</h2>
      <label>
      <p className={style.contactsTitle}>Find contacts by name</p>
          <input type="text" name="filter"  value={filter} onChange={onChange}/>
      </label>
</>
)

}

export default FillterForm

FillterForm.propTypes = {
  onChange:PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};