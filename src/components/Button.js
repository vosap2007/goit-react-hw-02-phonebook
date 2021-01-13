import React from "react";
import styles from '../css/PhoneBook.module.css';

export default function Button({onAddContact}) {
    return (
        <div>
            <button
                className={styles.button}
                type="button"
                onClick={onAddContact}>Add contact
            </button>
        </div>
    );
}


/*export default class Button extends Component{
    state = {};

    handleSubmit = e => {
        e.preventDefault();

        console.log('submit');
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <button className={styles.button} type="submit">Add contact</button>
            </form>
        );
    }
}*/