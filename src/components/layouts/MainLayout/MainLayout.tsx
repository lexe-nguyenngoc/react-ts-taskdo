import { ReactNode } from 'react';

import Header from '../Header';

import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className={styles.wrapper}>
      <Header />
      {children}
    </main>
  );
};

export default MainLayout;
