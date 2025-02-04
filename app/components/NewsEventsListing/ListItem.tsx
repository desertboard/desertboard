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
const ListItem = ({listData}:ListItemProps) => {
  return (
    <div key={listData.id} className="news-list__item col-4 mb-[40px]">
      <Image src={listData.imageSrc} alt="" className='flex h-full object-cover' width={560} height={350} />
      <p className="text-[#151515BF] text-[14px]">{listData.date}</p>
      <h3 className="text-[24px] font-bold text-[#002D28] max-w-[45ch] overflow-hidden text-overflow-ellipsis display-webkit-box webkit-line-clamp-2 webkit-box-orient-vertical">{listData.title}</h3>
      <div className='flex flex-col gap-4'>
        <div className="flex items-baseline gap-2">
          <Image src={NewsIcon} alt="" />
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
        <PrimaryArrowBtn btntitle={"Read More"} btnLink={"#"}></PrimaryArrowBtn>
      </div>
    </div>
  );
};

export default ListItem;
