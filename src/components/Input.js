import React, { Component } from 'react';
//import PositiveFeedbackPercentage from "./Positive";
//import NotificationMessage from './NotificationMessage';
import styles from '../css/PhoneBook.module.css';

export default class Input extends Component {
   render() { 
     return (
      <div>
        <p className={styles.text}>Name</p>
        <input></input>
      </div>
    ); 
  }
}

/*export default class Statistics extends Component {

  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleIncrement = e =>
    this.setState(state => ({
      [e.target.id]:
        Number(state[e.target.id]) + 1,
    }));

  render() { 
    return (
      <div className={}>

        <span className={styles.title}>Please leave feedback</span>

        <FeedbackOptions onIncrement={this.handleIncrement} />
        
        <div>
          <span className={styles.title}>Statistics</span>
        </div>
        

        
        {(this.state.good || this.state.neutral || this.state.bad) > 0 &&
          <div>
          <p className={styles.state} >Good: {this.state.good}</p>
          <p className={styles.state}>Neutral: {this.state.neutral}</p>
          <p className={styles.state}>Bad: {this.state.bad}</p>
         </div>}

        {(this.state.good || this.state.neutral || this.state.bad) > 0 && <TotalFeedback onTotal={this.state} /> }

        {(this.state.good || this.state.neutral || this.state.bad) > 0 && <PositiveFeedbackPercentage onTotal={this.state} /> }
        
        {(this.state.good || this.state.neutral || this.state.bad) === 0 && <NotificationMessage /> }

        
      </div>); 
    
  }
}
*/