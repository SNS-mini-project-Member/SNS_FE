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
      createAt : null,
      token: null
  }
}

const loginCheckSlise = createSlice({
  name : 'isLogin',
  initialState : initialIsLoginState,
  reducers : {

    loginInfoSet(state, action) {
      state.loginInfo = action.payload;
    },

  }
})

export const loginCheckAction = loginCheckSlise.actions;
export default loginCheckSlise.reducer;