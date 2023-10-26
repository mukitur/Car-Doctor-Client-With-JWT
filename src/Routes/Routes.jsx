import { createBrowserRouter } from 'react-router-dom';
import MainRoot from '../Layout/MainRoot';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Appointment from '../Pages/Appointment/Appointment';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Dashboard from '../Pages/Dashboard/Dashboard';
import CheckOut from '../Pages/CheckOut/CheckOut';
import Bookings from '../Pages/Bookings/Bookings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRoot />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/bookings',
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
      {
        path: '/checkout/:id',
        element: (
          <PrivateRoute>
            {' '}
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
      },
      {
        path: '/appointment',
        element: (
          <PrivateRoute>
            <Appointment />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
