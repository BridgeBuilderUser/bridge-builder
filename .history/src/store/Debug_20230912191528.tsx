"use client";
import { createContext, useReducer, useContext } from "react";

export const DebugContext = createContext();

// Initial state
const initialState = {
    debugMode: false,
};





// Reducer
export function debugReducer(state, action) {
  switch (action.type) {
    case 'SET_DEBUG_MODE':
        return { ...state, debugMode: action.debugMode };
    default:
      return state;
  }
}

function ThemeProvider(props) {
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
