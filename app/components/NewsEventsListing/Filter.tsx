"use client";
import Image from "next/image";
import { Listbox } from "@headlessui/react";
import SearchIcon from "@/public/assets/images/icons/search.svg";
import { Fragment, useState } from "react";
const types = [
  { id: 1, name: "Type" },
  { id: 2, name: "Type 1" },
  { id: 3, name: "Type 2" },
  { id: 4, name: "Type 3" },
];
const sectors = [
  { id: 1, name: "Sector" },
  { id: 2, name: "Sector 1" },
  { id: 3, name: "Sector 2" },
  { id: 4, name: "Sector 3" },
];
const Filter = () => {
  const [typeSelected, setTypeSelected] = useState(types[0]);
  const [sectorSelected, setSectorSelected] = useState(sectors[0])
  return (
    <section className="bg-grayE3D py-[41px]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Left Group: Filter, Type, Sector */}
          <div className="flex flex-wrap w-full lg:w-auto items-center lg:space-x-6 gap-4 lg:gap-[50px]">
            {/* Filter Text */}
            <span className="text-[28px] font-bold text-primary">
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
                <Listbox.Button className="appearance-none bg-transparent flex border-b-[2px] border-[#002D28] outline-none rounded-none text-font20 text-black opacity-75 w-full lg:w-52 helvetica">
                  {typeSelected.name}
                  <svg className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
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

            <div className="relative w-full lg:w-auto">
              <Listbox value={sectorSelected} onChange={setSectorSelected}>
                <Listbox.Button className="appearance-none bg-transparent flex border-b-[2px] border-[#002D28] outline-none rounded-none text-font20 text-black opacity-75 w-full lg:w-52 helvetica">
                  {sectorSelected.name}
                  <svg className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
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
            </div>

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

          <div className="relative flex gap-3 items-center border-b-[2px] border-[#002D28]  pb-2 w-full  md:w-auto">
            <Image src={SearchIcon} alt="" width={20} height={20}></Image>
            <input type="text" placeholder="Search" className="bg-transparent focus:outline-none text-[#151515BF] text-[20px] " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
