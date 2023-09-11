"use client";
import { createContext, useReducer, useContext } from "react";

export const ThemeContext = createContext();

 
// Initial state
const initialState = {
 scrollPosition: 0,
};

 
// Reducer
export function uiReducer(state, action) {
  switch (action.type) {
    case 'SET_SCROLL_POSITION':
        return { ...state, scrollPosition: action.scrollPosition };
    default:
      return state;
  }
}

function ThemeProvider(props: any) {
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
