import React from 'react';
import './kanban-table.scss';
import {ReactComponent as Plus} from '../../assets/images/plus/black.svg';

const KanbanTable = () => {
  return (
    <div className='options'>
      <div className='option'>
        <h2 className='option__title'>Сделать</h2>
        <div className='circle'>
          <Plus className='plus' />
        </div>

        <ul className='table__list'>
          <li className='table__item'>
            <div className='badge badge-red'>Срочно</div>
            <div className='table__title'>Прочитать книгу</div>
            <div className='period'>
              <span>старт: 12.06</span>
              <span>финиш: 12.08</span>
            </div>
            <div className='performer'>
              <span>Исполнитель:</span>
              <div className='performer__icon' />
              <span>Иванов И.В.</span>
            </div>
          </li>
          <li className='table__item'>
            <div className='badge badge-red'>Срочно</div>
            <div className='table__title'>Прочитать книгу</div>
            <div className='period'>
              <span>старт: 12.06</span>
              <span>финиш: 12.08</span>
            </div>
            <div className='performer'>
              <span>Исполнитель:</span>
              <div className='performer__icon' />
              <span>Иванов И.В.</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default KanbanTable;
