import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Providercontext from './provider/Providercontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Providercontext>
      <App />
    </Providercontext>
  </StrictMode>,
)
