import React, { Component } from 'react';
import style from './Form.module.css'
import './Form.css'
import { v4 as uuidv4 } from 'uuid';
import ListPeople from './ListPeople/ListPeople';
import FillterForm from './FillterForm/FillterForm';
import ContactForm from './ContactForm/ContactForm';
import { CSSTransition } from 'react-transition-group'
import AlertModal from '../Alert/Alert'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux';
import Actions from '../../Redux/Actions/Actions'




class App extends Component {
  state = {
    name: '',
    number: '',
    AlertShow:false,
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContacts({  id: uuidv4(), name, number })
    this.setState({ name: '', number: '', filter: '' })
  }

  render() {
    const { name, number, AlertShow } = this.state;
    return (
      <>
        {AlertShow && <CSSTransition
          classNames={style}
          in={true}
          appear={true}
          timeout={1500}
          unmountOnExit
        >
          <AlertModal />
        </CSSTransition>}
        <Form onSubmit={this.handleSubmit} className={style.formContainer}>
          <CSSTransition in={true} appear={true} classNames="title" timeout={1000} unmountOnExit>
            <h2>Phonebook</h2>
          </CSSTransition>
          <ContactForm handleChange={this.handleChange} name={name} number={number} />
          <FillterForm/>
          <ListPeople/>
        </Form>
      </>

    );
  }
}

const mapStateToProps = state =>({
  value: state.filter,
  alert: state.alert
})


const mapDispatchToProps = dispatch => ({
  onAddContacts: (name, number) => dispatch(Actions.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)



