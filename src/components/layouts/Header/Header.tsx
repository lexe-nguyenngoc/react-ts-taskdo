import avatar from '../../../assets/icons/user.svg';

import { Button } from '../../common';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.user}>
        <img src={avatar} alt='Avatar' />
        <div className={styles.user__information}>
          <h3 className={styles.user__name}>Hi Shobhit 👋🏽</h3>
          <p className={styles.user__task}>4 tasks pending</p>
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
