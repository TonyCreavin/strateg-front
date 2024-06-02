import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

import Auth from './pages/Authentication';
import { action as authAction } from './pages/Auth_action';
//import Signup from './pages/Signup';

import { action as logoutAction } from './pages/Logout';
//import Signin from './pages/Signin';
const router = createBrowserRouter([
  { path: '/', element: <Home /> },

  { path: '/auth', element: <Auth />, action: authAction },
  //{ path: '/signup', element: <Signup /> },
  { path: '/logout', action: logoutAction },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
