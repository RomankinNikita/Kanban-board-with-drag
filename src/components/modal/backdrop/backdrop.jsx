import React, { useEffect } from 'react';

import './backdrop.scss';

const Backdrop = ({ close }) => {
  useEffect(() => {
    window.onkeydown = e => {
      if (e.key === 'Escape') {
        close();
      }
    };
    return () => {
      window.onkeydown = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className='backdrop' onClick={close} />;
};

export default Backdrop;
