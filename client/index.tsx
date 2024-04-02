import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/app';

const domNode: any = document.getElementById('root');

const root = createRoot(domNode);

root.render(<App />);
