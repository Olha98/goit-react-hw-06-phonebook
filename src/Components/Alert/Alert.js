import React from 'react';
import Alert from 'react-bootstrap/Alert'
import css from './Alert.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

const AlertModal = () => {
  return (
    <div className="container-sm">
      <Alert variant="danger" className={css.boxAlert}>
        <Alert.Heading>Contact already exists!Oh snap! You got an error!</Alert.Heading>
      </Alert>
    </div>
  )
}

export default AlertModal

