import ChangeArrows from '/changeArrows.svg'
import CustomSelect from "@/components/CustomSelect.tsx";
import { Button } from "@/common/components/ui/button";
import { getData } from '../../services/api/requests.ts';
import { filterEndpoints } from '../../services/api/endpoints.ts';
import { Controller, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { FormData,  Country, Fighter } from "@/common/types/index.ts";

const Home = () => {
  const { control, handleSubmit, watch } = useForm<FormData>();

  const [countriesLeft, setCountriesLeft] = useState<Country[]>([]);
  const [countriesRight, setCountriesRight] = useState<Country[]>([]);
  const [fightersLeft, setFightersLeft] = useState<Fighter[]>([]);
  const [fightersRight, setFightersRight] = useState<Fighter[]>([]);

  const countryLeft = watch('countriesLeft');
  const countryRight = watch('countriesRight');



  useEffect(() => {
    const fetchData = async () => {
      const leftCountriesData: Country[] = await getData(filterEndpoints.countries);
      setCountriesLeft(leftCountriesData);

      const rightCountriesData: Country[] = await getData(filterEndpoints.countries);
      setCountriesRight(rightCountriesData);

      const leftFightersData: Fighter[] = await getData(countryLeft ? filterEndpoints.fighters(countryLeft) : null);
      setFightersLeft(leftFightersData);

      const rightFightersData: Fighter[] = await getData(countryRight ? filterEndpoints.fighters(countryRight) : null);
      setFightersRight(rightFightersData);
    };

    fetchData();
  }, [countryLeft, countryRight]);

  const onSubmit = (data: FormData) => {
    alert(`Opponent 1 =>${data.wrestlerLeft}, \nOpponent 2 => ${data.wrestlerRight}`);

  };

  return (
    <div className="w-full flex flex-col items-center justify-center select-none ">

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="h-64 bg-[#3746772E] text-[#D8D8D8] container md:w-4/5 lg:w-8/12 xl:w-6/12 w-full flex justify-between items-center 2xl:flex 2xl:flex-col ">

          <div>
            <Controller
              name="countriesLeft"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  title="Country"
                  options={countriesLeft}
                  placeholder="aze 🇦🇿"
                  {...field}
                />
              )}
            />

            <Controller
              name="wrestlerLeft"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  title="Opponents 1"
                  options={fightersLeft}
                  placeholder="Haji ALIYEV"
                  {...field}
                />
              )}
            />

          </div>

          <Button type="button" className="bg-transparent">
            <img src={ChangeArrows} alt="" />
          </Button>

          <div className="">
            <Controller
              name="countriesRight"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  title="Country"
                  options={countriesRight}
                  placeholder="Rus 🇷🇺"
                  {...field}
                />
              )}
            />
            <Controller
              name="wrestlerRight"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  title="Opponents 2"
                  options={fightersRight}
                  placeholder="Amirbek Sultanov"
                  {...field}
                />
              )}
            />

          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <Button type="submit" className="bg-[#374677] rounded text-lg p-7 font-semibold" >Predict match result</Button>
        </div>
      </form>

      <div className="text-[#D8D8D8] text-center  mt-10 text-2xl">
        <p>Predicted Winner:  <span className="text-[#28F449] ml-10">Amirbek Sultanov</span></p>
        <p className="my-3">Probabilty:  <span className="text-[#289FF4] text-[40px] ml-20">72%</span></p>
        <p>Point difference:  <span className="text-[#CB700E] ml-9">5</span></p>
      </div>

    </div>
  );
}

export default Home;
