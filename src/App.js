import logo from './logo.svg';
import './App.css';

//components
import Profile from './components/Profile'
import UserList from './components/UserList'

//context
import UserState from './context/User/UserState'

function App() {
  return (
    <UserState>
      <UserList/>
      <Profile/>
    </UserState>
  );
}

export default App;
