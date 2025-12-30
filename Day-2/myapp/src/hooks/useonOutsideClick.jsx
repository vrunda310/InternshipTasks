import { useEffect } from "react";


function useonOutsideClick(ref, handleClickOutside) {
    
    useEffect(() => {
        const handleClick = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
            return;
        }
        handleClickOutside(event);
      }
        document.addEventListener("mousedown", handleClick);
        document.addEventListener("touchstart", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("touchstart", handleClick);
        }
    },[ref, handleClickOutside]);
  
}

export {useonOutsideClick};