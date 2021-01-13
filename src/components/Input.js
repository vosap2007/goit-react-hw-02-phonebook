import React, { Component } from 'react';
import styles from '../css/PhoneBook.module.css';

export default class Input extends Component {
  state = {
    name: '',
    number: ''
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value,
     });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact(this.state.name)
   };

   render() { 
     return (
      <div>
         <form onSubmit={this.handleSubmit}>
           <label className={styles.text}>Name
         <input
           tape="text"
           value={this.state.name}
           onChange={this.handleInputChange}
               name="name" />
           </label>
         </form>
         
         <form onSubmit={this.handleSubmit}>
           <label className={styles.text}>Number
         <input
           tape="number"
           value={this.state.number}
           onChange={this.handleInputChange}
               name="number" />
           </label>
           <button className={styles.button} type="submit">Add contact</button>
         </form>
      </div>
    ); 
  }
}