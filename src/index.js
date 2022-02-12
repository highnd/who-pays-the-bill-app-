import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FileC} from "./context/FileC"


ReactDOM.render(
  <React.StrictMode>

    <FileC>

    <App />

    </FileC>
   
  </React.StrictMode>,
  document.getElementById('root')
);


