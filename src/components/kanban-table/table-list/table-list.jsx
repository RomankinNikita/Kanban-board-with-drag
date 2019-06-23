import React from 'react';
import './table-list.scss';
import TableItem from '../table-item/table-item';
import { connect } from 'react-redux';

const TableList = ({ options, option }) => {
  return (
    <ul className='table__list'>
      {options[option].map(
        (task) => (
          <TableItem
            key={task.id}
            task={task}
            option={option}
          />
        )
      )}
    </ul>
  );
};

const mapStateToProps = ({ options }) => {
  return {
    options
  };
};

export default connect(mapStateToProps)(TableList);
