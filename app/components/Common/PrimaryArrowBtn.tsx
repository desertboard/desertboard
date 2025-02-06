import Link from "next/link";

interface BtnProps {
    btntitle:string,
    iconClr?:string,
    btnLink:string,
}

const PrimaryArrowBtn:React.FC<BtnProps> = ({btntitle, iconClr,btnLink}) => {
    return (
      <Link className="text-[#FF671F] w-fit pb-1 flex items-center justify-between border-[#FF671F] border-b-[2px] text-font18 font-bold group font-nuber-next" href={btnLink}>
        {btntitle}
        <span className="ml-2">
          <svg width="11" height="16" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 ease-in-out group-hover:translate-x-1">
            <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke={iconClr ? iconClr : "#FF671F"} strokeWidth="3" strokeLinecap="round"></path>
          </svg>
        </span>
      </Link>
    );
}
 
export default PrimaryArrowBtn;