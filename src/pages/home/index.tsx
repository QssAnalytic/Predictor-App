import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, } from "@/common/components/ui/select"
import { Button } from "@/common/components/ui/button";
import useSWR from "swr";
import { useContext, useEffect, useState } from "react";
import { getData } from '../../services/api/requests.ts';
import { FilterContext } from '../../context/FilterContext.tsx';
import { filterEndpoints } from '../../services/api/endpoints.ts';

import ChangeArrows from '/changeArrows.svg'
import Earth from '/icons/earth.svg'

export default function Home() {

  const { filterParams, setFilterParams, } = useContext(FilterContext);

  const { data: countries } = useSWR(filterEndpoints.countries, getData);
  const { data: fighters } = useSWR(filterParams?.country ? filterEndpoints.fighters(filterParams.country) : null, getData);
  console.log(countries)
  console.log(fighters)

  const [defaultCountry, setDefaultCountry] = useState('aze');
  const [defaultWrestler, setDefaultWrestler] = useState(21493);

  useEffect(() => {
    setFilterParams(prev => ({
      ...prev,
      country: defaultCountry,
      wrestler: defaultWrestler,
    }));
  }, []);


  const data = [
    {
      country: {
        name: "AZE",
        flag: "🇦🇿",
      },
      opponents: [
        {
          name: "HAJI ALIYEV",
        },
        {
          name: "HAJI ALIYEV 1",
        },
        {
          name: "HAJI ALIYEV 2",
        },
        {
          name: "HAJI ALIYEV 3",
        },
        {
          name: "HAJI ALIYEV 4",
        },
      ],
    },
    {
      country: {
        name: "RUS",
        flag: "🇷🇺",
      },
      opponents: [
        {
          name: "AMIRBEK SULTANOV",
        },
        {
          name: "AMIRBEK SULTANOV 1",
        },
        {
          name: "AMIRBEK SULTANOV 2",
        },
        {
          name: "AMIRBEK SULTANOV 3",
        },
        {
          name: "AMIRBEK SULTANOV 4",
        },
      ],
    },
  ];
// return null


  return (
    <div className="w-full flex flex-col items-center justify-center select-none">
      <div className="h-64 bg-[#3746772E] container w-6/12 flex justify-between items-center ">

        <div className="text-[#D8D8D8]">
          <p className="flex gap-1">Country <img src={Earth} alt="" width={20} /> </p>
          <Select >
            <SelectTrigger className="w-[180px]  bg-[#0F1322] border border-[#373A45] rounded">
              <SelectValue placeholder='aze' />
            </SelectTrigger>

            <SelectContent className="bg-[#0F1322] text-[#D8D8D8]">
              <SelectGroup className="">
                {countries?.map((item: any, index: any) => (
                  <div key={index}>
                    <SelectItem value={item.data}>{item.data} </SelectItem>
                  </div>
                ))}

              </SelectGroup>
            </SelectContent>

            {/* <Select
              id={"country"}
              name={"Country"}
              data={countries}
              value={filterParams}
              setValue={setFilterParams}
              filterDialog={filterDialog}
              setFilterDialog={setFilterDialog}
            /> */}
          </Select>


          <p>Opponents</p>
          <Select >
            <SelectTrigger className="w-[180px]  bg-[#0F1322] border border-[#373A45] rounded">
              <SelectValue  placeholder='haji aliyev'/>
            </SelectTrigger>

            <SelectContent className="bg-[#0F1322] text-[#D8D8D8]">
              <SelectGroup className="">
              {fighters?.map((item: any, index: any) => (
                  <div key={index}>
                    <SelectItem value={item.data}>{item.data} </SelectItem>
                  </div>
                ))}

              </SelectGroup>
              
              

            </SelectContent>

            {/* <Select
              id={"wrestler"}
              name={"Fighter"}
              data={fighters}
              value={filterParams}
              setValue={setFilterParams}
              filterDialog={filterDialog}
              setFilterDialog={setFilterDialog}
            /> */}

          </Select>
        </div>















        <img src={ChangeArrows} alt="" />


        <div className="text-[#D8D8D8]">
          <p className="flex gap-1">Country <img src={Earth} alt="" width={20} /> </p>


          <Select >
            <SelectTrigger className="w-[180px]  bg-[#0F1322] border border-[#373A45] rounded">
              <SelectValue placeholder={`${data[1].country.name} ${data[1].country.flag} `} />
            </SelectTrigger>

            <SelectContent className="bg-[#0F1322] text-[#D8D8D8]">
              <SelectGroup className="">
                {data.map((item, index) => (
                  <div key={index}>
                    <SelectItem value={item.country.name}>{item.country.name} {item.country.flag}</SelectItem>
                  </div>
                ))}

              </SelectGroup>
            </SelectContent>
          </Select>


          <p>Opponents</p>
          <Select >
            <SelectTrigger className="w-[180px]  bg-[#0F1322] border border-[#373A45] rounded">
              <SelectValue placeholder={data[1].opponents[1].name} />
            </SelectTrigger>

            <SelectContent className="bg-[#0F1322] text-[#D8D8D8]">
              <SelectGroup className="">
                {data[1].opponents.map((item, index) => (
                  <div key={index}>
                    <SelectItem value={item.name}>{item.name}</SelectItem>
                  </div>
                ))}

              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

      </div>

      <div className="mt-3  ">
        <Button type="submit" className="bg-[#374677] rounded text-lg p-7 font-semibold" >Predict match result</Button>
      </div>

      <div className="text-[#D8D8D8] text-center mt-10 text-2xl">
        <p>Predicted Winner:  <span className="text-[#28F449] ml-10">Amirbek Sultanov</span></p>
        <p className="my-3">Probabilty:  <span className="text-[#289FF4] text-[40px] ml-20">72%</span></p>
        <p>Point difference:  <span className="text-[#CB700E] ml-9">5</span></p>
      </div>

    </div>
  );
}


// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
// import Link from "next/link"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
