import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TodoLayout from './components/TodoLayout/TodoLayout';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const services = [
  {
    "hostname": "app",
    "port": 80,
    "url": "https://app-20109.app.zerops.io",
    "repository": "https://github.com/fxck/zerops-recipe-base",
    "type": "Nginx",
    "containers": 1,
    "category": "runtime"
  },
  {
    "hostname": "api",
    "port": 3000,
    "url": "https://api-20109-5000.app.zerops.io",
    "repository": "https://github.com/fxck/todos-backend-nestjs",
    "type": "Node.js",
    "containers": 3,
    "category": "runtime"
  },
  {
    "hostname": "db",
    "port": 27017,
    "type": "MongoDB",
    "containers": 1,
    "category": "database"
  }
];

const App: React.FC = () => (
  <>
    <z-project-diagram services={JSON.stringify(services)}></z-project-diagram>

    <Header />
    <QueryClientProvider client={queryClient}>
      <TodoLayout />
    </QueryClientProvider>
    <Footer />
  </>
);

export default App;
