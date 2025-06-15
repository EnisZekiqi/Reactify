import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext(null);

export const ScrollProvider = ({ children }) => {
  const scrollContainerRef = useRef(null);
  return (
    <ScrollContext.Provider value={scrollContainerRef}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContainerRef = () => {
  return useContext(ScrollContext);
};
