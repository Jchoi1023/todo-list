import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.options}>
      <Link className={styles.text} to={`text`}>
         Text   
      </Link>
      <Link className={styles.voice} to={`voice`}>       
        Voice   
      </Link>
    
    </div>
  );
}

export default App;

