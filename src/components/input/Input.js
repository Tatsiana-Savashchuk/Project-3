import { useMemo } from 'react';
import './Input.css';

export const Input = ({ type = null, className, onChangeFunction = null, disabled = false }) => {
  const inputClassName = useMemo(() => {
    let finalClassName = 'main-input ' + (className || '');
    if (disabled) {
      finalClassName += ' main-input-loading';
    }
    return finalClassName;
  }, [className, disabled]);

  return (
    <input type={type} className={inputClassName} onChange={onChangeFunction} />
  );
};
