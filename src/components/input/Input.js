import { useMemo } from 'react';
import './Input.css';

export const Input = ({ type = null, className, onChangeFunction = null, disabled = false }) => {
  const inputClassName = useMemo(() => {
    return 'main-input ' + (className || '') + (disabled ? ' main-input-loading' : '');
  }, [className, disabled]);

  return (
    <input type={type} className={inputClassName} onChange={onChangeFunction} />
  );
};
