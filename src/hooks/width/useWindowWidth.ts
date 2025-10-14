import { useState, useEffect } from "react";

// Custom Hook for Window Width
// Debounce time can be provided (default is 200ms)
const useWindowWidth = (debounceDelay: number = 200): number => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    // Variable to store the debounce timeout
    let timeout: number;

    const handleResize = () => {
      // Clear previous timeout
      if (timeout) {
        clearTimeout(timeout);
      }

      // Set a new timeout for the resize event
      timeout = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, debounceDelay);
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeout) {
        clearTimeout(timeout); // Cleanup debounce timeout
      }
    };
  }, [debounceDelay]); // Re-run effect only when debounceDelay changes

  return windowWidth;
};

export default useWindowWidth;
