import { uid } from '../../utils';
import TodoInput from './TodoInput/TodoInput';
import TodoItem from './TodoItem/TodoItem';

import styles from './TodoList.module.scss';

const data = [
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

const TodoList = () => {
  return (
    <section className={styles.wrapper}>
      <TodoInput />

      <ul className={styles.list}>
        {data.map((todo) => (
          <li key={todo.id} className={styles.item}>
            <TodoItem item={todo} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
