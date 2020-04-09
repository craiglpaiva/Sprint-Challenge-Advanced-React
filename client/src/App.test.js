import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, cleanup }
import Players from './component/Players';
import useDarkMode from './hooks/useDarkMode';
import { useFetch } from './hooks/useFetch';


it('Renders App without crashing', () => {
  render(<App />);
}
