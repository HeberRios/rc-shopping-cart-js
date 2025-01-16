import { createContext, useState } from 'react';

// creating the context
export const FiltersContext = createContext();

// creating a provider

// here children are the components that will be wrapped by the context provider
export function FiltersProvider({ children }) {
  // as we want to have a filters state and a function to change
  // that state we need to implement the useState hook

  const [filters, setFilters] = useState({
    minPrice: 0,
    category: 'all',
  });

  return (
    <FiltersContext.Provider
      value={{
        // having its own state inside the context provider we can return as a value
        // the state and the setState
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
