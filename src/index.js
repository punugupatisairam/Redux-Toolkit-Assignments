import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './features/LoginPage';
import RegisterPage from './features/RegisterPage';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Userdashboard from './features/userdashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path:'/',
        element:  <LoginPage></LoginPage>
      },
      {
        path:'/register',
        element:<RegisterPage/>
      },
      {
        path:'/userdashboard',
        element:<Userdashboard></Userdashboard>
      }
    ]
   
  } 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <RouterProvider router={router} />
    </Provider>
    
  </React.StrictMode>
);

reportWebVitals();
