import classes from "../../../styles/pages/login/login.module.css";
import CenterLayout from "../Layout/CenterLayout";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import WelComeLogo from "../../blocks/WelComeLogo";
import {useNavigate} from "react-router-dom";
import {userLogin} from "../../../common/api/ApiPostService";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {loginCheckAction} from "../../../ducks/loginCheck";

const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const loginHandler = () => {


    userLogin(email, password)
    .then((res) => {
      alert("로그인 성공")
      dispatch(loginCheckAction.loginInfoSet(res.data));
      nav('/main');
    }).catch((err) => {
      console.log(err)
      alert("로그인 실패")
    })


  }

  const signUpHandler = () => {
    nav('/signup');
  }
  const sendPw = () => {
    nav('/sendTmpPw')
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
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
                  <Input onChange={emailHandler} focus={true} placeholder='이메일 또는 전화번호' type='text' />
                  <Input onChange={passwordHandler} placeholder='비밀번호' type='password' />
                  <Button onClick={loginHandler} width='364px' backColor='#1877f2' value='로그인' />
                  <div className={classes.findPassArea}>
                    <p className={classes.paramOption} onClick={sendPw}>비밀번호를 잊으셨나요?</p>
                  </div>
                  <div>
                    <Button onClick={signUpHandler} width='250px' backColor='#42b72a' value='새 계정 만들기' />
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