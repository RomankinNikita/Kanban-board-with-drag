import React from 'react';
import './header.scss';
import { ReactComponent as TableView } from '../../assets/images/S-placeholder.svg';
import { ReactComponent as ListView } from '../../assets/images/list.svg';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='header__title'>Канбан-доска</h1>
      <TableView className='show-table' />
      <ListView className='show-list' />
    </div>
  );
};

export default Header;
