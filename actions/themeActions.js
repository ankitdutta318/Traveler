import { TOGGLE_THEME } from "../constants/themeConstants";

export const toggleTheme = (theme) => {
  return {
    type: TOGGLE_THEME,
    payload: theme,
  };
};
