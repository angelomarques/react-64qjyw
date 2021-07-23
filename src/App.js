import React from 'react';
import './style.css';

import ToastProvider from './components/Toast/ToastProvider';

import HomePage from './HomePage';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <ToastProvider>
        <HomePage />
      </ToastProvider>
    </div>
  );
}
