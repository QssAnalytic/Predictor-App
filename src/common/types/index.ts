//UI Components

import { ReactNode } from "react";

interface CustomSelectProps {
    title: string;
    options: Option[];
    placeholder: string;
    value: string | undefined;
    onChange: (selectedValue: string) => void;
}

interface Option {
    data: string
}


//Context

interface FilterParams {
    country?: string;
    wrestler?: string;
}

interface FilterContextType {
    filterParams: FilterParams;
    setFilterParams: React.Dispatch<React.SetStateAction<FilterParams>>;
}
interface FilterContextProviderProps {
    children: ReactNode;
}

export type { CustomSelectProps, FilterParams, FilterContextType, FilterContextProviderProps };
