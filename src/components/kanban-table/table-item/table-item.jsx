import React, { useState } from 'react';
import './table-item.scss';
import { ReactComponent as More } from '../../../assets/images/more.svg';
import { toDDMMString } from '../../../utils/utils';
import Badge from '../../badge/badge';
import Performer from '../../performer/performer';
import { connect } from 'react-redux';
import actions from '../../../store/actions/actions';

const TableItem = ({ option, task, setStartDragOption, endDropAction }) => {
  const [isDragStart, toggleDragStatus] = useState(false);
  
  const { id, taskText, dateStart, dateEnd, taskPerformer } = task;

  const dragStartHandler = (option) => {
    toggleDragStatus(true);
    setStartDragOption(option);
  };

  const dragEndHandler = (id) => {
    toggleDragStatus(false);
    endDropAction(id);
  };

  const cardStyle = isDragStart ? { opacity: '0.5' } : null;

  return (
    <li
      className='table__item'
      style={cardStyle}
      draggable
      onDragStart={() => dragStartHandler(option)}
      onDragEnd={() => dragEndHandler(id)}
    >
      <Badge option={option} />
      <div className='table__title'>{taskText}</div>
      <div className='period'>
        <span>старт: {toDDMMString(dateStart)}</span>
        <span>финиш: {toDDMMString(dateEnd)}</span>
      </div>
      <div className='performer__container'>
        <span>Исполнитель:</span>
        <Performer>{taskPerformer}</Performer>
      </div>
      <More className='more__icon' />
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setStartDragOption: option => dispatch(actions.setStartDragOption(option)),
    endDropAction: id => dispatch(actions.endDropAction(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TableItem);
