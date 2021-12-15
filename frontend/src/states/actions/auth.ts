const LOGIN: string = "LOGIN";
const LOGOUT: string = "LOGOUT";

interface frontendData {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  id: string;
  token: string;
}
export const login = (data: frontendData) => {
  return {
    type: LOGIN,
    ...data,
  };
};

export const logout = (): { type: string } => {
  localStorage.removeItem("authorizationCredentials");
  return {
    type: LOGOUT,
  };
};
export { LOGIN, LOGOUT };
