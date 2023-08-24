import {createBrowserRouter} from 'react-router-dom';
import App from "./App";
import Signup from "./components/pages/Login/Signup";
import Main from "./components/pages/Infomation/Main";
import FriendTable from "./components/pages/Infomation/FriendTable";

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
    path : 'friend',
    element : <FriendTable/>,
  },
]);

export default router;