import { useReducer } from 'react';

import { uid } from '../../utils';

import TodoInput from './TodoInput/TodoInput';
import TodoItem, { ITodoItem } from './TodoItem/TodoItem';

import styles from './TodoList.module.scss';

const defaultTodoState: ITodoItem[] = [
  {
    id: uid(),
    label: 'Morning walk',
    isDone: true
  },
  {
    id: uid(),
    label: 'Lunch',
    isDone: false
  },
  {
    id: uid(),
    label: 'Dinner with Shobhit',
    isDone: false
  },
  {
    id: uid(),
    label: 'Night Reading',
    isDone: false
  }
];

enum TodoActionKind {
  CHANGE_STATUS = 'CHANGE_STATUS',
  DELETE_ITEM = 'DELETE_ITEM'
}

export interface TodoAction {
  type: TodoActionKind;
  payload: Partial<ITodoItem>;
}

const todoReducer = (state: ITodoItem[], action: TodoAction) => {
  switch (action.type) {
    case TodoActionKind.CHANGE_STATUS:
      return state.map((item) => {
        const newItem = { ...item };
        if (newItem.id === action.payload.id) {
          newItem.isDone = !newItem.isDone;
        }

        return newItem;
      });

    case TodoActionKind.DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, defaultTodoState);

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

  return (
    <section className={styles.wrapper}>
      <TodoInput />

      <ul className={styles.list}>
        {state.map((todo) => (
          <li key={todo.id} className={styles.item}>
            <TodoItem item={todo} onChange={handleChangeStatus} onDelete={handleDeleteItem} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
