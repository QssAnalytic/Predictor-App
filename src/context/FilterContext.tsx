// FilterContext.tsx
import React, { createContext, useState, ReactNode } from "react";

interface FilterParams {
  country?: string;
  wrestler?: string;
}

interface FilterContextType {
  filterParams: FilterParams;
  setFilterParams: React.Dispatch<React.SetStateAction<FilterParams>>;
}

export const FilterContext = createContext<FilterContextType | undefined>(undefined);

interface FilterContextProviderProps {
  children: ReactNode;
}

const FilterContextProvider: React.FC<FilterContextProviderProps> = ({ children }) => {
  const [filterParams, setFilterParams] = useState<FilterParams>({
    country: undefined,
    wrestler: undefined, // fighter_id
  });

  return (
    <FilterContext.Provider value={{ filterParams, setFilterParams }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
