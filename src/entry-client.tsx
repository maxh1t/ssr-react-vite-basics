import { hydrateRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { App } from './components/App'
import { BrowserRouter } from 'react-router'
import './index.css'

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
