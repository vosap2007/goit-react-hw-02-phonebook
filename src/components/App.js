import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import Contacts from "./Contacts";

export default class App extends Component {

  state = {
  contacts: [],
  name: ''
  }

  render() {
  return (
    <>
      <p>Phonebook</p>
      <Input />
      <Button />
      
      <p>Contacts</p>
      <Contacts/>
    </>
    );
  }
}