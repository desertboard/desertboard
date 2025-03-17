import Image from 'next/image';
interface UspProps {
  uspTitle: string;
  uspDesc: string;
  order: string;
  mainImg: string;
  uspIcon: string;
  onMouseEnter?: () => void;
}
const formatText = (text: string) => {
  return text.replace(/®/g, "<sup>®</sup>");
};
const UspItem = ({ uspTitle, order, mainImg, uspDesc, uspIcon, onMouseEnter }: UspProps) => {
    return (
      <div className={`usp-item usp-${order} relative overflow-hidden hover:pb-7 group`} onMouseEnter={onMouseEnter}>
        <div className="usp-item__bg absolute inset-0 overflow-hidden">
          <Image src={mainImg} alt="usp" className="w-full h-full object-cover" fill></Image>
        </div>
        <div className="usp-item__i absolute top-5 left-5 xl:top-10 xl:left-10 z-20">
          <Image src={uspIcon} alt="usp" className="" width={40} height={40}></Image>
        </div>
        {/* <h3 className="xxl:text-font28 leading-[1.3] nuber-next-bold absolute bottom-[25px] z-[1]  px-4 xxl:px-8 intitle">{uspTitle}</h3> */}
        <div className="usp-item__content relative z-10 px-4 xxl:px-8">
          <div className='usp-item__desc pt-4 xxl:pt-7'>
          <h3 className="xxl:text-font28 leading-[1.3] nuber-next-bold    delay-200 group-hover:translate-y-[10px] transition-all duration-500 ease-linear">{uspTitle}</h3>
          <p className="xxl:text-font20 leading-[1.3] pt-4 xxl:pt-7 delay-300 translate-y-[-10px] group-hover:translate-y-[3px] transition-all duration-500 ease-linear  helvetica" dangerouslySetInnerHTML={{ __html: formatText(uspDesc) }}
            />
            </div>

        </div>
      </div>
    );
}

export default UspItem;
