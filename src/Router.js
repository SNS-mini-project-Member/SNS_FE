import {createBrowserRouter} from 'react-router-dom';
import App from "./App";
import Signup from "./components/pages/Login/Signup";
import Main from "./components/pages/Infomation/Main";
import PwUpdate from "./components/pages/Login/PwUpdate";
import SendTmpPw from "./components/pages/Login/SendTmpPw";

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
  },
  {
    path : 'signup',
    element : <Signup />,
  },
  {
    path : 'main',
    element : <Main />,
  },
  {
    path : 'pwUpdate',
    element : <PwUpdate />,
  },
  {
    path : 'sendTmpPw',
    element : <SendTmpPw />,
  },
]);

export default router;