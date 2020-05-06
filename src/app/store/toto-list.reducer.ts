import * as TodoActions from './toto-list.action';

const initialState = {
  todos: [
    {
      id: 1,
      title: 'Todo1 Title',
      desc: 'Todo1 Description',
    },
    {
      id: 2,
      title: 'Todo2 Title',
      desc: 'Todo2 Description',
    },
  ],
};

export function todoListReducer(state = initialState, action: TodoActions.TodoActions) {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
      break;
    case TodoActions.EDIT_TODO:
      const i = state.todos.findIndex(t => t.id === action.payload.id);
      const oldList = [...state.todos];
      oldList[i] = action.payload;
      return {
        ...state,
        todos: oldList,
      };
      break;
    case TodoActions.REMOVE_TODO:
      const index = state.todos.findIndex(t => t.id === action.payload.id);
      const oldTodoList = [...state.todos];
      oldTodoList.splice(index, 1);
      return {
        ...state,
        todos: oldTodoList,
      };
      break;
    default:
      return state;
  }
}
