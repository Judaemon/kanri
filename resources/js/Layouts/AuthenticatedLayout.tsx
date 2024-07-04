import { Link, Outlet } from 'react-router-dom';

export const AuthenticatedLayout = () => {
  return (
    <div id='app-container'>
      <ul className='navigation flex space-x-2 bg-black text-white'>
        <li>
          <Link to="/">Dashboard | </Link>
        </li>
        <li>
          <Link to="/users">Users | </Link>
        </li>
        <li>
          <Link to="/groups">Groups</Link>
        </li>
      </ul>

      <main id="app-content" className=''>
        <Outlet />
      </main>
    </div>
  );
};