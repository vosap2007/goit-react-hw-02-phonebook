import React from "react";
import styles from '../css/PhoneBook.module.css';

const Button = () => (
    <div>
    <button className={styles.button} type="button">Add contact</button>
    </div>
);

/*const FeedbackOptions = ({onIncrement}) => (
    <div>
    <button className={styles.button}
        type="button"
        onClick={onIncrement} id="good"
        >Good</button>
        <button className={styles.button} type="button"
          onClick={onIncrement} id="neutral">Neutral</button>
          <button className={styles.button} type="button"
          onClick={onIncrement} id="bad">Bad</button>
    </div>
);*/

export default Button;