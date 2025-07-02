import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import jQuery from 'jquery';
import 'letteringjs';   // now jQuery.fn.lettering is defined
import 'animate.css';
import 'textillate';

window.$ = window.jQuery = jQuery;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
