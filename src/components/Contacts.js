import React from "react";
import styles from '../css/PhoneBook.module.css'; 

const Contacts = ({contacts, onRemoveContacts}) => (

    <ul>
        {contacts.map(contact =>
            <li key={contact.id}>
            <p className={styles.text}>{contact.name}:{contact.number}</p>
            <section>
                    <button type="button"
                        onClick={() => onRemoveContacts(contact.id)}>
                        Delet</button>
            </section>
        </li>)}
    </ul>
);

export default Contacts;