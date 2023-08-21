import classes from "../../../styles/pages/login/login.module.css";
import CenterLayout from "../Layout/CenterLayout";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import WelComeLogo from "../../blocks/WelComeLogo";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {userSignup} from "../../../common/api/ApiPostService";

const Signup = (props) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const nav = useNavigate();
  const [users, setUsers] = useState({
    email:"",
    password:"",
    passwordCheck:"",
    name:"",
    age:"",
    phone:""
  });
  const onChangeHandler = (e) =>{
    const {value, name} = e.target
    setUsers({...users, [name]:value})
  }
  const onClickHandler = async (e) =>{
    if (users.password === users.passwordCheck){
      if (emailRegex.test(users.email)){
        if (passwordRegex.test(users.password)){
          try {
            e.preventDefault();
            await userSignup(users.email, users.password, users.name, users.age, users.phone)
            nav('/')
            alert("회원가입 성공")
          }catch (error){
            console.log(error.response.data)
          }
        }else {
          alert("올바른 비밀번호 형식이 아닙니다")
        }
      }else {
        alert("올바른 Eamil형식이 아닙니다.")
      }
    }else {
      alert("password가 일치하지않는다.")
    }
  }

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
                  <Input onChange={onChangeHandler} name="email" focus={true} placeholder='이메일형식 ex)abcd@mail.com' type='text' />
                  <Input onChange={onChangeHandler} name="password" placeholder='비밀번호' type='password' />
                  <Input onChange={onChangeHandler} name="passwordCheck" placeholder='비밀번호 확인' type='password' />
                  <Input onChange={onChangeHandler} name="name" placeholder='성함' type='text' />
                  <Input onChange={onChangeHandler} name="phone" placeholder='전화번호' type='text' />
                  <Input onChange={onChangeHandler} name="age" placeholder='띠' type='text' />
                  <Button onClick={onClickHandler} width='364px' backColor='#1877f2' value='회원가입' />
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