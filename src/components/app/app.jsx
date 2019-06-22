import React from 'react';
import './app.scss';
import Header from '../header/header';
import KanbanTable from '../kanban-table/kanban-table';

function App() {
  return (
    <div className="app">
      <Header />
      <KanbanTable />
    </div>
  );
}

export default App;
