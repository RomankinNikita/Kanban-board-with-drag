import React, {useState} from 'react';
import './table-item.scss';
import { ReactComponent as More } from '../../../assets/images/more.svg';
import { toDDMMString } from '../../../utils/utils';
import Badge from '../../badge/badge';
import Performer from '../../performer/performer';

const TableItem = ({ option, task }) => {
  const [isDragStart, toggleDragStatus] = useState(false);

  const { taskText, dateStart, dateEnd, taskPerformer } = task;

  const dragStartHandler = () => {
    toggleDragStatus(true);
  }

  const dragEndHandler = () => {
    toggleDragStatus(false);
  }

  const cardStyle = isDragStart ? {opacity: '0.5'} : null;

  return (
    <li
      className='table__item'
      style={cardStyle}
      draggable
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
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

export default TableItem;
