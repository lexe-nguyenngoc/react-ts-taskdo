import { useContext } from 'react';

import TodoContext from '../../contexts/TodoContext';

import TodoInput from './TodoInput/TodoInput';
import TodoItem from './TodoItem/TodoItem';

import styles from './TodoList.module.scss';

const TodoList = () => {
  const { data, onAddTodo, onChangeStatusTodo, onDeleteTodo } = useContext(TodoContext);

  return (
    <section className={styles.wrapper}>
      <TodoInput onSubmit={onAddTodo} />

      <ul className={styles.list}>
        {data.length === 0 && <p className={styles['not-found']}>Couldn't find anything!</p>}
        {data.map((todo) => (
          <li key={todo.id} className={styles.item}>
            <TodoItem item={todo} onChange={onChangeStatusTodo} onDelete={onDeleteTodo} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
