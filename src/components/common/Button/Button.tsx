import { HTMLProps, ReactNode, forwardRef } from 'react';

import { classnames } from '../../../utils';

import styles from './Button.module.scss';

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, color, type, ...rest }, ref) => {
    return (
      <button
        className={classnames(className, styles[variant || ''], styles[color || ''], styles.button)}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default Button;
