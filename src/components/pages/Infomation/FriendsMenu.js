import Header from "../Layout/Header";
import MainLayout from "../Layout/MainLayout";
import AsideMenu2 from "../Layout/AsideMenu2";
import FriendsBoard from "../Layout/FriendsBoard";

const FriendsMenu = () => {
  const isMainPage = window.location.pathname;
  console.log(isMainPage)
  return (
    <>
        <Header />
        <MainLayout>
          <AsideMenu2 />
          <FriendsBoard />
        </MainLayout>
    </>
  )
}

export default FriendsMenu;