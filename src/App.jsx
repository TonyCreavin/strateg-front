import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { tokenLoader } from './../util/auth';
import Home from './pages/Home';
import Auth from './pages/Authentication';
import { action as authAction } from './pages/Auth_action';

import { action as logoutAction } from './pages/Logout';

const router = createBrowserRouter([
  { path: '/', element: <Home />, loader: tokenLoader, id: 'root' },

  { path: '/auth', element: <Auth />, action: authAction },

  { path: '/logout', action: logoutAction },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
