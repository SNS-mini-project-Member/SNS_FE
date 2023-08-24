import CenterLayout from "../Layout/CenterLayout";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import classes from "../../../styles/pages/login/login.module.css";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import SendTmpPw from "./SendTmpPw";
import WelComeLogo from "../../blocks/WelComeLogo";
import {useState} from "react";
import {updatePw} from "../../../common/api/ApiPostService";

const MyInfo = () => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const isLogin = useSelector(state => state.loginCheck.loginInfo);
  const nav = useNavigate();
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const onChangePw = (e) => {
    setPw(e.target.value)
  }
  const onChangePwCheck = (e) => {
    setPwCheck(e.target.value)
  }
  const logOut = () => {
    localStorage.clear();
    nav('/')
  }
  const onClickCheck = () => {
    if (passwordRegex.test(pw)) {
      if (pw === pwCheck) {
        updatePw(isLogin.email, pw)
        alert("비밀번호가 변경되었습니다.")
        nav('/main')
      } else {
        alert("입력한 비밀번호가 일치하지 않습니다.")
      }
    }else{
      alert("올바른 비밀번호 형식이 아닙니다.")
    }
  }


  return (
      <div className={classes.signupWrap}>
        <CenterLayout>
          <div style={{paddingTop : '0'}} className={classes.signUpArea}>
            <div className={classes.loginAreaWrap}>
              <WelComeLogo type="signup" />
              <div>
                <div className={classes.signupForm}>
                  <div style={{margin : '0'}} className={classes.loginInnerForm}>
                    <p style={{fontWeight:"bold", fontSize:'20px', textAlign:"center"}}>이메일🔽</p>
                    <Input name="email" value={isLogin.email} />
                    <p style={{fontWeight:"bold", fontSize:'20px', textAlign:"center"}}>이름🔽</p>
                    <Input name="name" value={isLogin.name} />
                    <p style={{fontWeight:"bold", fontSize:'20px', textAlign:"center"}}>띠🔽</p>
                    <Input name="name" value={isLogin.age} />
                    <p style={{fontWeight:"bold", fontSize:'20px', textAlign:"center"}}>전화번호🔽</p>
                    <Input name="name" value={isLogin.phone} />
                    <p style={{fontWeight:"bold", fontSize:'20px', textAlign:"center"}}>가입날짜🔽</p>
                    <Input name="name" value={isLogin.created_at} />
                    <p style={{fontWeight:"bold", fontSize:'20px', textAlign:"center"}}>비밀번호 수정🔽</p>
                    <p style={{margin:'10px', textAlign:"center"}}>대, 소문자와 숫자, 특수문자를 포함한 8자 이상을 입력해주세요</p>
                    <Input onChange={onChangePw} name="password" placeholder='비밀번호' type='password' />
                    <Input onChange={onChangePwCheck} name="passwordCheck" placeholder='비밀번호 확인' type='password' />
                    <Button onClick={onClickCheck} width='364px' backColor='#1877f2' value='비밀번호 수정하기' />
                    <Button onClick={logOut} width='364px' backColor='#1877f2' value='로그아웃' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CenterLayout>
      </div>
  );
}

export default MyInfo;