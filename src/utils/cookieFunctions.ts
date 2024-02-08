import Cookies from "universal-cookie";

const cookie = new Cookies();

// Admin Session and Cookie
export const setSessionCookie = (token: string) => {
  cookie.set("token", token);
};
export const clearSessionCookie = () => {
  cookie.remove("token");
};
export const getSessionCookie = () => {
  return cookie.get("token");
};
// Admin Session and Cookie
