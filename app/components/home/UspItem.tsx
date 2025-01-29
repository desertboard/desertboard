import Image from 'next/image';
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
        <div className="usp-item__i absolute top-5 left-5 xl:top-10 xl:left-10 z-20">
          <Image src={uspIcon} alt="usp" className=""></Image>
        </div>

        <div className="usp-item__content relative z-10 xxl:px-8">
          <h3 className="xxl:text-font28 leading-[1.3] nuber-next-bold">{uspTitle}</h3>
          <p className="xxl:text-font20 leading-[1.3] usp-item__desc pt-2 xxl:pt-7 helvetica">{uspDesc}</p>

        </div>
      </div>
    );
}

export default UspItem;
