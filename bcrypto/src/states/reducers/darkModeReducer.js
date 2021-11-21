import { CHANGETHEME } from "../actions/types";

const initialState = {
  darkMode: false,
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGETHEME:
      return {
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};
