"use client";
import { createContext, useReducer, useContext, useEffect } from "react";

export const UiContext = createContext();


// Initial state
const initialState = {
  scrollPosition: 0,
  mobileNavOpen: false,
  isMobile: window.innerWidth < 768,
  isLoading: false,
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

    case 'SET_IS_LOADING':
      return { ...state, isLoding: action.isLoding };

    case 'SET_IS_MOBILE':
      return { ...state, isMobile: action.isMobile };
    default:
      return state;
  }
}

function UiProvider(props) {
  const [ui, dispatch] = useReducer(uiReducer, initialState);
  debugger
  const uiData = { ui, dispatch };

  useEffect(() => {
    const handleResize = () => {
      console.log('resize', window.innerWidth < 768);
      dispatch({ type: 'SET_IS_MOBILE', isMobile: window.innerWidth < 768 });
    }
    const handleScroll = () => {
      dispatch({ type: 'SET_SCROLL_POSITION', scrollPosition: window.scrollY });
    }
    handleScroll();
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    }
  }, [dispatch]);

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


  


  return { ...ui, setScrollPosition, toggleMobileNav, closeMobileNav, openMobileNav };
}

export { UiProvider, useUi };
