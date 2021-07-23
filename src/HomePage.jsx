import React from 'react';
import { useToast } from './components/Toast/ToastProvider';

export default function HomePage(props) {
  const { addToast } = useToast();
  const message = `This is the %s toast message`;

  return (
    <div className="App">
      <form>
        Add 
        <input />
      </form>
      <button onClick={() => addToast(message)}>Show toast</button>
    </div>
  );
}
