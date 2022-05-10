import { useMemo } from 'react';
import './Button.css';

export const Button = ({ className, onClickFuction = null, text = null, uppercase = false }) => {
  const buttonClassName = useMemo(() => {
    let finalClassName = 'main-button ' + (className || '');
    if (uppercase) {
      return finalClassName + ' uppercase';
    }
    return finalClassName;
  }, [className, uppercase]);
  
  return (
    <button className={buttonClassName} onClick={onClickFuction}>{text}</button>
  );
};
