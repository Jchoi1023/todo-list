import React, { useEffect, useState } from 'react';
import AddToDo from '../AddToDo/AddToDo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => readTodos());

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdated = (updated) =>
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  const handleDeleted = (deleted) =>
    setTodos(todos.filter((todo) => todo.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdated={handleUpdated}
            onDeleted={handleDeleted}
          />
        ))}
      </ul>
      <AddToDo onAdd={handleAdd} />
    </section>
  );
}

function readTodos() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
