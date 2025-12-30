import { useState } from "react";

export default function useLocalStorage(key, initialvalue){

     const getStoredValue = () => {
        const storedValue = localStorage.getItem("key");
        return storedValue ? JSON.parse(storedValue) : initialvalue;
    }

    const [value,setValue] = useState(getStoredValue);

    const setStoredValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key,JSON.stringify(newValue));
    };

        return [value,setStoredValue];
}