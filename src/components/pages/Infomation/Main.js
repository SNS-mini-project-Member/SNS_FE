import Header from "../Layout/Header";
import MainLayout from "../Layout/MainLayout";
import AsideMenu from "../Layout/AsideMenu";
import StoryBoard from "../Layout/StoryBoard";
import ChatList from "../Layout/ChatList";
import {useNavigate} from "react-router-dom";

const Main = () => {
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
        {/*<ChatList />*/}
      </MainLayout>
    </>
  );
}

export default Main;