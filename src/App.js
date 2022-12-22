import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import React from 'react';
import { DarkModeProvider } from './context/DarkModeContext';


const filters =['all', 'active', 'completed'];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header filter={filter} filters={filters} onFilterChange={setFilter}/>
      <TodoList filter={filter}/>
    </DarkModeProvider>
  );
}

export default App;
