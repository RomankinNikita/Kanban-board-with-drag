import React, { Fragment } from 'react';
import './performer.scss';

const Performer = ({ children }) => {
  return (
    <Fragment>
      <div className='performer' />
      <span>{children}</span>
    </Fragment>
  );
};

export default Performer;
