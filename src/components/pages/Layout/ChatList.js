import classes from "../../../styles/pages/layout/chatList.module.css";
const ChatList = () => {
  return (
    <div style={{position : 'fixed', right : '0'}} className={classes.chatListWrap}>
      <h2 className={classes.title}>대화 목록</h2>
      <ul>
        <li className={classes.itemWrap}>
          <div className={classes.imgWrap}>
            <img loading="lazy" className={classes.img} src='https://firebasestorage.googleapis.com/v0/b/my-cdn-d39b2.appspot.com/o/mypage.png?alt=media&token=a5426fe2-282d-407f-a13d-6320fcf18b00' />
          </div>
          <p>이동명</p>
        </li>
        <li className={classes.itemWrap}>
          <div className={classes.imgWrap}>
            <img loading="lazy" className={classes.img} src='https://firebasestorage.googleapis.com/v0/b/my-cdn-d39b2.appspot.com/o/mypage.png?alt=media&token=a5426fe2-282d-407f-a13d-6320fcf18b00' />
          </div>
          <p>이동명</p>
        </li>
        <li className={classes.itemWrap}>
          <div className={classes.imgWrap}>
            <img loading="lazy" className={classes.img} src='https://firebasestorage.googleapis.com/v0/b/my-cdn-d39b2.appspot.com/o/mypage.png?alt=media&token=a5426fe2-282d-407f-a13d-6320fcf18b00' />
          </div>
          <p>이동명</p>
        </li>
        <li className={classes.itemWrap}>
          <div className={classes.imgWrap}>
            <img loading="lazy" className={classes.img} src='https://firebasestorage.googleapis.com/v0/b/my-cdn-d39b2.appspot.com/o/mypage.png?alt=media&token=a5426fe2-282d-407f-a13d-6320fcf18b00' />
          </div>
          <p>이동명</p>
        </li>
      </ul>
    </div>
  )
}

export default ChatList;