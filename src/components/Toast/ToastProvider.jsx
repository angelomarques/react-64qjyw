import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

import ToastContainer from './ToastContainer';

const ToastContext = createContext(null);

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (content, delay = 5000) => {
    const id = uuid();
    const toast = {
      id,
      message: content.replace('%s', id),
      delay
    };
    if (toasts.length === 0) setToasts([toast]);
    else {
      setToasts([...toasts, toast]);
    }
  };

  const removeToast = id => {
    const newToasts = toasts;
    const toastIndex = newToasts.findIndex(t => t.id === id);
    newToasts.splice(toastIndex, 1);
    setToasts(newToasts);
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const toastHelpers = useContext(ToastContext);
  return toastHelpers;
};

export { ToastContext, useToast };
export default ToastProvider;
