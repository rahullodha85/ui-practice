import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import MockAPIService from './mirage/server.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

if (import.meta.env.DEV) {
  console.log('Running in dev mode.');
  MockAPIService();
  console.log('Mock API service started.');
}

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
