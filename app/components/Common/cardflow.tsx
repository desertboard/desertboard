import React, { useEffect } from "react";
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
import useSWR from "swr";
import Link from "next/link";
// import parse from 'html-react-parser'
import { SectorType } from "@/types/SectorType";



  const CardFlow: React.FC<FrameworkSectionProps> = () => {

    const fetcher = (...args:Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

    const { data,isLoading }:{data:SectorType,error:Error|undefined,isLoading:boolean} = useSWR('/api/admin/sector', fetcher)

    useEffect(()=>{
      console.log(data && data.data)

    },[data])

    const formatText = (text: string) => {
      return text.replace(/®/g, "<sup>®</sup>");
    };

    if(isLoading){
      return null
    }

  return (
    <motion.div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-10`} initial={{ opacity: 0, y: -30 }}
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
      {data && data.data &&  data.data.map((framework) => (
        <div className="relative group bg-gray-800 csmn overflow-hidden sectorcrd" key={framework._id}>
          <Image src={framework.image} alt={framework.title} width={800} height={400} className="w-full h-[340px] lg:h-[450px] xxl:h-[492px] 3xl:h-[552px] object-cover opacity-80 group-hover:opacity-100 transition-all duration-300"/>
          <div className="absolute inset-0 sectorcrd-overlay transition-all duration-500 ease-in-out"></div>
          <div className="absolute inset-0 sectorcrd-overlaygreen transition-all duration-500 ease-in-out "></div>
          <div className="absolute top-0 text-white w-full h-full transition-all duration-500 ease-in-out p-5 lg:p-8 ">
            <div className="w-full">
              <Image src={framework.icon} alt="icn1" className="" width={34} height={34}/>
            </div>
            <hr className="opacity-10 border-t-2 mt-4 transition-all duration-500 delay-100 ease-in-out group-hover:mt-7" />
            <h3 className="opacity-[90%] text-font28 font-[400] leading-[1.3] transition-all duration-500 delay-100 mt-4 group-hover:mt-7 nuber-next-bold" >{framework.title}</h3>
            <p className="mt-5  lg:opacity-0 group-hover:opacity-75 w-[250px] group-hover:w-full transition-opacity duration-500  delay-100 text-font20 leading-[1.5]" dangerouslySetInnerHTML={{ __html: formatText(framework.shortDescription) }} />
            <Link href={`/sector-details/${framework.title}`} className="relative nuber-next-heavy flex gap-2 max-w-fit top-3 lg:opacity-0 group-hover:opacity-100 w-[250px]
            group-hover:w-full transition-opacity duration-300 text-[14px] md:text-font18   leading-[1.5] rmbtn pb-2 ">
              Read More <Image src={readarrow} alt="icn1" className="transition-all duration-300 relative top-[2px]" width={11} height={16} />
            </Link>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default CardFlow;
