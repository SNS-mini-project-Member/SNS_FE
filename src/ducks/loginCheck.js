import {createSlice} from "@reduxjs/toolkit";

const initialIsLoginState = {
  loginInfo : {
      isLogin : false,
      email : null,
      name : null,
      age : null,
      phone : null,
      followers_count : 0,
      followings_count : 0,
      created_at : null,
  }
}

const loginCheckSlise = createSlice({
  name : 'isLogin',
  initialState : initialIsLoginState,
  reducers : {

    loginInfoSet(state, action) {
      state.loginInfo = action.payload;
    },

    newToken(state, action) {
      state.loginInfo.token = action.payload;
    },

  }
})

export const loginCheckAction = loginCheckSlise.actions;
export default loginCheckSlise.reducer;