// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import { ChatContext, ChatProvider } from './context/ChatContext';

// Use createRoot to manage the root element
const container = document.getElementById('root');
const root = createRoot(container); // Create a root instance

root.render(
  <React.StrictMode>
    <ChatProvider>
      <App />
    </ChatProvider>
  </React.StrictMode>
);
