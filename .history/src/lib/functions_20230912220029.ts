export function classNames(...classes:any) {
    return classes.filter(Boolean).join(" ");
  }

 export function pressKeys(keys:string[], callback:Function) {
  let index = 0; // Index to track the current key in the sequence

  document.addEventListener("keydown", function(event) {
    // Check if the pressed key matches the current key in the sequence
    if (event.key === keys[index]) {
      index++; // Move to the next key in the sequence
      if (index === keys.length) {
        // If all keys in the sequence have been pressed
        callback(); // Call the provided callback function
        index = 0; // Reset the index
      }
    } else {
      index = 0; // Reset the index if a key doesn't match the sequence
    }
  });
}


const isMobile = ({ dispatch, window }:any) => {
  if (window.innerWidth < 768) {
    dispatch({ type: 'SET_IS_MOBILE', payload: true });
  } else {
    dispatch({ type: 'SET_IS_MOBILE', payload: false });
  }
};