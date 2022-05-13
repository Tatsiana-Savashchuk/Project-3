import { useMemo } from 'react';
import { Loader } from '../loader/Loader';
import './Button.css';

export const Button = ({ className, onClickFuction = null, text = null, uppercase = false, isLoading = false }) => {
  const buttonClassName = useMemo(() => {
    let finalClassName = 'main-button' + ((' ' + className) || '');
    if (uppercase) {
      finalClassName += ' uppercase';
    }
    if (isLoading) {
      finalClassName += ' main-button-loading';
    }
    return finalClassName;
  }, [className, uppercase, isLoading]);
  
  return (
    <button className={buttonClassName} onClick={onClickFuction}>{text}{isLoading && <Loader />}</button>
  );
};
