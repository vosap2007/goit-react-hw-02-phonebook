import React from "react";
//import styles from '../css/PhoneBook.module.css';

export default function Filter({value, onChange}) {
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
}