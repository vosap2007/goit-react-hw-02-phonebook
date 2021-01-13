import React, { Component } from 'react';
import Filter from './Filter';
import Input from './Input';
import Contacts from "./Contacts";
import { v4 as uuidv4 } from 'uuid';
import styles from '../css/PhoneBook.module.css';

export default class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }

  changeFilter = filter => {
    this.setState({ filter });
  };

  addContacts = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      completed: false,
      number,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      };
    });
  };

  removeContacts = contactsId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter (contact =>contact.id !== contactsId),
      };
    });
  }

  getVisibleContacts = () => { 
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {

    const visibleContacts = this.getVisibleContacts();

  return (
    <>
      <div className={styles.box}>
        <p className={styles.title}>Phonebook</p>
        <div className={styles.border}>
          <Input onAddContact={this.addContacts} />
        </div>
      
        <p className={styles.title}>Contacts</p>
        <p>Find contacts by name</p>
        {visibleContacts.length > 1 && (
        <Filter value={this.state.filter} onChange={this.changeFilter }/>)}
        {visibleContacts.length > 0 && (<Contacts
          contacts={visibleContacts}
        onRemoveContacts={this.removeContacts }/>)}
      </div>
    </>
    );
  }
}