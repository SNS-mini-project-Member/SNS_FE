import {createBrowserRouter} from 'react-router-dom';
import App from "./App";
import Signup from "./components/pages/Login/Signup";
import Main from "./components/pages/Infomation/Main";
<<<<<<< HEAD
import FriendTable from "./components/pages/Infomation/FriendTable";
=======
import MyInfo from "./components/pages/Login/MyInfo";
import SendTmpPw from "./components/pages/Login/SendTmpPw";
import FriendsMenu from "./components/pages/Infomation/FriendsMenu";
import FriendsRequest from "./components/pages/Layout/FriendsRequest";
import AllFriends from "./components/pages/Layout/AllFriends";
>>>>>>> 60273a12da72890af5d7f1dfed326f718b62888a

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
<<<<<<< HEAD
    path : 'friend',
    element : <FriendTable/>,
=======
    path : 'myinfo',
    element : <MyInfo />,
  },
  {
    path : 'sendTmpPw',
    element : <SendTmpPw />,
  },
  {
    path : 'friendsMenu',
    element : <FriendsMenu />,
  },
  {
    path : 'friendsRequest',
    element : <FriendsRequest />,
  },
  {
    path : 'allFriends',
    element : <AllFriends />,
>>>>>>> 60273a12da72890af5d7f1dfed326f718b62888a
  },
]);

export default router;