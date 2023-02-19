import { useState } from 'react';
import TodoList from '../components/TodoList/TodoList';
import Header from '../components/Header/Header';
import React from 'react';
import { DarkModeProvider } from '../context/DarkModeContext';

const filters = ['all', 'active', 'completed'];
export default function Text() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header filter={filter} filters={filters} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}
