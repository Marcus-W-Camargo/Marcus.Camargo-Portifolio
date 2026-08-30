import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './identity-overrides.css'
import './hero-stats-overrides.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
