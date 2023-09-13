"use client";

import { createContext, use, useContext, useEffect, useReducer } from 'react';

import { scrollDirections } from '@/lib/constants';
import { useBreakpoints } from '@/hooks/useBreakpoints';

const initialState = {
  isMobile: false,
  isLoading: false,
  isMobileNavOpen: false,
  scrollPosition: 0,
  scrollDirection: scrollDirections.DOWN,
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
  const breakpoint = useBreakpoints();
  const [uiStore, dispatch] = useReducer(uiReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'SET_IS_MOBILE', payload: breakpoint });
  }, [breakpoint]);

  

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

  // set scroll direction
  const setScrollDirection = (value) => {
    dispatch({ type: 'SET_SCROLL_DIRECTION', payload: value });
  };




  const value = {
    uiStore,
    uiActions: {
      toggleLoading,
      setLoading,
      toggleMobileNav,
      setMobileNav,
      setScrollPosition,
    }
  };

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}
