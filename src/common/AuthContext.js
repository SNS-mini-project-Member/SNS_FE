import {executeJwtAuthenticationTokenService} from "./api/ApiPostService";
import {apiClient} from "./api/ApiClient";

export const loginToken = async (userId, userPwd) => {

  const res = {
    loginInfo : {
      isLogin : false,
      email : null,
      name : null,
      age : null,
      phone : null,
      followers_count : 0,
      followings_count : 0,
      created_at : null,
      token: null
    }
  }

  try {
    // 로그인과 동시에 userId 와 pwd 를 이용한 Jwt Token 발행 함수..
    const response = await executeJwtAuthenticationTokenService(userId, userPwd);

    if (response.status === 200) {

      const jwtToken = 'Bearer ' + response.data.token;

      res.isLogin = true;
      res.token = jwtToken;

      // 토큰 인증 성공시 모든 API에 기본 요청 토큰 설정..
      apiClient.interceptors.request.use((config) => {
        config.headers.Authorization = jwtToken;
        return config;
      });

      return res;
    } else {

      return res;
    }

  } catch (error) {
    return res;
  }
}

