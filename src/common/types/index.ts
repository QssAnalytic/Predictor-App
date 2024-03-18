interface CustomSelectProps {
    title: string;
    options: Option[];
    placeholder: string;
    value?: string;
    onChange?: (selectedValue: string) => void;
    name?: string;
}

interface Option {
    data: string
}

interface FormData {
    wrestlerLeft: string;
    wrestlerRight: string;
    countriesRight: string;
    countriesLeft: string;
}



interface Country {
    countryRight?: string;
    countryLeft?: string;
}

interface Fighter {
    wrestlerLeft?: string;
    wrestlerRight?: string;
}

interface GetData {
    countries: Country[];
    fighters: Fighter[];
}


export type { CustomSelectProps, FormData, GetData,Fighter,Country };
