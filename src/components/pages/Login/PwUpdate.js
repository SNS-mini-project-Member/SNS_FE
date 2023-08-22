import CenterLayout from "../Layout/CenterLayout";
import WelComeLogo from "../../blocks/WelComeLogo";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import classes from "../../../styles/pages/login/login.module.css";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import SendTmpPw from "./SendTmpPw";

//1. 수정페이지에서 비밀번호 변경 버튼을 누르면 임시비밀번호 발송
//2. 비밀번호 수정 페이지 변환
//3. 임시비밀번호로 로그인하고 수정 페이지로 이동하면 수정된 페이지가 뜸.
//4. 수정페이지에서 비밀번호 재설정 하면 수정되야함
const PwUpdate = () => {
  const isLogin = useSelector(state => state.loginCheck.loginInfo);
  const nav = useNavigate();

  const goToUpdate = () => {
    nav('/update');
  }


  return (
    <div className={classes.loginWrap}>
      <CenterLayout>
        <div className={classes.signUpArea}>
          <div className={classes.loginAreaWrap}>
            <div>
              <div className={classes.loginForm}>
                <div className={classes.loginInnerForm}>
                  <SendTmpPw />
                  <Input name="email" focus={true} readOnly placeholder={isLogin.email} />
                  <Button width='364px' backColor='#1877f2' value='인증받기' />
                  <Input  name="checkCode" placeholder='인증번호를 입력해주세요' type='text' />
                  <Button width='364px' backColor='#1877f2' value='확인' />
                  <Input  name="password" placeholder='비밀번호' type='password' />
                  <Input  name="passwordCheck" placeholder='비밀번호 확인' type='password' />
                  <Button width='364px' backColor='#1877f2' value='수정하기' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CenterLayout>
    </div>
  );
}

export default PwUpdate;