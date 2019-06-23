import React, {memo} from 'react';
import './modalTask.scss';
import Badge from '../../badge/badge';
import { toDDMMString } from '../../../utils/utils';

const ModalTask = memo(({task}) => {
  const {taskText, dateStart, dateEnd, option} = task;
  
  return (
    <div className='task'>
      <p className='task__title'>Название</p>
      <p className='task__name'>{taskText}</p>
      <div className='task__underline' />
      <div className='date__container'>
        <div className='date__item'>{toDDMMString(dateStart)}</div>
        <div className='date__item'>{toDDMMString(dateEnd)}</div>
      </div>
      <Badge option={option} />
    </div>
  );
});

export default ModalTask;
