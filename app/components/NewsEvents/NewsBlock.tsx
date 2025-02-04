import LightSectionContainer from "../Common/LightSectionContainer";
import Image from "next/image";
import "@/app/components/NewsEvents/newsblock.scss";
import tagIcon from "@/public/assets/images/News/pin.svg";
import PrimaryArrowBtn from "../Common/PrimaryArrowBtn";
import Link from "next/link";


interface NewsEvent {
  id: number;
  imageSrc: string;
  date: string;
  title: string;
  desc: string;
  categories: string[];
  readMoreLink: string;
}

interface NewsEventsProps {
  newsEvent: NewsEvent[];
}



const NewsBlock = ({newsEvent}:NewsEventsProps) => {
   if (!newsEvent || newsEvent.length === 0) {
     return <p>No news available at the moment.</p>;
   }
  return (
    <>
      <LightSectionContainer>
        <div className="container">
          <div className="flex justify-between items-center relative z-50">
            <h2 className="text-font48 heavydark mb-2 xl:mb-10">
              News Events<span className="text-[#FF671F] leading-[1]">.</span>
            </h2>
            <PrimaryArrowBtn btntitle={"View All News"} btnLink="news-and-events-listing" />
          </div>
          <div className="news-crd__wrapper">
            {newsEvent.map((news, index) => (
              <div key={news.id} className={`news-crd ${index === 0 ? "news-crd__big relative" : "news-crd__small"}`}>
                {index === 0 ? (
                  // Large Featured News Card
                  <>
                    <Image src={news.imageSrc} className="w-full h-full absolute top-0 left-0 -z-10" alt="news" fill />
                    <div className="news-crd__content bg-[#fbf5f0] font-helvetica p-6">
                      <h4 className="text-black opacity-75 leading-normal mb-3 uppercase font-bold">{news.date}</h4>
                      <h3 className="text-font28 text-primary font-bold leading-[1.3] mb-2 lg:mb-5">{news.title}</h3>
                      <p className="text-font16 xxxl:text-font20 leading-[1.3] text-black mb-5">{news.desc}</p>
                      <div className="flex flex-wrap gap-1 mb-6">
                        <Image src={tagIcon} width={20} height={20} alt="categories" />
                        <ul className="news__category list-none text-black uppercase font-bold text-font14 leading-normal flex gap-3 opacity-75">
                          {news.categories.map((category, index) => (
                            <li key={index}>
                              <Link href="#" className="underline">
                                {category}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <PrimaryArrowBtn btntitle="Read more" btnLink={`article`} />
                    </div>
                  </>
                ) : (
                  // Small News Cards
                  <>
                    <div className="news-crd__head relative">
                      <Image src={news.imageSrc} className="w-full h-full object-cover" alt="news" width={300} height={300} />
                    </div>
                    <div className="news-crd__body">
                      <h4 className="text-black opacity-75 leading-normal mb-3 uppercase font-bold">{news.date}</h4>
                      <h3 className="text-font24 text-primary font-bold leading-[1.3] mb-2 lg:mb-[2rem]">{news.title}</h3>
                      <div className="flex flex-wrap gap-1 mb-6">
                        <Image src={tagIcon} width={20} height={20} alt="categories" />
                        <ul className="news__category list-none text-black uppercase font-bold text-font14 leading-normal flex gap-3 opacity-75">
                          {news.categories.map((category, index) => (
                            <li key={index}>
                              <a href="#" className="underline">
                                {category}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <PrimaryArrowBtn btntitle="Read more" btnLink={`article`} />
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
