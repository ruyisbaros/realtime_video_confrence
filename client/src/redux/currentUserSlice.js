import { createSlice } from "@reduxjs/toolkit";
//import Cookies from "js-cookie";
const user = window.localStorage.getItem("registeredUserConf");
let onUsers = window.localStorage.getItem("onlineUsersConf");
const initialState = {
  loggedUser: user ? JSON.parse(user) : null,
  onLineUsers: onUsers ? JSON.parse(onUsers) : [],
  tokenExpired: false,
};

const currentUSlicer = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    reduxRegisterUser: (state, action) => {
      const { id, email, name, picture, status } = action.payload;
      state.loggedUser = { id, name, email, picture, status };
    },
    reduxLogout: (state, action) => {
      state.loggedUser = null;
    },
    reduxMakeTokenExpired: (state, action) => {
      state.tokenExpired = true;
    },
    reduxMakeTokenExpiredNone: (state, action) => {
      state.tokenExpired = false;
    },
    reduxSetOnlineUsers: (state, action) => {
      state.onLineUsers = action.payload;
    },
    reduxAUserBecameOffline: (state, action) => {
      state.onLineUsers = state.onLineUsers.filter(
        (usr) => usr.id !== action.payload
      );
    },
  },
});

export const {
  reduxLogout,
  reduxRegisterUser,
  reduxSetOnlineUsers,
  reduxAUserBecameOffline,
  reduxMakeTokenExpired,
  reduxMakeTokenExpiredNone,
} = currentUSlicer.actions;

export default currentUSlicer.reducer;
