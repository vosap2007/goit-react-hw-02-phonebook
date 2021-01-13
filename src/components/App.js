import React, { Component } from 'react';
//import Button from './Button';
import Input from './Input';
import Contacts from "./Contacts";
import { uuid } from 'uuidv4';
import styles from '../css/PhoneBook.module.css';

export default class App extends Component {

  state = {
  contacts: [],
  name: '',
  number: ''
  }

  addContacts = name => {
    const contact = {
      id: uuid(),
      name,
      completed: false
    };

    this.setState(prevState => {
      return {
        contact: [...prevState.contacts, contact]
      };
    });
  };

  removeContacts = contactsId => {
    this.setState(prevState => {
      return {
        contact: prevState.contacts.filter (contact =>contact.id !== contactsId),
      };
    });
  }

  render() {
  return (
    <>
      <div className={styles.box}>
        <p className={styles.title}>Phonebook</p>
        <div className={styles.border}>
          <Input onAddContact={this.addContacts} />
        </div>
      
      <p className={styles.title}>Contacts</p>
        {this.state.contacts.length > 0 && (<Contacts
          contacts={this.state.contacts}
        onRemoveContacts={this.removeContacts }/>)}
      </div>
    </>
    );
  }
}