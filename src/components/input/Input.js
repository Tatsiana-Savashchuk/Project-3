import { useMemo } from 'react';
import './Input.css';

export const Input = ({ type = null, className, onChangeFunction = null }) => {
  const inputClassName = useMemo(() => {
    let finalClassName = 'main-input ' + (className || '');
    return finalClassName;
  }, [className]);

  return (
    <input type={type} className={inputClassName} onChange={onChangeFunction} />
  );
};
