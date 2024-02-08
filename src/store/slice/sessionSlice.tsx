import { createSlice } from "@reduxjs/toolkit";
import {
  SetIsLoadingAT,
  SetSessionAT,
  UserSessionType,
} from "../../features/login/types/sessionType";
import {
  clearSessionCookie,
  setSessionCookie,
} from "../../utils/cookieFunctions";

const initialState: UserSessionType = {
  isLoggedIn: false,
  isLoading: true,
};

const sessionSlice = createSlice({
  name: "session",
  initialState: initialState,
  reducers: {
    setSession: (state: UserSessionType, action: SetSessionAT) => {
      setSessionCookie(action.payload.token);
      state.isLoggedIn = true;
      state.isLoading = false;
      return state;
    },
    setIsLoading: (state: UserSessionType, action: SetIsLoadingAT) => {
      state.isLoading = action.payload;
      return state;
    },
    clearSession: (state: UserSessionType) => {
      clearSessionCookie();
      state.isLoggedIn = false;
      state.isLoading = false;
      return state;
    },
  },
});

// Selectors
export const selectSession = (state: any) => {
  return state.session;
};
export const selectSessionIsLoading = (state: any) => {
  return state.session.isLoading;
};
export const selectIsLoggedIn = (state: any) => {
  return state.session.isLoggedIn;
};
// Selectors

export const { setSession, clearSession, setIsLoading } = sessionSlice.actions;

export default sessionSlice.reducer;
