import {userLogin, validToken} from "./api/ApiPostService";
import {apiClient} from "./api/ApiClient";
import cookie from 'react-cookies';


export const apiClientTokenSetting = (token) => {

  apiClient.interceptors.request.use((config) => {
    config.headers.Authorization = token;
    return config;
  });
}

export const loginToken = async (userId, userPwd) => {

  const res = {
    isLogin : false,
    email : null,
    name : null,
    age : null,
    phone : null,
    followers_count : 0,
    followings_count : 0,
    created_at : null,
    token : null,
    refreshToken: null
  }

  try {
    // 로그인과 동시에 userId 와 pwd 를 이용한 Jwt Token 발행 함수..
    const response = await userLogin(userId, userPwd);

    if (response.status === 200) {

      const jwtToken = 'Bearer ' + response.data.token;
      const refreshToken = response.data.refreshToken;

      // 토큰을 쿠키에 설정
      // cookie.set('jwtToken', jwtToken);
      // cookie.set('refreshToken', refreshToken);

      res.isLogin = true;
      res.email = response.data.email;
      res.name = response.data.name;
      res.age = response.data.age;
      res.phone = response.data.phone;
      res.created_at = response.data.createAt;
      res.token = response.data.token;
      res.refreshToken = response.data.refreshToken;

      // 토큰 인증 성공시 모든 API에 기본 요청 토큰 설정..
      apiClientTokenSetting(jwtToken);
      return res;

    } else {

      return res;
    }

  } catch (error) {
    return res;
  }
}

