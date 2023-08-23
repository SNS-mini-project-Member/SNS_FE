import {createBrowserRouter} from 'react-router-dom';
import App from "./App";
import Signup from "./components/pages/Login/Signup";
import Main from "./components/pages/Infomation/Main";
import Update from "./components/pages/Login/Update";
import SendTmpPw from "./components/pages/Login/SendTmpPw";
import FriendsMenu from "./components/pages/Infomation/FriendsMenu";

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
    path : 'update',
    element : <Update />,
  },
  {
    path : 'sendTmpPw',
    element : <SendTmpPw />,
  },
  {
    path : 'friendsMenu',
    element : <FriendsMenu />,
  },
]);

export default router;