import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeContextProvider from './context/ThemeContext'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSun, faFile } from '@fortawesome/free-solid-svg-icons'
import App from './App'
import './main.scss'

library.add(faMoon, faSun, faFile)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
)
