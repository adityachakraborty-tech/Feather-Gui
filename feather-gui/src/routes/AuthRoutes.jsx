
import { lazy } from 'react';
//import MainLayout from './components/layout/MainLayout/index.js';
import MainLayout from '../component/layout/MainLayout';
//import MainLayout from './MainLayout.js';
const Login=lazy(()=>import('../component/pages/authentications/login.jsx'))
const SignUp = lazy(() => import('../component/pages/authentications/signup.jsx'));
const SetNewPassword = lazy(() => import('../component/pages/authentications/setnewpassword.jsx'));
const ForgotPassword = lazy(() => import('../component/pages/authentications/forgotpassword.jsx'));


//import { useRoutes } from 'react-router-dom';

const AuthRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/login',
        element: <Login />   
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/set-new-password',
        element: <SetNewPassword/>
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />
      },
    ]
  };
  export default AuthRoutes;