import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react/cjs/react.production.min';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/authContext';

function App() {
  const authContext = useContext(AuthContext);
  return (
    <Layout>
      <Routes>
        <Route path='/' element={
          <Restrict to={["user", "E-Commerce", "Commande", "Manager"]}>
            <HomePage />
          </Restrict>
        }/>
        <Route path='/auth' element={
          <AuthPage />
        }/>
        <Route path='/profile' element={
          <Restrict to={["Commande", "Manager"]}>
            <UserProfile />
          </Restrict>
          } />
      </Routes>
    </Layout>
  );
}

export default App;
