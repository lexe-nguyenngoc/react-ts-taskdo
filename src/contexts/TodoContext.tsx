import { ReactNode, createContext, useReducer } from 'react';
import { ITodoItem } from '../components/TodoList/TodoItem/TodoItem';
import { uid } from '../utils';

export interface TodoProviderProps {
  children: ReactNode;
}

enum TodoActionKind {
  CHANGE_STATUS = 'CHANGE_STATUS',
  DELETE_ITEM = 'DELETE_ITEM',
  ADD_ITEM = 'ADD_ITEM'
}

export interface TodoAction {
  type: TodoActionKind;
  payload: ITodoItem;
}

const todoReducer = (state: ITodoItem[], action: TodoAction) => {
  const { type, payload } = action;

  let newState;

  switch (type) {
    case TodoActionKind.CHANGE_STATUS:
      newState = state.map((item) => {
        const newItem = { ...item };
        if (newItem.id === payload.id) {
          newItem.isDone = !newItem.isDone;
        }

        return newItem;
      });
      break;

    case TodoActionKind.DELETE_ITEM:
      newState = state.filter((item) => item.id !== payload.id);
      break;

    case TodoActionKind.ADD_ITEM:
      newState = [payload, ...state];
      break;

    default:
      newState = state;
      break;
  }

  localStorage.setItem('todos', JSON.stringify(newState));
  return newState;
};

const todosString = localStorage.getItem('todos');
const todosDefault: ITodoItem[] = JSON.parse(todosString || '[]');

interface ITodoContext {
  data: ITodoItem[];
  onChangeStatusTodo: (item: ITodoItem) => void;
  onDeleteTodo: (item: ITodoItem) => void;
  onAddTodo: (item: string) => void;
}

const TodoContext = createContext<ITodoContext>({
  data: todosDefault,
  onChangeStatusTodo: (item: ITodoItem) => {},
  onDeleteTodo: (item: ITodoItem) => {},
  onAddTodo: (item: string) => {}
});

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, todosDefault);

  const handleChangeStatus = (item: ITodoItem) => {
    dispatch({
      type: TodoActionKind.CHANGE_STATUS,
      payload: item
    });
  };

  const handleDeleteItem = (item: ITodoItem) => {
    dispatch({
      type: TodoActionKind.DELETE_ITEM,
      payload: item
    });
  };

  const handleAddItem = (label: string) => {
    const newItem: ITodoItem = {
      id: uid(),
      label,
      isDone: false
    };

    dispatch({
      type: TodoActionKind.ADD_ITEM,
      payload: newItem
    });
  };

  return (
    <TodoContext.Provider
      value={{
        data: state,
        onChangeStatusTodo: handleChangeStatus,
        onDeleteTodo: handleDeleteItem,
        onAddTodo: handleAddItem
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
