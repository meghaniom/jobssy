import { createContext, useState } from "react";

// Create context
export const Appcontext = createContext();

// Create provider component
export const AppcontextProvider = (props) => {
  const [searchFilter, setSearchFilter] = useState({
    title: '',
    location: ''
  });

  const [isSearched, setIsSearched] = useState(false);

  const value = {
    setSearchFilter,
    searchFilter,
    isSearched,
    setIsSearched
  };

  
  return (
    <Appcontext.Provider value={value}>
      {props.children}
    </Appcontext.Provider>
  );
};
