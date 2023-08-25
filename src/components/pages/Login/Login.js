import classes from "../../../styles/pages/login/login.module.css";
import CenterLayout from "../Layout/CenterLayout";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import WelComeLogo from "../../blocks/WelComeLogo";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginCheckAction} from "../../../ducks/loginCheck";
import {loginToken} from "../../../common/AuthContext";


const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.loginCheck.loginInfo);
  useEffect(() => {

    if (isLogin.isLogin) {
      nav('/main');
    }
  }, [])

  const loginHandler = (e) => {
    e.preventDefault();

    loginToken(email, password)
    .then((res) => {
      if (res.isLogin) {
        alert("로그인 성공");
        dispatch(loginCheckAction.loginInfoSet(res));
        nav('/main');
      } else {
        alert("로그인 실패")
      }
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
              <form onSubmit={loginHandler} className={classes.loginForm}>
                <div className={classes.loginInnerForm}>
                  <Input onChange={emailHandler} focus={true} placeholder='이메일 또는 전화번호' type='text' />
                  <Input onChange={passwordHandler} placeholder='비밀번호' type='password' />
                  <Button width='364px' backColor='#1877f2' value='로그인' />
                  <div className={classes.findPassArea}>
                    <p className={classes.paramOption} onClick={sendPw}>비밀번호를 잊으셨나요?</p>
                  </div>
                  <div>
                    <Button onClick={signUpHandler} width='250px' backColor='#42b72a' value='새 계정 만들기' />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </CenterLayout>
    </div>
  );
}

// JWT 토큰 디코딩 함수 (참고용)
function decodeToken(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

export default Login;