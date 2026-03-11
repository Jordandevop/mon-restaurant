import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FilterProvider } from './context/FilterContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilterProvider>
     <App />
    </FilterProvider>
   
  </StrictMode>,
)
