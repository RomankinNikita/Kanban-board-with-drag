import React from 'react';
import './app.scss';
import Header from '../header/header';
import KanbanTable from '../kanban-table/kanban-table';
import KanbanList from '../kanban-list/kanban-list';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route path='/table' component={KanbanTable} />
        <Route path='/list' component={KanbanList} />
        <Redirect from='/' to='/table' />
        <Redirect to='/table' />
      </Switch>
    </div>
  );
}

export default App;
