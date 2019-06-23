const initialState = {
  options: {
    toDo: [
      {
        id: 100,
        taskText: 'Прочитать книгу',
        dateStart: new Date('06-12-2019'),
        dateEnd: new Date('08-12-2019'),
        taskPerformer: 'Иванов И.В.'
      },
      {
        id: 101,
        taskText: 'Позвонить клиенту',
        dateStart: new Date('04-12-2019'),
        dateEnd: new Date('09-12-2019'),
        taskPerformer: 'Петров О.Е.'
      }
    ],
    doing: [
      {
        id: 102,
        taskText: 'Пройти тестирование',
        dateStart: new Date('05-12-2019'),
        dateEnd: new Date('10-12-2019'),
        taskPerformer: 'Семенова А.И.'
      },
      {
        id: 103,
        taskText: 'Написать статью',
        dateStart: new Date('07-12-2019'),
        dateEnd: new Date('12-12-2019'),
        taskPerformer: 'Сидорова Д.О.'
      }
    ],
    done: [
      {
        id: 104,
        taskText: 'Изучить материалы',
        dateStart: new Date('06-12-2019'),
        dateEnd: new Date('09-12-2019'),
        taskPerformer: 'Николаев А.В.'
      },
      {
        id: 105,
        taskText: 'Сделать фото',
        dateStart: new Date('07-12-2019'),
        dateEnd: new Date('10-12-2019'),
        taskPerformer: 'Литвиненко У.Р.'
      }
    ]
  },
  startDragOption: null,
  endDragOption: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_START_DRAG_OPTION':
      return {
        ...state,
        startDragOption: action.option
      };
    case 'SET_END_DRAG_OPTION':
      return {
        ...state,
        endDragOption: action.option
      };
    default:
      return state;
  }
};

export default reducer;
