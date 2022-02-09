/*
App.jsx es el principal porque en el main.jsx es el que se está importando
y se está cargando dentro del html, dentro de la etiqueta que tiene el id de 'root'
*/
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
