import React from 'react';
import { BsTrashFill } from 'react-icons/bs';
import styles from './VoiceTodo.module.css';

export default function VoiceTodo({ todo, onDelete, onUpdated }) {
  const { text, status } = todo;
  const handleSubmit = () => {
    onDelete(todo);
  };
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdated({ ...todo, status });
  };

  return (
    <li className={styles.todo} key={todo.id}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id='checkbox'
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor='checkbox' className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleSubmit}>
          <BsTrashFill />
        </button>
      </span>
    </li>
  );
}
