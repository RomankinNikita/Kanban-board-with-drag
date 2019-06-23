const setStartDragOption = option => ({ type: 'SET_START_DRAG_OPTION', option });
const setEndDragOption = option => ({ type: 'SET_END_DRAG_OPTION', option });
const endDropAction = (id) => ({type: 'END_DROP_ACTION', id});

export default {
  setStartDragOption,
  setEndDragOption,
  endDropAction
}
