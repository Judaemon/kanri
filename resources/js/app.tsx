import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
// import { router } from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter } from 'react-router-dom';
import { AuthenticatedLayout } from './Layouts/AuthenticatedLayout';
import { ErrorPage } from './Pages/ErrorPage';
import { teamLoader, Teams } from './Pages/Teams';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
})

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    Component: AuthenticatedLayout,
    children: [
      {
        index: true,
        Component: () => {
          document.title = 'Dashboard';

          return <div>Dashboard</div>;
        
        },
      },
      {
        path: 'users',
        Component: () => {
          document.title = 'Users';

          return <div>Users</div>;
        },
      },
      {
        path: 'teams',
        loader: teamLoader(queryClient),
        Component: Teams,
      },
    ],
    errorElement: <ErrorPage/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    </QueryClientProvider>
  </StrictMode>
);
