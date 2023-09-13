"use client";

import { createContext, useContext, useEffect, useReducer } from 'react';

const initialState = {
  isMobile: false,
  isLoading: false,
  isMobileNavOpen: false,
  scrollPosition: 0,
}

// Reducer function
function uiReducer(state, action) {
  switch (action.type) {
    case 'SET_IS_MOBILE':
      return {
        ...state,
        isMobile: action.payload,
      };
    case 'TOGGLE_LOADING':
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case 'SET_IS_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'TOGGLE_MOBILE_NAV':
      return {
        ...state,
        isMobileNavOpen: !state.isMobileNavOpen,
      };
    case 'SET_IS_MOBILE_NAV_OPEN':
      return {
        ...state,
        isMobileNavOpen: action.payload,
      };
    case 'SET_SCROLL_POSITION':
      return {
        ...state,
        scrollPosition: action.payload,
      };
    default:
      return state;
  }
}
    
// Create a context for the Ui mode
const UiContext = createContext();

// Custom hook to access the Ui mode and setUiMode function
export function useUi() {
  return useContext(UiContext);
}

// Provider component to wrap your app with to provide the Ui context
export function UiProvider({ children }) {
  const [uiStore, dispatch] = useReducer(UiContext, initialState);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        dispatch({ type: 'SET_IS_MOBILE', payload: true });
      } else {
        dispatch({ type: 'SET_IS_MOBILE', payload: false });
      }
    };

    const handleScroll = () => {
      dispatch({ type: 'SET_SCROLL_POSITION', payload: window.scrollY });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // toggle loading state
  const toggleLoading = () => {
    dispatch({ type: 'TOGGLE_LOADING' });
  };

  // set loading state
  const setLoading = (value) => {
    dispatch({ type: 'SET_IS_LOADING', payload: value });
  };

  // toggle mobile nav
  const toggleMobileNav = () => {
    dispatch({ type: 'TOGGLE_MOBILE_NAV' });
  };

  // set mobile nav
  const setMobileNav = (value) => {
    dispatch({ type: 'SET_IS_MOBILE_NAV_OPEN', payload: value });
  };

  // set scroll position
  const setScrollPosition = (value) => {
    dispatch({ type: 'SET_SCROLL_POSITION', payload: value });
  };




  const value = {
    uiStore,
    toggleLoading,
    setLoading,
    toggleMobileNav,
    setMobileNav,
    setScrollPosition,
  };

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}
