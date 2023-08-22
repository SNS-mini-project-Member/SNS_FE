import classes from "../../styles/pages/login/login.module.css";
const WelComeLogo = (props) => {
  return (
    <div className={classes.leftArea}>
      <div className={props.type == 'login' ? classes.imgWrap : classes.imgWrapSign}>
        <img loading="lazy" className={classes.logoSize} src="https://firebasestorage.googleapis.com/v0/b/my-cdn-d39b2.appspot.com/o/logo.svg?alt=media&token=a15af25c-9a03-43a0-8bd1-e257635f7d58" />
      </div>
      <h2 className={classes.fontStyle}>Facebook에서 전세계에 있는 친구, 가족, 지인들과 함께 이야기를 나눠보세요.</h2>
    </div>
  )
}

export default WelComeLogo;