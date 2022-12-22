import React from 'react';
import { BsTrashFill } from 'react-icons/bs';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdated, onDeleted }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdated({ ...todo, status });
  };
  const handleSubmit = () => {
    onDeleted(todo);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id='checkbox'
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor='checkbox' className={styles.text}>{text}</label>
      <span className={styles.icon}>
        <button onClick={handleSubmit} className={styles.button}>
          <BsTrashFill />
        </button>
      </span>
    </li>
  );
}
