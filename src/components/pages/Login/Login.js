import classes from "../../../styles/pages/login/login.module.css";
import CenterLayout from "../Layout/CenterLayout";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
const Login = () => {
  return (
    <div className={classes.loginWrap}>
      <CenterLayout>
        <div className={classes.loginArea}>
          <div className={classes.loginAreaWrap}>
            <div className={classes.leftArea}>
              <div className={classes.imgWrap}>
                <img className={classes.logoSize} src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
              </div>
              <h2 className={classes.fontStyle}>Facebook에서 전세계에 있는 친구, 가족, 지인들과 함께 이야기를 나눠보세요.</h2>

            </div>
            <div>
              <div className={classes.loginForm}>
                <div className={classes.loginInnerForm}>
                  <Input placeholder='이메일 또는 전화번호' type='text' />
                  <Input placeholder='비밀번호' type='password' />
                  <Button width='364px' backColor='#1877f2' value='로그인' />
                  <div className={classes.findPassArea}>
                    <p className={classes.paramOption}>비밀번호를 잊으셨나요?</p>
                  </div>
                  <div className={classes.signUpArea}>
                    <Button width='160px' backColor='#42b72a' value='새 계정 만들기' />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </CenterLayout>
    </div>
  );
}

export default Login;