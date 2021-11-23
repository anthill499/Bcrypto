import { LOGIN, LOGOUT } from "../actions/types";
const initialState = {
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  setTheme: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      // Can probably do Object.assign and destructure action
      return {
        username: action.username,
        email: action.email,
        firstName: action.firstName,
        lastName: action.lastName,
        setTheme: action.setTheme,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
