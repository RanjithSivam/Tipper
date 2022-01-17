import React from 'react';
import ReactDOM from 'react-dom';
import Background from './component/Background';
import TipPercentContext from './context/TipPercentContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <TipPercentContext>
      <Background />
    </TipPercentContext>
  </React.StrictMode>,
  document.getElementById('root')
);
