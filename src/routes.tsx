import { Navigate, type RouteObject } from 'react-router-dom'
import { OutletContainer } from './ui/outletContainer/OutletContainer'
import { SignUp } from './ui/signup/SignUp'
import { Login } from './ui/login/Login'
import { LandingPage } from './ui/landingPage/LandingPage'


const uiRoutes = [
  {
    path: '/landingPage',
    element: <LandingPage />,
  },
] satisfies RouteObject[]
export const rootRoutes = [
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
    // action: authenticate,
  },
  {
    path: '/signup',
    element: <SignUp />,
    // action: signUpAuth,
  },

  {
    element: <OutletContainer />,
    // errorElement: <ErrorElement />,
    children: uiRoutes,
  },
  {
    path: '/*',
    element: <Navigate to="/login" />,
  },
] satisfies RouteObject[]
