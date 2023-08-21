import Header from "../Layout/Header";
import MainLayout from "../Layout/MainLayout";
import AsideMenu from "../Layout/AsideMenu";
import StoryBoard from "../Layout/StoryBoard";
import ChatList from "../Layout/ChatList";

const Main = () => {
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