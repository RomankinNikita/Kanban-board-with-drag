import React, { useState, useEffect } from 'react';
import './option.scss';
import { ReactComponent as Plus } from '../../../assets/images/plus/black.svg';
import TableList from '../table-list/table-list';
import { connect } from 'react-redux';
import actions from '../../../store/actions/actions';

const Option = ({ option, setEndDragOption, endDragOption }) => {
  const [isDragEnter, toggleDragStatus] = useState(false);

  useEffect(() => {
    if (endDragOption !== option) {
      toggleDragStatus(false);
      console.log(option);
      
    }
  }, [endDragOption, option]);

  let currentOption;
  switch (option) {
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

  const dragEnterStyle = isDragEnter
    ? { backgroundColor: 'rgba(0, 0, 0, 0.05)' }
    : null;

  const dragEnterHandler = (e, option) => {
    e.preventDefault();
    toggleDragStatus(true);
    setEndDragOption(option);
  };

  const dragEndHandler = () => {
    toggleDragStatus(false);
  };

  return (
    <div
      className='option'
      style={dragEnterStyle}
      onDragEnter={e => dragEnterHandler(e, option)}
      onDragEnd={dragEndHandler}
    >
      <h2 className='option__title'>{currentOption}</h2>
      <div className='circle'>
        <Plus className='plus' />
      </div>
      <TableList option={option} />
    </div>
  );
};

const mapStateToProps = ({ endDragOption }) => {
  return {
    endDragOption
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setEndDragOption: option => dispatch(actions.setEndDragOption(option))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Option);
