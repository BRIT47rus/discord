import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App/components/App/App';
import './App/styles/index.css';
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
