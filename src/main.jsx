import React from 'react'
import ReactDOM from 'react-dom/client'
import MainApp from './main/MainApp'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp/>
    </React.StrictMode>
  </BrowserRouter>
  
  
)
