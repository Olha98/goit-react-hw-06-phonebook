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
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })

  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    console.log(this.props.contacts, "contacts")
    const errorContacts = this.props.contacts
    if(errorContacts && errorContacts.length > 1){
      console.log(errorContacts.lengt,"errorContacts.lengt")
      errorContacts.map(contact=> console.log(contact,"contact.name"))
    }

    this.props.onAddContacts({ id: uuidv4(), name, number });
    this.setState({ name: '', number: '', filter: '' })
  }

  alertShow = () => {
    this.props.onAlertError()
  }

  render() {
    const { name, number } = this.state;

    return (
      <>
        {alert && <CSSTransition
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
          <FillterForm />
          <ListPeople />
        </Form>
      </>
    );
  }
}

const mapStateToProps = state => {


  console.log(state, "state")
  return {
    value: state.filter,
    alert: state.alert,
    contacts: state.contacts,
  }

}


const mapDispatchToProps = dispatch => {


  return {
    onAddContacts: (name, number) => dispatch(Actions.addContact(name, number)),
    onAlertError: () => dispatch(Actions.alertError())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)



// const { contacts } = this.state;
//     if (contacts.find((item) => item.name === newContact.name)) {
//       this.setState({ AlertShow: true });
//       setTimeout(() => this.setState({ AlertShow: false }), 5000);
//       return;
//     } else {
//       this.setState((prevState) => {
//         return {
//           contacts: [...prevState.contacts, newContact],
//         };
//       });
//     }