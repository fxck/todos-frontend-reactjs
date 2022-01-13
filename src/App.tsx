import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TodoLayout from './components/TodoLayout/TodoLayout';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const App: React.FC = () => (
  <>
    <Header />
    <QueryClientProvider client={queryClient}>
      <TodoLayout />
    </QueryClientProvider>
    <Footer />
  </>
);

export default App;
