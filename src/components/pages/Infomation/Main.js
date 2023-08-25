import Header from "../Layout/Header";
import MainLayout from "../Layout/MainLayout";
import AsideMenu from "../Layout/AsideMenu";
import StoryBoard from "../Layout/StoryBoard";
import ChatList from "../Layout/ChatList";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {loginCheckAction} from "../../../ducks/loginCheck";
import {apiClientTokenSetting} from "../../../common/AuthContext";

const Main = () => {
    const isLogin = useSelector(state => state.loginCheck.loginInfo);
    const dispatch = useDispatch();


    useEffect(() => {
      axios.post('http://localhost:8080/api/v1/users/validToken', {
      token : isLogin.token,
      refreshToken : isLogin.refreshToken
    }).then((res) => {

      if (res.data == "refreshExpired") {
        const loginInfo = {
          isLogin : false,
          email : null,
          name : null,
          age : null,
          phone : null,
          followers_count : 0,
          followings_count : 0,
          created_at : null
        }

        dispatch(loginCheckAction.loginInfoSet(loginInfo));
        nav('/');
        return ;
      }

      if (res.data != "") {
        dispatch(loginCheckAction.newToken(res.data));
        apiClientTokenSetting(res.data);
      }
    }).catch((err) => {

    })

    }, [])

    const nav= useNavigate();

    const isMainPage = window.location.pathname;
    const onClickBtn = () =>{
        nav('/update')
    }

  return (
    <>
      <Header />
      <MainLayout>
        <AsideMenu />
        <StoryBoard />
        <ChatList />
      </MainLayout>
    </>
  );
}

export default Main;