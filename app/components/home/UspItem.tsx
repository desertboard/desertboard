import Image from 'next/image';
import uspi1 from "@/public/assets/images/home/usp-i1.svg";
import { StaticImageData } from 'next/image';
interface UspProps {
  uspTitle: string;
  uspDesc: string;
  order: string;
  mainImg: StaticImageData;
  uspIcon: StaticImageData;
  onMouseEnter?: () => void;
}

const UspItem = ({ uspTitle, order, mainImg, uspDesc, uspIcon, onMouseEnter }: UspProps) => {
    return (
      <div className={`usp-item usp-${order} relative overflow-hidden hover:pb-7`} onMouseEnter={onMouseEnter}>
        <div className="usp-item__bg absolute inset-0 overflow-hidden">
          <Image src={mainImg} alt="usp" className="w-full h-full object-cover"></Image>
        </div>
        <div className="usp-item__i absolute top-10 left-10 z-20">
          <Image src={uspIcon} alt="usp" className=""></Image>
        </div>
        <div className="usp-item__content relative z-10 px-8">
          <h3 className="text-font28 leading-[1.3] ">{uspTitle}</h3>
          <p className="text-font20 leading-[1.3] usp-item__desc pt-7">{uspDesc}</p>
        </div>
      </div>
    );
}

export default UspItem;
