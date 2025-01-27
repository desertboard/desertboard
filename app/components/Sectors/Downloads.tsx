import Arrow from "@/public/assets/brdcrbs.svg";
import Image from "next/image";
const Downloads = () => {
  return (
    <>
      <section className="bg-[#FFB549] py-[40px] ">
        <div className="container mx-auto ">
          <a className="text-[28px] text-white flex items-center justify-end font-bold">
            To Downloads
            <span className="ml-4 filter invert  brightness-0">
              <Image src={Arrow} alt="" />
            </span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Downloads;
