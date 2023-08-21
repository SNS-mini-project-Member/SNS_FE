import classes from "../../../styles/pages/login/login.module.css";
import CenterLayout from "../Layout/CenterLayout";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import WelComeLogo from "../../blocks/WelComeLogo";
import {useNavigate} from "react-router-dom";
const Login = () => {
  const nav = useNavigate();

  const loginHandler = () => {

    nav('/main');
  }

  const signUpHandler = () => {
    nav('/signup');
  }


  return (
    <div className={classes.loginWrap}>
      <CenterLayout>
        <div className={classes.loginArea}>
          <div className={classes.loginAreaWrap}>
            <WelComeLogo type="login" />
            <div>
              <div className={classes.loginForm}>
                <div className={classes.loginInnerForm}>
                  <Input focus={true} placeholder='이메일 또는 전화번호' type='text' />
                  <Input placeholder='비밀번호' type='password' />
                  <Button onClick={loginHandler} width='364px' backColor='#1877f2' value='로그인' />
                  <div className={classes.findPassArea}>
                    <p className={classes.paramOption}>비밀번호를 잊으셨나요?</p>
                  </div>
                  <div>
                    <Button onClick={signUpHandler} width='160px' backColor='#42b72a' value='새 계정 만들기' />
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