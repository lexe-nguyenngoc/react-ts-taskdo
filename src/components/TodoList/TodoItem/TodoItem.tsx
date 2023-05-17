import { ReactComponent as WasteBinIcon } from '../../../assets/icons/waste-bin.svg';

import { Button, Checkbox } from '../../common';

import styles from './TodoItem.module.scss';

export interface ITodoItem {
  id: string;
  label: string;
  isDone: boolean;
}

interface TodoItemProps {
  item: ITodoItem;
  onChange: (item: ITodoItem) => void;
  onDelete: (item: ITodoItem) => void;
}

const TodoItem = ({ item, onChange, onDelete }: TodoItemProps) => {
  const handleChange = () => {
    onChange(item);
  };

  const handleDelete = () => {
    onDelete(item);
  };

  return (
    <div className={styles.todo}>
      <Button onClick={handleDelete}>
        <WasteBinIcon />
      </Button>
      <Checkbox className={styles.checkbox} id={item.id} checked={item.isDone} onChange={handleChange} />
      <label htmlFor={item.id}>{item.label}</label>
    </div>
  );
};

export default TodoItem;
