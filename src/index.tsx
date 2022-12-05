import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { AppProvider } from './providers/App';

const container = document.querySelector('main')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
