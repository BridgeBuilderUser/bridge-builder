import { createContext, useContext, useEffect, useReducer } from 'react';

const initialState = {
  isMobile: false,
  isLoading: false,
  isMobileNavOpen: false,
  scrollPosition: 0,
}
// Create a context for the Ui mode
const UiContext = createContext();

// Custom hook to access the Ui mode and setUiMode function
export function useUi() {
  return useContext(UiContext);
}

// Provider component to wrap your app with to provide the Ui context
export function UiProvider({ children }) {
  const [ui, dispatch] = useReducer(UiContext, initialState);

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
  
  // Toggle Ui mode
  const toggleUiMode = () => {
    setUiMode((prevUiMode) => !prevUiMode);
  };

  const value = {
    UiMode,
    setUiMode,
    toggleUiMode,
  };

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}
