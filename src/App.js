import { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <MainHeader />
      <main>
        {!authCtx.isLoggedIn && <Login onLogin={authCtx.loginHandler} />}
        {authCtx.isLoggedIn && <Home onLogout={authCtx.logoutHandler} />}
      </main>

    </>
  );
}

export default App;
