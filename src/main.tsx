import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScopedCssBaseline>
      <App />
    </ScopedCssBaseline>
  </StrictMode>,
)
