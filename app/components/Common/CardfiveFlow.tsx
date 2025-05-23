import React from "react";
import Image from "next/image";
import '@/app/components/Common/sectorcrd.scss';



import {motion} from "framer-motion"
import { Sustainability } from "@/types/Sustainability";

const formatText = (text: string) => {
  return text.replace(/®/g, "<sup>®</sup>");
};

  const CardFiveFlow = ({  data }:{
    data:Sustainability
  }) => {
  return (
    <motion.div className={`grid grid-cols-1 sm:grid-cols-2 xxl:grid-cols-5 gap-5 lg:gap-10 mngd-five`} initial={{ opacity: 0, y: -30 }}
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
      {data && data.sustainability && data.sustainability.roles.map((framework) => (
        <div className="relative group bg-gray-800 csmn overflow-hidden sectorcrd" key={framework._id}>
          {framework.image !== "" && <Image src={framework.image} alt={framework.imageAlt} className="w-full h-[300px] md:h-[340px] xxl:h-[400px] 3xl:h-[460px] object-cover opacity-80 lg:group-hover:opacity-100 transition-all duration-300" width={300} height={400}/>}
          <div className="absolute inset-0 sectorcrd-overlay transition-all duration-500 ease-in-out"></div>
          <div className="absolute inset-0 sectorcrd-overlaygreen transition-all duration-500 ease-in-out "></div>
          <div className="gpsp absolute top-0 text-white w-full h-full transition-all duration-500 ease-in-out p-5 lg:p-8 ">
            <div className="w-full ">
              {framework.logo !=="" && <Image src={framework.logo} alt={framework.logoAlt} className="h-[40px] w-auto" width={100} height={100}/>}
            </div>
            <hr className="opacity-10 border-t-2 mt-4 transition-all duration-500 delay-100 ease-in-out hcustm   lg:group-hover:mt-7" />
            <h3 className="opacity-[90%] nuber-next-heavy mtsts text-font20   leading-[1.3] transition-all duration-500 delay-100 mt-4 lg:group-hover:mt-7 nuber-next-bold" dangerouslySetInnerHTML={{ __html: formatText(framework.title) }}></h3>
            <p className="mt-5 w-full lg:opacity-0 mtsts lg:group-hover:opacity-75   lg:group-hover:w-full transition-opacity duration-500  delay-100 text-font18 leading-[1.5]" dangerouslySetInnerHTML={{ __html: formatText(framework.description) }} />
           {/*  <a href="#" className="relative nuber-next-heavy flex gap-2 max-w-fit top-3 lg:opacity-0 group-hover:opacity-100 w-[250px]
            group-hover:w-full transition-opacity duration-300 text-[14px] md:text-font16   leading-[1.5] rmbtn pb-2 ">
              Read More <Image src={readarrow} alt="icn1" className="transition-all duration-300 relative top-[2px]" width={11} height={16} />
            </a> */}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default CardFiveFlow;
