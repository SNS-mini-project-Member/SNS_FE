import classes from "../../../styles/pages/login/login.module.css";
import CenterLayout from "../Layout/CenterLayout";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import WelComeLogo from "../../blocks/WelComeLogo";
import {useNavigate} from "react-router-dom";

const Signup = (props) => {
  const nav = useNavigate();

  const userLoginHandler = () => {
    nav('/');
  }

  return (
    <div className={classes.loginWrap}>
      <CenterLayout>
        <div className={classes.signUpArea}>
          <div className={classes.loginAreaWrap}>
            <WelComeLogo type="signup" />
            <div>
              <div className={classes.loginForm}>
                <div className={classes.loginInnerForm}>
                  <Input focus={true} placeholder='이메일 또는 전화번호' type='text' />
                  <Input placeholder='비밀번호' type='password' />
                  <Input placeholder='비밀번호 확인' type='password' />
                  <Input placeholder='성함' type='text' />
                  <Input placeholder='전화번호' type='text' />
                  <Input placeholder='띠' type='text' />
                  <Button width='364px' backColor='#1877f2' value='회원가입' />
                  <div className={classes.findPassArea}>
                    <p style={{borderBottom : 'none', marginTop : '5px'}} onClick={userLoginHandler} className={classes.paramOption}>이미 회원 이신가요?</p>
                    <p style={{borderBottom : 'none', marginTop : '5px'}}  onClick={userLoginHandler} className={classes.paramOption}>비밀번호를 잊으셨나요?</p>
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

export default Signup;