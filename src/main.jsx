import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
// import App from './App.jsx'
import Portfolio from './pages/Portfolio'
createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <Portfolio />
  </BrowserRouter>,
)
