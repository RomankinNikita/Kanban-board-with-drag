import React from 'react';
import './badge.scss';

const Badge = ({ option }) => {
  let currentStatus;
  let statusStyle = 'badge';
  switch (option) {
    case 'toDo':
      currentStatus = 'Срочно';
      statusStyle += ' badge-red';
      break;
    case 'doing':
      currentStatus = 'В работе';
      statusStyle += ' badge-blue';
      break;
    case 'done':
      currentStatus = 'Готово';
      statusStyle += ' badge-green';
      break;
    default:
      currentStatus = 'Срочно';
      statusStyle = 'badge';
  }

  return <div className={statusStyle}>{currentStatus}</div>;
};

export default Badge;
