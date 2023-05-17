import { useContext } from 'react';

import avatar from '../../../assets/icons/user.svg';

import TodoContext from '../../../contexts/TodoContext';

import { Button } from '../../common';

import styles from './Header.module.scss';

const Header = () => {
  const { data } = useContext(TodoContext);

  const taskPendingCount = data.filter((item) => !item.isDone).length;

  return (
    <header className={styles.header}>
      <div className={styles.user}>
        <img src={avatar} alt='Avatar' />
        <div className={styles.user__information}>
          <h3 className={styles.user__name}>Hi Shobhit 👋🏽</h3>
          <p className={styles.user__task}>
            {taskPendingCount} {taskPendingCount > 1 ? 'tasks' : 'task'} pending
          </p>
        </div>
      </div>

      <h1 className={styles.heading}>TaskDo</h1>

      <div className={styles.action}>
        <Button disabled className={styles.button} color='primary'>
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;
