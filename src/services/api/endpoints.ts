interface FilterEndpoints {
  countries: string;
  fighters: (country_name: string) => string;
}

const filterEndpoints: FilterEndpoints = {
  countries: `filters/countries/`,
  fighters: (country_name: string) => `filters/fighters/${country_name}/`,
};

export { filterEndpoints };
