import { CHANGETHEME } from "../actions/types";
import { lightTheme, darkTheme } from "../../themes";

export const initialTheme = {
  darkMode: false,
  currTheme: lightTheme,
};

export const themeReducer = (state = initialTheme, action) => {
  switch (action.type) {
    case CHANGETHEME:
      const bool = !state.darkMode;
      const currTheme = bool ? darkTheme : lightTheme;
      return {
        darkMode: bool,
        currTheme,
      };
    default:
      return state;
  }
};
