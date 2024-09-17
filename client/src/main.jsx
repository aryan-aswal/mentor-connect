import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { store } from './redux/store/store.jsx'
import { Toaster } from 'react-hot-toast'

import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Provider store={store}>
        <App />    
        <Toaster/> 
      </Provider>  
  </BrowserRouter>
)
