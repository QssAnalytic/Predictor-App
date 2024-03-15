import { Button } from "@/common/components/ui/button";
import { useContext } from "react";
import { getData } from '../../services/api/requests.ts';
import { FilterContext } from '../../context/FilterContext.tsx';
import { filterEndpoints } from '../../services/api/endpoints.ts';
import useSWR from "swr";
import ChangeArrows from '/changeArrows.svg'
import CustomSelect from "@/components/CustomSelect.tsx";
import { useForm } from 'react-hook-form';
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
// import { toast } from "@/components/ui/use-toast"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { z } from "zod"


interface HomeProps { }

interface FormData {
  wrestlerLeft: string;
  wrestlerRight: string;
}

const Home: React.FC<HomeProps> = () => {
  const { filterParams, setFilterParams } = useContext(FilterContext);
  const { data: countriesLeft } = useSWR(filterEndpoints.countries, getData);
  const { data: countriesRight } = useSWR(filterEndpoints.countries, getData);
  const { data: fightersLeft } = useSWR(filterParams?.countryLeft ? filterEndpoints.fighters(filterParams.countryLeft) : null, getData);
  const { data: fightersRight } = useSWR(filterParams?.countryRight ? filterEndpoints.fighters(filterParams.countryRight) : null, getData);
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => { console.log(data) };

  const handleCountryChangeLeft = (selectedCountry: string | undefined) => {
    setFilterParams((prev: any) => ({ ...prev, countryLeft: selectedCountry }));
  };

  const handleCountryChangeRight = (selectedCountry: string | undefined) => {
    setFilterParams((prev: any) => ({ ...prev, countryRight: selectedCountry }));
  };


  return (
    <div className="w-full flex flex-col items-center justify-center select-none ">

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="h-64 bg-[#3746772E] text-[#D8D8D8] container md:w-4/5 lg:w-8/12 xl:w-6/12 w-full flex justify-between items-center 2xl:flex 2xl:flex-col ">

          <div className="">

            <CustomSelect
              title="Country"
              options={countriesRight}
              placeholder="aze 🇦🇿"
              value={filterParams.countryRight}
              onChange={handleCountryChangeRight}
            />

            <CustomSelect
              title="Opponents 1"
              options={fightersRight}
              placeholder="Haji ALIYEV"
              value={filterParams.wrestlerRight}
              {...register(filterParams.wrestlerRight)}
              onChange={(selectedWrestler) => setFilterParams((prev: any) => ({ ...prev, wrestlerRight: selectedWrestler }))}
            />

          </div>

          <img src={ChangeArrows} alt="" />

          <div>

            <CustomSelect
              title="Country"
              options={countriesLeft}
              placeholder="Rus 🇷🇺"
              value={filterParams.countryLeft}
              onChange={handleCountryChangeLeft}
            />

            <CustomSelect
              title="Opponents 2"
              options={fightersLeft}
              placeholder="Amirbek Sultanov"
              value={filterParams.wrestlerLeft}
              {...register(filterParams.wrestlerLeft)}
              onChange={(selectedWrestler) => setFilterParams((prev: any) => ({ ...prev, wrestlerLeft: selectedWrestler }))}
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