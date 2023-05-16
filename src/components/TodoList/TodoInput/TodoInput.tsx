import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';

import styles from './TodoInput.module.scss';

const TodoInput = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <PlusIcon />
      </div>
      <p className={styles.text}>Add New Task</p>
    </div>
  );
};

export default TodoInput;
