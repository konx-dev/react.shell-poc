import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Attaching the Shell's React instance to the window object
(window as any).shellReact = React;

console.log('Shell: React instance anchored to window.');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
