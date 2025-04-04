import Image from 'next/image';
import { StaticImageData } from 'next/image';
interface UspProps {
  uspTitle: string;
  uspDesc: string;
  order: string;
  mainImg: StaticImageData;
  uspIcon: StaticImageData;
}

const Usp = ({ uspTitle,order,mainImg,uspDesc,uspIcon }: UspProps) => {
    return (
      <div className={`usp usp-${order} relative overflow-hidden pb-7`}>
        <div className="usp-bg absolute inset-0 overflow-hidden">
          <Image src={mainImg} alt="usp" className="w-full h-full object-cover"></Image>
        </div>
        <div className="usp-i absolute top-10 left-10 -z-0">
          <Image src={uspIcon} alt="usp"></Image>
        </div>
        <div className="usp-content relative z-10 px-8">
          <h3 className='text-font28 leading-[1.3] '>{uspTitle}</h3>
          <p className='text-font20 leading-[1.3] usp-desc pt-7'>
           {uspDesc}
          </p>
        </div>
      </div>
    );
}

export default Usp;
