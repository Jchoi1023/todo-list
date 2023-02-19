import { useEffect, useState } from 'react';
import { BsTrashFill } from 'react-icons/bs';
import styles from './VoiceTodoList.module.css';
import { v4 as uuidv4 } from 'uuid';
import VoiceTodo from '../VoiceTodo/VoiceTodo';
import VoiceTodoAdd from '../VoiceTodoAdd/VoiceTodoAdd';

function VideoTodoList({ filter }) {
  const [savedNotes, setSavedNotes] = useState(() => readTodo());

  const handleSaveNote = (note) => setSavedNotes([...savedNotes, note]);
  const handleUpdated = (updated) =>
    setSavedNotes(
      savedNotes.map((todo) => (todo.id === updated.id ? updated : todo))
    );
  const handleDelete = (deleted) =>
    setSavedNotes(savedNotes.filter((note) => note.id !== deleted.id));
  const filtered = getFilteredItems(savedNotes, filter);

  useEffect(() =>
    localStorage.setItem('savedNotes', JSON.stringify(savedNotes))
  );
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((note) => (
          <VoiceTodo
            key={note.id}
            todo={note}
            onDelete={handleDelete}
            onUpdated={handleUpdated}
          />
        ))}
      </ul>
      <VoiceTodoAdd onAdd={handleSaveNote} />
    </section>
  );
}

function readTodo() {
  const savedNotes = localStorage.getItem('savedNotes');
  return savedNotes ? JSON.parse(savedNotes) : [];
}

function getFilteredItems(savedNotes, filter) {
  if (filter === 'all') {
    return savedNotes;
  }
  return savedNotes.filter((todo) => todo.status === filter);
}

export default VideoTodoList;
