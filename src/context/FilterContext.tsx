import React, { createContext, useState } from "react";
import { FilterParams } from "@/common/types";
import { FilterContextType } from "@/common/types";
import { FilterContextProviderProps } from "@/common/types";




export const FilterContext = createContext<FilterContextType | undefined>(undefined);


const FilterContextProvider: React.FC<FilterContextProviderProps> = ({ children }) => {
  const [filterParams, setFilterParams] = useState<FilterParams>({
    country: undefined,
    wrestler: undefined,
  });

  return (
    <FilterContext.Provider value={{ filterParams, setFilterParams }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
