import React, { useState } from 'react';
import styles from './VoiceTodoAdd.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function VoiceTodoAdd({ onAdd }) {
  const SpeechRecognition =
    window.webkitSpeechRecognition || window.SpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = ' en-US';

  const [text, setText] = useState('');

  const handleSpeak = () => {
    recognition.start();
    handleListen();
    console.log('start');
  };

  const handleStop = () => {
    recognition.stop();
    console.log('stop');
  };

  const handleReset = () => {
    setText('');
  }
  const handleListen = () => {
    recognition.continuous = true;
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      console.log(transcript);
      setText(transcript);
    };
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('save');
    onAdd({ id: uuidv4(), text, status: 'active' });
    console.log(text);
    setText('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.startstop}>
        <div>
          <button className={styles.start} onClick={handleSpeak}>
            Start
          </button>
          <button className={styles.stop} onClick={handleStop}>
            Stop
          </button>
          <button className={styles.reset} onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          <textarea
            className={styles.text}
            value={text}
            onChange={handleChange}
          ></textarea>
        </label>
        <button className={styles.save} disabled={!text}>
          Save
        </button>
      </form>
    </div>
  );
}
