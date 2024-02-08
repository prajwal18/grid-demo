import { LoginResponseType } from "./loginType";

export type UserSessionType = {
  isLoggedIn: boolean;
  isLoading: boolean;
};

export type SetSessionAT = {
  type: any;
  payload: LoginResponseType;
};

export type SetIsLoadingAT = {
  type: any;
  payload: boolean;
};
