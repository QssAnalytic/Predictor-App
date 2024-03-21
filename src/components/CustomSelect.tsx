import Earth from '/icons/earth.svg'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, } from "@/common/components/ui/select"
import { CustomSelectProps } from '@/common/types';

const CustomSelect: React.FC<CustomSelectProps> = ({ title, options, placeholder, value, onChange, name }) => {
    return (
        <div className="text-[#D8D8D8] ">
            <div>
                <p className="flex gap-1 mb-2 mt-4 ">{title} <img src={Earth} alt="" width={20} /> </p>
                <Select name={name} onValueChange={onChange} value={value}>
                    <SelectTrigger className="bg-[#0F1322]">
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0F1322] text-white">
                        <SelectGroup className="cursor-pointer">
                            {options?.map((item, index: number) => (
                                <div key={index}>
                                    <SelectItem value={item.data} className="cursor-pointer" >{item.data}</SelectItem>
                                </div>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default CustomSelect;
