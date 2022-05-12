import { useMemo } from 'react';
import './Input.css';

export const Input = ({ type = null, className, onChangeFunction = null, isLoading = false }) => {
  const inputClassName = useMemo(() => {
    return 'main-input ' + (className || '') + (isLoading ? ' main-input-loading' : '');
  }, [className, isLoading]);

  return (
    <input type={type} className={inputClassName} onChange={onChangeFunction} />
  );
};
