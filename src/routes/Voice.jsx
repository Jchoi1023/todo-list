import React from 'react';
import { useState } from 'react';
import VoiceTodoList from '../components/VoiceTodoList/VoiceTodoList';
import { DarkModeProvider } from '../context/DarkModeContext';
import Header from '../components/Header/Header';

const filters = ['all', 'active', 'completed'];
export default function Voice() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header filter={filter} filters={filters} onFilterChange={setFilter} />
      <VoiceTodoList filter={filter} />
    </DarkModeProvider>
  );
}