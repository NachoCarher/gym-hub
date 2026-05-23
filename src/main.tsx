import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import { QueryProvider } from './app/providers/query-provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScopedCssBaseline>
      <QueryProvider>
        <App />
      </QueryProvider>
    </ScopedCssBaseline>
  </StrictMode>,
)
