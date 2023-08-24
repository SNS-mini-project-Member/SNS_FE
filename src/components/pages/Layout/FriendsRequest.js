import classes from "../../../styles/pages/layout/friendsBoard.module.css";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
const FriendsRequest = () => {
  const nav = useNavigate();

  return (
    <div>
      <div className={classes.friendsWrap}>FriendsRequest</div>
    </div>
  )
}

export default FriendsRequest;