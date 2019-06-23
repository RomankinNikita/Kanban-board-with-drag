import React from 'react';
import './header.scss';
import { ReactComponent as TableView } from '../../assets/images/S-placeholder.svg';
import { ReactComponent as ListView } from '../../assets/images/list.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='header__title'>Канбан-доска</h1>
      <NavLink
        activeClassName='is-active'
        to='/table'
        style={{marginRight: '36px'}}
      >
        <TableView className='show-table' />
      </NavLink>
      <NavLink activeClassName='is-active' to='/list'>
        <ListView className='show-list' />
      </NavLink>
    </div>
  );
};

export default Header;
