import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Experience from './Experience.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Experience />
  </StrictMode>,
)
