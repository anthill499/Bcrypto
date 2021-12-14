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

export interface Action {
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  id?: string;
  type: string;
  token?: string;
}

const initAuth: authState = {
  loggedIn: false,
  username: "",
  id: "",
  email: "",
  firstName: "",
  lastName: "",
};

const authReducer = (
  state: authState = initAuth,
  action: Action
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
