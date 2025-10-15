// Module: main.jsx  
// Author: Tanisha Priya  
// Date: 2025-10-15  
// Description:  
//     Entry point for the React application.  
//     Renders the App component into the root HTML element and imports global styles,  
//     including Tailwind CSS, ensuring proper styling across the application. 
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
