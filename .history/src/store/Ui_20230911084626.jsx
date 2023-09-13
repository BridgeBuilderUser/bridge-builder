"use client";
import { createContext, useReducer, useContext } from "react";

export const UiContext = createContext();

 
// Initial state
const initialState = {
 scrollPosition: 0,
 mobileNavOpen: false,
 isMobile: window.innerWidth < 768,
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
    
        case 'SET_IS_MOBILE':
        return { ...state, isMobile: action.isMobile };
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

function useUi() {

  const { ui, dispatch } = useContext(UiContext);

  const setScrollPosition = (scrollPosition) => {
    dispatch({ type: 'SET_SCROLL_POSITION', scrollPosition });
  }

  const toggleMobileNav = () => {
    dispatch({ type: 'TOGGLE_MOBILE_NAV' });
  }

  const closeMobileNav = () => {
    dispatch({ type: 'CLOSE_MOBILE_NAV' });
  }

  const openMobileNav = () => {
    dispatch({ type: 'OPEN_MOBILE_NAV' });
  }


  return { ui, setScrollPosition, toggleMobileNav, closeMobileNav, openMobileNav };
}

export { UiProvider, useUi };
