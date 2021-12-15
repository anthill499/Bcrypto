import { LOGIN, LOGOUT } from "../actions/auth";

export interface authState {
  loggedIn: boolean;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  id: string;
  token?: string;
}
export interface AuthAction {
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  id?: string;
  type: string;
  token?: string;
}

const localUser = JSON.parse(
  localStorage.getItem("authorizationCredentials") || "{}"
);

// empty object for typing issues
const initAuth: authState = {
  loggedIn: Object.values(localUser).length > 0 ? true : false,
  username: localUser.username ? localUser.username : "",
  id: localUser.id ? localUser.id : "",
  email: localUser.email ? localUser.email : "",
  firstName: localUser.firstName ? localUser.firstName : "",
  lastName: localUser.lastName ? localUser.lastName : "",
};

const authReducer = (
  state: authState = initAuth,
  action: AuthAction
): authState => {
  switch (action.type) {
    case LOGIN:
      return {
        loggedIn: true,
        username: action.username,
        email: action.email,
        firstName: action.firstName,
        lastName: action.lastName,
        id: action.id,
        token: action.token,
      } as authState;
    case LOGOUT:
      return initAuth;
    default:
      return state;
  }
};

export { authReducer, initAuth };
