import css from './SharedLayout.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const SharedLayout = () => {
  const location = useLocation();
  console.log(location);
const isDetails  = location.pathname.includes('details');
  return (
    <>
      <header>
        {!isDetails && (
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? css.activeLink : css.baseLink
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="events"
                  className={({ isActive }) =>
                    isActive ? css.activeLink : css.baseLink
                  }
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="search"
                  className={({ isActive }) =>
                    isActive ? css.activeLink : css.baseLink
                  }
                >
                  Search
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
