import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import tema from './pages/style/tema'
import GlobalStyle from './pages/style/global';

import {Routes} from './routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider theme={tema}>
      <GlobalStyle/>
      <Routes/>
    </ThemeProvider>

  </React.StrictMode>,
)
