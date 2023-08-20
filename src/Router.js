import {createBrowserRouter} from 'react-router-dom';
import App from "./App";

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
  },
  // {
  //   path : '/member',
  //   element : <HeaderSection />,
  //   children : [
  //     {
  //       path: 'login',
  //       element: <Login />,
  //     },
  //   ]
  // },
]);

export default router;