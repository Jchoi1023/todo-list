import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import styles from './AddToDo.module.css'

export default function AddToDo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({id:uuidv4(), text, status:'active'});
    setText('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
      className={styles.input}
        type='text'
        placeholder='Add to do'
        value={text}
        onChange={handleChange}
      />
        <button className={styles.button}>Add</button>
    </form>
  );
}