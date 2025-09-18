import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store } from '../src/store.jsx'
// import { Store } from "./store"
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
    <App />
    </Provider>

    {/* <Store></Store> */}
  </StrictMode>,
)
