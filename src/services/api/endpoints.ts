const filterEndpoints = {
  countries: `filters/countries/`,
  fighters: (country_name:string) => `filters/fighters/${country_name}/`,

};

export { filterEndpoints } 