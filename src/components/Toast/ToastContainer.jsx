import React from 'react';
import { createPortal } from 'react-dom/cjs/react-dom.development';

import Toast from './Toast';
import styles from './ToastContainer.module.scss';

function ToastContainer({ toasts }) {
  return createPortal(
    <div className={styles.toastsContainer}>
      {toasts.map((toast, index) => (
        <Toast key={index} {...toast} style={styles} />
      ))}
    </div>,
    document.body
  );
}

export default ToastContainer;
