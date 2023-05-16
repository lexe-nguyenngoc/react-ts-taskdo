import { ReactComponent as CheckboxCheckedIcon } from '../../../assets/icons/checkbox-checked.svg';
import { ReactComponent as CheckboxIcon } from '../../../assets/icons/checkbox.svg';

export interface CheckboxProps {
  checked: boolean;
  id?: string;
  className?: string;
  onChange: () => void;
}

const Checkbox = ({ checked, id, className, onChange }: CheckboxProps) => {
  return (
    <div onClick={onChange} className={className}>
      <input id={id} onChange={onChange} type='checkbox' hidden />
      {checked ? <CheckboxCheckedIcon /> : <CheckboxIcon />}
    </div>
  );
};

export default Checkbox;
