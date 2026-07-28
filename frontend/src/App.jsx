import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HRSystem from './Library';

// QueryClient initialize 
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HRSystem/>
    </QueryClientProvider>
  );
}