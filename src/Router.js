import {createBrowserRouter} from 'react-router-dom';
import App from "./App";
import Signup from "./components/pages/Login/Signup";
import Main from "./components/pages/Infomation/Main";
import MyInfo from "./components/pages/Login/MyInfo";
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
    path : 'myinfo',
    element : <MyInfo />,
  },
  {
    path : 'sendTmpPw',
    element : <SendTmpPw />,
  },
]);

export default router;