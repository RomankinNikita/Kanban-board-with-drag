import React, { Fragment, useState } from 'react';
import './kanban-list.scss';
import KanbanListItem from './kanban-list-item/kanban-list-item';
import Modal from '../modal/modal';
import ModalTask from './modal-task/modalTask';
import { connect } from 'react-redux';

const KanbanList = ({ options }) => {
  const [isModalOpen, toggleModal] = useState(false);
  const [currentId, setId] = useState(null);  

  const openModalHandler = (id) => {
    toggleModal(true);
    setId(id);
  };

  const closeModalHandler = () => {
    toggleModal(false);
  };

  const list = Object.entries(options).flatMap(([option, tasks]) =>
    tasks.map(task => (
      <KanbanListItem
        key={task.id}
        task={task}
        option={option}
        onClick={openModalHandler}
      />
    ))
  );

  const currentTask = Object.entries(options)
    .flatMap(([option, tasks]) => tasks.map(task => {
      task.option = option;
      return task;
    }))
    .filter(task => task.id === currentId)[0];

  return (
    <Fragment>
      <div className='kanban-list__container'>
        <div className='kanban-list__header'>
          <div className='td' />
          <div className='td'>Статус</div>
          <div className='td'>Старт</div>
          <div className='td'>Финиш</div>
          <div className='td'>Исполнитель</div>
        </div>
        <ul className='kanban-list'>{list}</ul>
      </div>
      <Modal show={isModalOpen} close={closeModalHandler}>
        {currentId ? <ModalTask task={currentTask} /> : null}
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = ({ options }) => {
  return { options };
};

export default connect(mapStateToProps)(KanbanList);
