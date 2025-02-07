import Image from 'next/image';
import NewsIcon from "@/public/assets/images/News/pin.svg";
import PrimaryArrowBtn from '../Common/PrimaryArrowBtn';

interface ListItemProps {
  listData: {
    id: number;
    type: string;
    imageSrc: string;
    date: string;
    title: string;
    desc: string;
    categories: string[];
    readMoreLink: string;
  };
}
const RelatedItem = ({listData}:ListItemProps) => {
  return (
    <div key={listData.id} className="">
      <div className='h-[180px] md:h-[250px]  lg:h-[350px]'>
        <figure className=" relative  h-full md:h-full  w-full  ">
            <Image className="w-full   object-cover h-full" src={listData.imageSrc} width={300} height={350}  alt="" />
         </figure>
     </div>
      <p className="text-[#151515BF] text-[14px] uppercase font-bold nuber-next-heavy pt-5 pb-0 md:pb-4">{listData.date}</p>
      <h3 className="text-[24px] font-bold nuber-next-heavy text-[#002D28] max-w-[45ch] overflow-hidden text-ellipsis display-webkit-box line-clamp-2 webkit-box-orient-vertical">{listData.title}</h3>
      <div className='flex flex-col gap-5 md:gap-8'>
        <div className="flex items-baseline gap-2 pt-4 ">
          <Image src={NewsIcon} alt=""  />
          {
            <ul className="news__category list-none text-black uppercase font-bold text-font14 leading-normal flex gap-3 opacity-75">
              {listData.categories.map((category, index) => (
                <li key={index}>
                  <a href="#" className="underline">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          }
        </div>
        <PrimaryArrowBtn btntitle={"Read More"} btnLink={`article`}></PrimaryArrowBtn>
      </div>
    </div>
  );
};

export default RelatedItem;
