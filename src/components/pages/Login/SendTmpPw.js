import CenterLayout from "../Layout/CenterLayout";
import WelComeLogo from "../../blocks/WelComeLogo";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import classes from "../../../styles/pages/login/login.module.css";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {sendTmpPw} from "../../../common/api/ApiPostService";

//1. 수정페이지에서 비밀번호 변경 버튼을 누르면 임시비밀번호 발송 ok
//2. 비밀번호 수정 페이지 변환 ok
//3. 임시비밀번호로 로그인하고 수정 페이지로 이동하면 수정된 페이지가 뜸.
//4. 수정페이지에서 비밀번호 재설정 하면 수정되야함
const SendTmpPw = () => {
  const isLogin = useSelector(state => state.loginCheck.loginInfo);
  const nav = useNavigate();
  const onClickSend = () => {
    const email = isLogin.email
    sendTmpPw(email);
    localStorage.clear();
    nav('/');
  }

  return (
    <div className={classes.loginWrap}>
      <CenterLayout>
        <div className={classes.signUpArea}>
          <div className={classes.updateLoginAreaWrap}>
            <div>
              <div className={classes.loginForm}>
                <div className={classes.updateLoginInnerForm}>
                  <div style={{textAlign:"center"}}>
                    <p>회원가입시 입력했던 Email을 입력해주세요</p><br />
                  </div>
                  <Input name="email" placeholder={"email@mail.com"} />
                  <Button onClick={onClickSend} width='364px' backColor='#1877f2' value='임시 비밀번호 발급받기' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CenterLayout>
    </div>
  );
}

export default SendTmpPw;