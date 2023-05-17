import { useRef, FormEvent } from 'react';

import { Button } from '../../common';

import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';

import styles from './TodoInput.module.scss';

export interface TodoInputProps {
  onSubmit: (data: string) => void;
}

const TodoInput = ({ onSubmit }: TodoInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current) return;
    const data = inputRef.current.value.trim();

    if (!data) return;

    onSubmit(data);
    inputRef.current.value = '';
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <Button className={styles.button} type='submit'>
        <PlusIcon />
      </Button>
      <input ref={inputRef} type='text' className={styles.text} placeholder='Add New Task' />
    </form>
  );
};

export default TodoInput;
