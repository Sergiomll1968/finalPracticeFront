import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Mainrouter from './MainRouter.jsx';

import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Mainrouter />
    </BrowserRouter>
  </React.StrictMode>,
)
