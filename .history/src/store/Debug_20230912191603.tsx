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

function DebugProvider(props) {
  const [debug, dispatch] = useReducer(debugReducer, initialState);

  const DebugData = { debug, dispatch };

  return (
    <DebugContext.Provider value={DebugData} {...props}>
      {props.children}
    </DebugContext.Provider>
  );
}

function useThemeContext() {
  return useContext(DebugContext);
}

export { DebugProvider, useThemeContext };
