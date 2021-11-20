import { LOGIN, LOGOUT } from "./types";

export const login = (data) => {
  return {
    type: LOGIN,
    ...data,
  };
};

export const logout = () => {
  //   localStorage.removeItem("user");
  return {
    type: LOGOUT,
  };
};
