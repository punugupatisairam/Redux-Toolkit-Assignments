import logo from './logo.svg';
import './App.css';
import RegisterPage from './features/RegisterPage';
import LoginPage from './features/LoginPage';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Outlet></Outlet>
    </div>
  );
}

export default App;
