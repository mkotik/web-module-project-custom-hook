import React, { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const setValue = (value) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
// function getSavedValue(key, initialValue) {
//   const savedValue = JSON.parse(localStorage.getItem(key));

//   if (savedValue) return savedValue;
//   if (initialValue instanceof Function) return initialValue();
//   return initialValue;
// }

// const useLocalStorage = (initialValue, key) => {
//   const [value, setValue] = useState(() => {
//     return getSavedValue(initialValue, key);
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [value]);

//   return [value, setValue];
// };

// export default useLocalStorage;
