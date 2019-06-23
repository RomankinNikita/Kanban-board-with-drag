import React, { Fragment } from 'react';
import Backdrop from './backdrop/backdrop';
import {ReactComponent as Close} from '../../assets/images/Close/grey.svg';

import './modal.scss';

const Modal = ({show, close, children}) => {
  return (
    <Fragment>
      {show ? <Backdrop close={close} /> : null}
      <div
        className='modal'
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}
      >
        {children}
        <Close className='close-icon' onClick={close}/>
      </div>
    </Fragment>
  );
};

export default Modal;
