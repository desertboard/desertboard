"use client";
import Image from "next/image";
import { Listbox } from "@headlessui/react";
import SearchIcon from "@/public/assets/images/icons/search.svg";
import { Dispatch, Fragment, SetStateAction } from "react";


const Filter = ({typeSelected,setTypeSelected,types,/* setSectorSelected,sectorSelected,sectors */setSearchItem,searchItem}:{
  typeSelected:{ id: number; name: string; };
  setTypeSelected:Dispatch<SetStateAction<{ id: number; name: string; }>>
  types:{ id: number; name: string; }[]
  setSectorSelected:Dispatch<SetStateAction<{ id: number; name: string; }>>
  sectorSelected:{ id: number; name: string; };
  sectors:{ id: number; name: string; }[]
  setSearchItem:Dispatch<SetStateAction<string>>;
  searchItem:string;
}) => {

  // const [typeSelected, setTypeSelected] = useState(types[0]);
  // const [sectorSelected, setSectorSelected] = useState(sectors[0])
  return (
    <section className="bg-grayE3D py-[41px]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Left Group: Filter, Type, Sector */}
          <div className="flex flex-wrap w-full lg:w-auto items-center lg:space-x-6 gap-4 lg:gap-[50px]">
            {/* Filter Text */}
            <span className="text-[28px] font-bold text-Darkgreen">
              Filter<span className="text-[#FF671F]">.</span>
            </span>

            {/* Type Dropdown */}
            {/* <div className="relative w-full lg:w-auto">
              <select id="country" name="country" autoComplete="country-name" className="appearance-none bg-transparent py-1.5 pr-8 pl-3  border-b-[2px] border-[#002D28] outline-none rounded-none text-font20 text-black opacity-75 w-full lg:w-52 helvetica ">
                <option className="text-font20 text-black opacity-75">Type </option>
                <option className="text-font20 text-black opacity-75">Type 1</option>
                <option className="text-font20 text-black opacity-75">Type 2</option>
                <option className="text-font20 text-black opacity-75">Type 3</option>
              </select>
              <svg className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div> */}

            <div className="relative w-full lg:w-auto">
              <Listbox as={Fragment} value={typeSelected} onChange={setTypeSelected}>
                <Listbox.Button className="appearance-none bg-transparent flex border-b-[2px] border-[#002D28] outline-none rounded-none text-font20 text-black opacity-75 w-full lg:w-52 font-helvetica font-[500] pb-3 pl-3">
                  {typeSelected.name}
                  {/* <svg className="absolute right-0 top-5 transform -translate-y-1/2 w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg> */}
                  <svg className="absolute right-3 top-5 transform -translate-y-1/2 w-4 h-4 text-gray-600" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke="#151515" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 overflow-auto">
                  {types.map((type) => (
                    <Listbox.Option key={type.id} value={type} className={({ active }) => `py-2 px-3 cursor-pointer text-font20 text-black opacity-75 ${active ? "bg-gray-100" : ""}`}>
                      {type.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>

          {/*   <div className="relative w-full lg:w-auto">
              <Listbox value={sectorSelected} onChange={setSectorSelected}>
                <Listbox.Button className="appearance-none bg-transparent flex border-b-[2px] border-[#002D28] outline-none rounded-none text-font20 text-black opacity-75 w-full lg:w-52 helvetica-500 pb-3 pl-3">
                  {sectorSelected.name}
                  <svg className="absolute right-3 top-5 transform -translate-y-1/2 w-4 h-4 text-gray-600" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke="#151515" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 overflow-auto">
                  {sectors.map((sector) => (
                    <Listbox.Option key={sector.id} value={sector} className={({ active }) => `py-2 px-3 cursor-pointer text-font20 text-black opacity-75 ${active ? "bg-gray-100" : ""}`}>
                      {sector.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div> */}

            {/* <div className="relative w-full lg:w-auto">
              <select id="country" name="country" autoComplete="country-name" className="appearance-none bg-transparent py-1.5 pr-8 pl-3 border-b-[2px] border-[#002D28] outline-none rounded-none  text-font20 text-black opacity-75 w-full lg:w-52 helvetica leading-[1.3]">
                <option className="text-font20 text-black opacity-75">Sector </option>
                <option className="text-font20 text-black opacity-75">Sector 1</option>
                <option className="text-font20 text-black opacity-75">Sector 2</option>
                <option className="text-font20 text-black opacity-75">Sector 3</option>
              </select>
              <svg className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div> */}
          </div>

          <div className="relative flex gap-3 items-center border-b-[2px] border-[#002D28]  pb-2 w-full  md:w-auto xxl:w-[25%] px-3">
            <Image src={SearchIcon} alt="" width={20} height={20}></Image>
            <input type="text" value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} placeholder="Search" className="bg-transparent focus:outline-none font-helvetica placeholder-lightBlack placeholder-opacity-50 placeholder:font-helvetica placeholder:font-[500] text-[20px] " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
