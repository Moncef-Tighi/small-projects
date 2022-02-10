import React, {useContext} from 'react';
import AuthContext from '../../state/authContext';

import classes from './Navigation.module.css';

const Navigation = () => {
  const contextValue= useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {contextValue.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {contextValue.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {contextValue.isLoggedIn && (
          <li>
            <button onClick={contextValue.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
