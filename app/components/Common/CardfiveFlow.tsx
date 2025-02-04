import React from "react";
import Image, { StaticImageData } from "next/image";
import '@/app/components/Common/sectorcrd.scss';
import readarrow from "@/public/assets/images/read-arrow.svg";
interface FrameworkItem {
  id: number;
  title: string;
  dec: string;
  link: string;
  image: StaticImageData;
  icon: string;
}

interface FrameworkSectionProps {

  data: FrameworkItem[];
}
import {motion} from "framer-motion"


  const CardFiveFlow: React.FC<FrameworkSectionProps> = ({  data }) => {
  return (
    <motion.div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 lg:gap-10`} initial={{ opacity: 0, y: -30 }}
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={{
      hidden: { opacity: 0, y: -30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.5 },
      },
    }}>
      {data.map((framework) => (
        <div className="relative group bg-gray-800 csmn overflow-hidden sectorcrd" key={framework.id}>
          <Image src={framework.image} alt={framework.title} className="w-full h-[340px] lg:h-[350px] xxl:h-[400px] 3xl:h-[460px] object-cover opacity-80 group-hover:opacity-100 transition-all duration-300" />
          <div className="absolute inset-0 sectorcrd-overlay transition-all duration-500 ease-in-out"></div>
          <div className="absolute inset-0 sectorcrd-overlaygreen transition-all duration-500 ease-in-out "></div>
          <div className="absolute top-0 text-white w-full h-full transition-all duration-500 ease-in-out p-5 lg:p-8 ">
            <div className="w-full ">
              <Image src={framework.icon} alt="icn1" className="" />
            </div>
            <hr className="opacity-10 border-t-2 mt-4 transition-all duration-500 delay-100 ease-in-out group-hover:mt-7" />
            <h3 className="opacity-[90%] nuber-next-heavy text-font20   leading-[1.3] transition-all duration-500 delay-100 mt-4 group-hover:mt-7 nuber-next-bold" dangerouslySetInnerHTML={{ __html: framework.title }}></h3>
            <p className="mt-5 w-full lg:opacity-0 group-hover:opacity-75   group-hover:w-full transition-opacity duration-500  delay-100 text-font18 leading-[1.5]">{framework.dec}</p>
            <a href="#" className="relative nuber-next-heavy flex gap-2 max-w-fit top-3 lg:opacity-0 group-hover:opacity-100 w-[250px]
            group-hover:w-full transition-opacity duration-300 text-[14px] md:text-font16   leading-[1.5] rmbtn pb-2 ">
              Read More <Image src={readarrow} alt="icn1" className="transition-all duration-300 relative top-[2px]" width={11} height={16} />
            </a>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default CardFiveFlow;
