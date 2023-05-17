import { ReactComponent as CheckboxCheckedIcon } from '../../../assets/icons/checkbox-checked.svg';
import { ReactComponent as CheckboxIcon } from '../../../assets/icons/checkbox.svg';
import { classnames } from '../../../utils';

import styles from './Checkbox.module.scss';

export interface CheckboxProps {
  checked: boolean;
  id?: string;
  className?: string;
  onChange: () => void;
}

const Checkbox = ({ checked, id, className, onChange }: CheckboxProps) => {
  return (
    <div className={classnames(className, styles.checkbox)} onClick={onChange}>
      <input id={id} type='checkbox' hidden />
      {checked ? <CheckboxCheckedIcon /> : <CheckboxIcon />}
    </div>
  );
};

export default Checkbox;
