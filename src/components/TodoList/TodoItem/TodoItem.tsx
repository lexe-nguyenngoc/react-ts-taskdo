import { ReactComponent as WasteBinIcon } from '../../../assets/icons/waste-bin.svg';

import { Button, Checkbox } from '../../common';

import styles from './TodoItem.module.scss';

export interface TodoItemProps {
  item: { id: string; label: string; isDone: boolean };
}

const TodoItem = ({ item }: TodoItemProps) => {
  return (
    <div className={styles.todo}>
      <Button>
        <WasteBinIcon />
      </Button>
      <Checkbox className={styles.checkbox} id={item.id} checked={item.isDone} onChange={() => {}} />
      <label htmlFor={item.id}>{item.label}</label>
    </div>
  );
};

export default TodoItem;
