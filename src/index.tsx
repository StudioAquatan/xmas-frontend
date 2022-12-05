import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const container = document.querySelector('main')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
