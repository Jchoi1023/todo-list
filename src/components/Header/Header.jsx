import React from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import styles from './Header.module.css';
import {HiMoon, HiSun, HiHome} from 'react-icons/hi';
import { Link } from 'react-router-dom';


export default function Header({ filter, filters, onFilterChange }) {
  const {darkMode, toggleDarkMode} = useDarkMode();
  
  return (
    <header className={styles.header}>
      <div>
      <Link className={styles.home} to='/'><HiHome/></Link>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun/>}
      </button>
      </div>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
