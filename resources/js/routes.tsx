import { createBrowserRouter } from 'react-router-dom';
import { AuthenticatedLayout } from './Layouts/AuthenticatedLayout';
import { ErrorPage } from './Pages/ErrorPage';

export const router = createBrowserRouter([
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
        path: 'groups',
        Component: () => {
          document.title = 'Groups';

          return <div>Groups</div>;
        
        },
      },
    ],
    errorElement: <ErrorPage/>,
  },
]);
