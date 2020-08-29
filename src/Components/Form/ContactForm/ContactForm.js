import React from 'react';
import style from './ContactForm.module.css'
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const ContactForm = ({ name, number, handleChange }) => {
  return (
    <div className={style.containerUser}>
      <label>
       <p>Name</p>
       <input type="text" name="name" onChange={handleChange} value={name} />
      </label>
      <label>
        <p>Number</p>
           <input type="text" name="number" onChange={handleChange} value={number} />
      </label>
      {/* <Button variant="outline-primary">Add contacts</Button>{' '} */}
      <button type="submit">Add</button>
    </div>
  )
}

export default ContactForm

ContactForm.propTypes = {
  handleChange:PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};