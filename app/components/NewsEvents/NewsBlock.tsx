import LightSectionContainer from "../Common/LightSectionContainer";
import Image from "next/image";
import "@/app/components/NewsEvents/newsblock.scss";
import tagIcon from "@/public/assets/images/News/pin.svg";
import PrimaryArrowBtn from "../Common/PrimaryArrowBtn";
import Link from "next/link";
import parse from 'html-react-parser'



interface NewsEventsProps {

  sectionTitle: string;
  data:{
    date: string;
    description: string;
    images: string[];
    tags: string[];
    title: string;
    _id: string;
    type: string;
}[]

}

const formatText = (text: string) => {
  return text.replace(/®/g, "<sup>®</sup>");
};

const NewsBlock = ({ sectionTitle,data}:NewsEventsProps) => {


   console.log(data && data)
  return (
    <>
      <LightSectionContainer>
        <div className="container">
          <div className="flex justify-between gap-x-4 gap-y-2 flex-wrap items-center relative z-50 mb-5 lg:mb-10">
            <h2 className="text-font48 heavydark min-w-max">
              {sectionTitle}
              <span className="text-[#FF671F] leading-[1]">.</span>
            </h2>
            <PrimaryArrowBtn btntitle={"View All News"} btnLink="news-and-events-listing" />
          </div>
          <div className="news-crd__wrapper">
            {data && data && data.slice(0,3).map((news, index) => (
              <div key={news._id} className={`news-crd overflow-hidden ${index === 0 ? "news-crd__big relative" : "news-crd__small"}`}>
                {index === 0 ? (
                  // Large Featured News Card
                  <>
                    <Image src={news.images[0]} className="w-full h-full absolute top-0 left-0 -z-10 object-cover" alt="news" fill objectFit="cover" />
                    <div className="news-crd__content bg-[#fbf5f0] font-helvetica p-6">
                      <h4 className="text-black text-font14 opacity-75 leading-normal mb-3 uppercase font-bold">{news.date}</h4>
                      {/* <h3 className="text-font20 xl:text-font28 text-Darkgreen font-bold leading-[1.3] mb-2 lg:mb-5 overflow-hidden text-ellipsis display-webkit-box line-clamp-2 webkit-box-orient-vertical" dangerouslySetInnerHTML={{ __html: news.title }}></h3> */}
                      <h3 className="text-font20 xxl:text-font24 text-Darkgreen font-bold leading-[1.3] mb-2 lg:mb-5 overflow-hidden text-ellipsis helvetica display-webkit-box line-clamp-2 webkit-box-orient-vertical" dangerouslySetInnerHTML={{ __html: formatText(news.title)}}></h3>
                      <div className="text-font19 xxl:text-font20 leading-normal text-black opacity-75 mb-5 overflow-hidden text-ellipsis display-webkit-box line-clamp-3 webkit-box-orient-vertical" dangerouslySetInnerHTML={{ __html: formatText(news.description) }}></div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <Image src={tagIcon} width={20} height={20} alt="categories" className="w-[15px] h-[15px] xl:w-[18px] xl:h-[18px]" />
                        <ul className="news__category list-none text-black uppercase font-bold text-font14 leading-normal flex gap-3 opacity-75">
                          {news.tags.map((category, index) => (
                            <li key={index}>
                              <Link href="#" className="underline min-w-max">
                                {category}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <PrimaryArrowBtn btntitle="Read more" btnLink={`/article/${news._id}`} />
                    </div>
                  </>
                ) : (
                  // Small News Cards
                  <>
                    <div className="news-crd__head relative">
                      <Image src={news.images[0]} className="w-full h-full object-cover" alt="news" width={300} height={300} quality={100} priority unoptimized />
                    </div>
                    <div className="news-crd__body pt-2">
                      <h4 className="text-black text-font14 opacity-75 leading-normal mb-3 uppercase font-bold">{news.date}</h4>
                      <h3 className="font20 xxl:text-font24 text-Darkgreen font-helvetica font-bold leading-[1.3] mb-2 lg:mb-3 overflow-hidden text-ellipsis display-webkit-box line-clamp-2 webkit-box-orient-vertical" dangerouslySetInnerHTML={{ __html: formatText(news.title) }}></h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <Image src={tagIcon} width={20} height={20} alt="categories" className="w-[15px] h-[15px] xl:w-[18px] xl:h-[18px]" />
                        <ul className="news__category list-none text-black uppercase font-bold text-font14 leading-normal flex gap-1 xxl:gap-3 opacity-75">
                          {news.tags.map((category, index) => (
                            <li key={index}>
                              <a href="#" className="underline min-w-max">
                                {category}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <PrimaryArrowBtn btntitle="Read more" btnLink={`/article/${news._id}`} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </LightSectionContainer>
    </>
  );
};

export default NewsBlock;
