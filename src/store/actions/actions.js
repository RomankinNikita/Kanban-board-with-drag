const setStartDragOption = option => ({ type: 'SET_START_DRAG_OPTION', option });
const setEndDragOption = option => ({ type: 'SET_END_DRAG_OPTION', option });
const endDropAction = () => ({type: 'END_DROP_ACTION'});

export default {
  setStartDragOption,
  setEndDragOption,
  endDropAction
}
