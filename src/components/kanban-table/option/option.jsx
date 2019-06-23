import React from 'react'
import './option.scss';
import { ReactComponent as Plus } from '../../../assets/images/plus/black.svg';
import TableList from '../table-list/table-list';

const Option = ({option}) => {
  let currentOption;
  switch(option)  {
    case 'toDo':
      currentOption = 'Сделать';
      break;
    case 'doing':
      currentOption = 'В процессе';
      break;
    case 'done':
      currentOption = 'Сделано';
      break;
    default:
      currentOption = 'Сделать';      
  }
  return (
    <div
      className='option'
      onDragEnter={e => {
        console.log('onDragEnter', option);
      }}
    >
      <h2 className='option__title'>{currentOption}</h2>
      <div className='circle'>
        <Plus className='plus' />
      </div>
      <TableList option={option} />
    </div>
  );
}

export default Option
