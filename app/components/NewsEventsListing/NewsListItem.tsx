import Image from 'next/image';
import NewsIcon from "@/public/assets/images/News/pin.svg";
import moment from 'moment';
import { useEffect } from 'react';
import { assets } from '@/public/assets/images/assets';
import Link from 'next/link';
import { formatLinkForArticle } from '@/app/helpers/formatLinks';



// const ListItem = ({ listData }: ListItemProps) => {
  const ListItem = ({listData}:{
    listData:{
      date: string;
      description: string;
      images: string[];
      tags: string[];
      title: string;
      _id: string;
  }
  }) => {

    useEffect(()=>{
      console.log(listData)
    },[listData])


  return (
    <div key={listData.date} className="news-list__item flex flex-col">
      {/* <Image src={listData.images} alt="" className="news-list__img  flex w-full h-full object-cover" width={300} height={350} quality={100} priority unoptimized /> */}

      {listData ? (
  <Image
    src={listData.images?.[0] ? listData.images[0] : assets.articlesec1}
    alt=""
    className="news-list__img flex w-full h-full object-cover"
    width={300}
    height={350}
    quality={100}
    priority
    unoptimized
  />
) : null}

                <p className="text-[#151515BF] text-[14px] uppercase font-bold nuber-next-heavy">{moment(listData.date).format('LL')}</p>
      <h3 className="text-font24 leading-[1.3] font-bold nuber-next-heavy text-[#002D28] max-w-[45ch] overflow-hidden text-ellipsis display-webkit-box line-clamp-2 webkit-box-orient-vertical">{listData.title}</h3>
      <div className="flex flex-col gap-5 xl:gap-8">
        <div className="flex items-baseline gap-2">
          <Image src={NewsIcon} alt="" />
          {
            <ul className="news__category list-none text-black uppercase font-bold text-font14 leading-normal flex gap-2 lg:gap-3 gap-y-0 opacity-75 flex-wrap">
              {listData && listData.tags && listData.tags.map((category, index) => (
                <li key={index}>
                  <a href="#" className="underline">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          }
        </div>



      </div>
      <Link className="text-[#FF671F] w-fit pb-1 flex items-center justify-between border-[#FF671F] border-b-[2px] text-font18 font-bold group font-nuber-next mt-auto" href={`/article/${formatLinkForArticle(listData.title)}`}>
        Read More
        <span className="ml-2">
          <svg width="11" height="16" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 ease-in-out group-hover:translate-x-1">
            <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke={"#FF671F"} strokeWidth="3" strokeLinecap="round"></path>
          </svg>
        </span>
      </Link>
    </div>
  );
};

export default ListItem;
