import React from 'react';
import './kanban-list-item.scss';
import Badge from '../../badge/badge';
import Performer from '../../performer/performer';
import { toDDMMString } from '../../../utils/utils';

const KanbanListItem = ({ task, option, onClick }) => {
  const { id, taskText, dateStart, dateEnd, taskPerformer } = task;

  return (
    <li className='kanban-list__item' onClick={() => onClick(id)}>
      <div className='td'>{taskText}</div>
      <div className='td'>
        <Badge option={option} />
      </div>
      <div className='td'>{toDDMMString(dateStart)}</div>
      <div className='td'>{toDDMMString(dateEnd)}</div>
      <div className='td'>
        <Performer>{taskPerformer}</Performer>
      </div>
    </li>
  );
};

export default KanbanListItem;
