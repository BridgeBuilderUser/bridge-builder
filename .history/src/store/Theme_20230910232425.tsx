import React, { createContext, useReducer, useContext } from "react";

export const ThemeContext = createContext();

const themes = {
    LIGHT: "light",
    DARK: "dark",
};
// Initial state
const initialState = {
    theme: themes.LIGHT,
    companyName: "Bridge Builder",
    description: "Bridge Builder is a one-stop-shop for companies who need help building, managing & opertaing their Salesforce Database, Marketing Automation, and other business systems.",
};

// Action creators
export function setTheme(theme:string) {
  return { type: SET_THEME, theme };
}

// Action types
export const SET_THEME = "SET_THEME";

// Reducer
export function themeReducer(state, action) {
  switch (action.type) {
    case SET_THEME:
        return { ...state, theme: action.theme };
    default:
      return state;
  }
}


function ThemeProvider(props:any) {
  const [theme, dispatch] = useReducer(themeReducer, initialState);

  const ThemeData = { theme, dispatch };

    return (
        <ThemeContext.Provider value={ThemeData} {...props}>
            {props.children}
        </ThemeContext.Provider>
    );
}

function useThemeContext() {
  return useContext(ThemeContext);
}

export { ThemeProvider, useThemeContext };