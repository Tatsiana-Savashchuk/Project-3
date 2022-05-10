import { useMemo } from 'react';
import './Input.css';

export const Input = ({ type = null, className, onChangeFunction = null }) => {
  const inputClassName = useMemo(() => {
    return 'main-input ' + (className || '');
  }, [className]);

  return (
    <input type={type} className={inputClassName} onChange={onChangeFunction} />
  );
};
