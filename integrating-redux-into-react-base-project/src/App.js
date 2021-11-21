import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { authActions } from './store/index'
import store from './store/index';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);


  return (
    <>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
