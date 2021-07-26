import React, { useEffect, useState } from 'react';

import { useToast } from './ToastProvider';
import './Toast.scss';

function Toast({ id, delay = 5500, message, style }) {
  const [className, setClassname] = useState('toast-container show-toast');
  const { removeToast } = useToast();

  console.log('render toast', id);
  useEffect(() => {
    const timer = setTimeout(() => {
      setClassname('toast-container hide-toast');
      console.log('hide toast', id);
    }, delay);

    if (className === 'toast-container hide-toast') {
      removeToast(id);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast, delay]);

  return (
    <div className={className} style={style}>
      {message}
    </div>
  );
}

export default Toast;
