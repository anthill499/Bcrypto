import { LOGIN, LOGOUT } from "../actions/auth";

interface authState {
  loggedIn: boolean;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  id: string;
  token?: string;
}

interface Action {
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  id?: string;
  type?: string;
  token?: string;
}

const initialState: authState = {
  loggedIn: false,
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  id: "",
};

const authReducer = (
  state: authState = initialState,
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
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
