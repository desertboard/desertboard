import Image from "next/image";
import Arrow from "@/public/assets/brdcrbs.svg";
import NewsIcon from "@/public/assets/images/News/pin.svg";
import bgImg from "@/public/assets/images/News/bg-2.png";

interface NewsEvent {
  imageSrc: string;
  date: string;
  title: string;
  categories: string;
  readMoreLink: string;
}

interface SecFirstProps {
  newsEvents: NewsEvent[];
}
const SecFirst: React.FC<SecFirstProps> = ({ newsEvents }) => {
  return (
    <>
      <section className="bg-[#E3DED9] py-[41px]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Left Group: Filter, Type, Sector */}
            <div className="flex items-center space-x-6 gap-[50px]">
              {/* Filter Text */}
              <span className="text-[28px] font-bold">
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
                <svg
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
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
                <svg
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="relative flex items-center border-b-[2px] border-[#002D28]  pb-2">
              <svg
                className="w-5 h-5 text-gray-600 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 17a6 6 0 100-12 6 6 0 000 12zm0 0l6 6"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent focus:outline-none text-[#151515BF] text-[20px] "
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-[80px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg.src})` }}>
        <div className="container mx-auto news-events">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px]">
            {newsEvents.map((event, index) => (
              <div key={index} className="col-4 mb-[40px]">
                <Image src={event.imageSrc} alt="" width={560} height={350} />

                <p className="text-[#151515BF] text-[14px] mb-[16px] mt-[20px]">
                  {event.date}
                </p>
                <h3 className="text-[24px] font-bold text-[#002D28] max-w-[45ch] overflow-hidden text-overflow-ellipsis display-webkit-box webkit-line-clamp-2 webkit-box-orient-vertical">
                  {event.title}
                </h3>
                <div className="flex items-baseline">
                  <Image src={NewsIcon} alt="" />
                  <p className="pl-2 font-[14px] mt-3">{event.categories}</p>
                </div>
                <button className="text-[#FF671F] py-2.5 mt-10 flex items-center justify-between border-[#FF671F] border-b-[1px] text-[18px] font-bold">
                  Read More
                  <span className="ml-2">
                    <Image src={Arrow} alt="" />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SecFirst;
