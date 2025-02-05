import Image from 'next/image';
import SearchIcon from '@/public/assets/images/icons/search.svg';
const Filter = () => {
    return (
      <section className="bg-grayE3D py-[41px]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Left Group: Filter, Type, Sector */}
            <div className="flex flex-wrap items-center lg:space-x-6 gap-4 lg:gap-[50px]">
              {/* Filter Text */}
              <span className="text-[28px] font-bold text-primary">
                Filter<span className="text-[#FF671F]">.</span>
              </span>

              {/* Type Dropdown */}
              <div className="relative">
                <select className="appearance-none border-b-[2px] border-[#002D28] bg-transparent text-[#151515BF] text-[20px] focus:outline-none pr-[6rem] pb-2">
                  <option value="" className="bg-white text-black">
                    Type
                  </option>
                  <option value="type1" className="bg-white text-black">
                    Type 1
                  </option>
                  <option value="type2" className="bg-white text-black">
                    Type 2
                  </option>
                </select>
                <svg className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div className="relative">
                <select className="appearance-none border-b-[2px] border-[#002D28] bg-transparent text-[#151515BF] text-[20px] focus:outline-none pr-[6rem] pb-2">
                  <option value="" className="bg-white text-black p-3">
                    Sector
                  </option>
                  <option value="sector1" className="bg-white text-black p-3">
                    Sector 1
                  </option>
                  <option value="sector2" className="bg-white text-black p-3">
                    Sector 2
                  </option>
                </select>
                <svg className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div className="relative flex gap-3 items-center border-b-[2px] border-[#002D28]  pb-2">
              <Image src={SearchIcon} alt="" width={20} height={20}></Image>
              <input type="text" placeholder="Search" className="bg-transparent focus:outline-none text-[#151515BF] text-[20px] " />
            </div>
          </div>
        </div>
      </section>
    );
}
 
export default Filter;