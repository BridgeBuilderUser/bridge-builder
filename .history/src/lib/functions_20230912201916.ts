export function classNames(...classes:any) {
    return classes.filter(Boolean).join(" ");
  }

 export function callFunctionOnShiftD(callback) {
  document.addEventListener("keydown", function(event) {
    // Check if the Shift key and the "D" key are both pressed
    if (event.shiftKey && event.key === "D") {
      callback(); // Call the provided callback function
    }
  });
}