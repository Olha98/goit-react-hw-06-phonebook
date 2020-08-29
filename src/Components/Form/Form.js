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
    contacts: [],
    name: '',
    number: '',
    filter: '',
    inShow: false,
    AlertShow:false,

  }

  componentDidMount() {

    const localdata = localStorage.getItem("contacts")
    if (localdata) {
      this.setState({ contacts: JSON.parse(localdata), inShow: true })
    }
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))

    }

  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
  }

  getFilterValue = (e) => {
    this.setState({ filter: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.onAddContacts({  id: uuidv4(), name, number })
    this.setState({ name: '', number: '', filter: '' })

  }

  addContact = (newContact) => {
    const { contacts } = this.state;
    if (contacts.find((item) => item.name === newContact.name)) {
      this.setState({ AlertShow: true });
      setTimeout(() => this.setState({ AlertShow: false }), 5000);
      return;
    } else {
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    }
  }

;

  getInfo = () => {
    const { contacts, filter } = this.state;
    if (filter) {
      const filterArr = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
      return filterArr
    } else {
      return contacts
    }
  }

  deliteContac = (e) => {
    const id = e.target.name
    const { contacts } = this.state;
    const findContact = contacts.filter(contact => contact.id !== id)
    this.setState({ contacts: [...findContact] })
  }

  render() {
    const { name, number, filter, AlertShow } = this.state;

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
          <FillterForm filter={filter} onChange={this.handleChange} />
          {/* <ListPeople contacts={this.getInfo()} deliteContact={this.deliteContac} /> */}

          <ListPeople/>
        </Form>
      </>

    );
  }
}
// const mapStateToProps =()=>{

// }

const mapDispatchToProps = dispatch => ({
  onAddContacts: (name, number) => dispatch(Actions.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(App)



