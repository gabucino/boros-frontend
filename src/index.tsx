import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from 'styled-components'
import { Provider} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'


import * as theme from './config/theme'
import reducer from "./store/reducers/rootReducer"


const store = configureStore({
  reducer: reducer
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
