import React from 'react';
import './kanban-table.scss';
import Option from './option/option';
import { connect } from 'react-redux';

const KanbanTable = ({ options }) => {
  return (
    <div className='options'>
      {Object.keys(options).map((task, idx) => (
        <Option option={task} key={idx} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ options }) => {
  return {
    options
  };
};

export default connect(mapStateToProps)(KanbanTable);
