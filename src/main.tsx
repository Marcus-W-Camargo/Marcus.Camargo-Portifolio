import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './identity-overrides.css'
import './hero-stats-overrides.css'
import './about-overrides.css'
import './contact-overrides.css'
import './section-kicker-overrides.css'
import './header-overrides.css'
import './github-button-overrides.css'
import './project-preview-overrides.css'
import './liste-real-preview.css'
import './liste-closed-state-overrides.css'
import './preview-harmony-overrides.css'
import './mobile-project-preview-overrides.css'
import './letreiro-keyboard-layout-overrides.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
