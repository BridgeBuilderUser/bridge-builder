"use client";
import { createContext, useReducer, useContext } from "react";

export const UiContext = createContext();

 
// Initial state
const initialState = {
 scrollPosition: 0,
 mobileNavOpen: false,
};

 
// Reducer
export function uiReducer(state, action) {
  switch (action.type) {
    case 'SET_SCROLL_POSITION':
        return { ...state, scrollPosition: action.scrollPosition };
    case 'TOGGLE_MOBILE_NAV':
        return { ...state, mobileNavOpen: !state.mobileNavOpen };
    case 'CLOSE_MOBILE_NAV':
        return { ...state, mobileNavOpen: false };
    case 'OPEN_MOBILE_NAV':
        return { ...state, mobileNavOpen: true };
    default:
      return state;
  }
}

function UiProvider(props) {
  const [ui, dispatch] = useReducer(uiReducer, initialState);

  const uiData = { ui, dispatch };

  return (
    <UiContext.Provider value={uiData} {...props}>
      {props.children}
    </UiContext.Provider>
  );
}

function useUiContext() {
  return useContext(UiContext);
}

export { UiProvider, useUiContext };
