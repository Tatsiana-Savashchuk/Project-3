import { useEffect, useState } from 'react';
import './Message.css';

export const Message = () => {
  const [showMessage, setShowMessage] = useState(JSON.parse(localStorage.getItem('showMessage')));
  const [message, setMessage] = useState(localStorage.getItem('message'));

  const handleStorageChange = (e) => {
    console.log('e', e)
  };

  // query-string

  useEffect(() => {
    document.addEventListener("storage", handleStorageChange);
    return () => document.addEventListener("storage", handleStorageChange);
  }, [])

  return (
    <div className="message" hidden={!showMessage}>{message}</div>
  );
};
