import Image from 'next/image';
import NewsIcon from "@/public/assets/images/News/pin.svg";
import PrimaryArrowBtn from '../Common/PrimaryArrowBtn';


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

  return (
    <div key={listData.date} className="news-list__item">
      {/* <Image src={listData.images} alt="" className="news-list__img  flex w-full h-full object-cover" width={300} height={350} quality={100} priority unoptimized /> */}

                    <Image src={listData.images[0]} alt="" className="news-list__img  flex w-full h-full object-cover" width={300} height={350} quality={100} priority unoptimized />

                <p className="text-[#151515BF] text-[14px] uppercase font-bold nuber-next-heavy">{listData.date}</p>
      <h3 className="text-font24 leading-[1.3] font-bold nuber-next-heavy text-[#002D28] max-w-[45ch] overflow-hidden text-ellipsis display-webkit-box line-clamp-2 webkit-box-orient-vertical">{listData.title}</h3>
      <div className="flex flex-col gap-5 xl:gap-8">
        <div className="flex items-baseline gap-2">
          <Image src={NewsIcon} alt="" />
          {
            <ul className="news__category list-none text-black uppercase font-bold text-font14 leading-normal flex gap-3 opacity-75 flex-wrap">
              {listData.tags.map((category, index) => (
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

export default ListItem;
