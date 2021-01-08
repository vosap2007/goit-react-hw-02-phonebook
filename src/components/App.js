import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import Contacts from "./Contacts";
import styles from '../css/PhoneBook.module.css';

export default class App extends Component {

  state = {
  contacts: [],
  name: ''
  }

  render() {
  return (
    <>
      <div className={styles.box}>
        <p className={styles.title}>Phonebook</p>
        <div className={styles.border}>
      <Input />
          <Button />
        </div>
      
      <p className={styles.title}>Contacts</p>
        <Contacts />
      </div>
    </>
    );
  }
}