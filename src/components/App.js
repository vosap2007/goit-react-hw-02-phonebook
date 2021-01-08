import React, { Component } from 'react';
import FeedbackOptions from './Button';
import Statistics from './Input';
import Contacts from "./Total";

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