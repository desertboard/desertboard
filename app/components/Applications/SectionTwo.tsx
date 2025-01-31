import React from "react";
import Image from "next/image";
import imgdust from "@/public/assets/images/icons/imgdust.jpg";
import wh1 from "@/public/assets/images/applications/wh1.svg";
import wh2 from "@/public/assets/images/applications/wh2.svg";
import wh3 from "@/public/assets/images/applications/wh3.svg";
import readarrow from "@/public/assets/images/read-arrow.svg";

import SingleSlider from "../Applications/SingleSlider";


const SectionTwo = () => {
  return (
    <>
      <section className="py-10 md:py-20 insp-mn relative inspbg">
        <div className="container m-auto ">
          <div className="lg:flex flex-col lg:flex-row  gap-10 md:gap-10 ">
            <div className="lg:w-1/2 ">
              <div className="flex bg-[#E3DED9] justify-between">
                <div className="flex p-10 ] gap-[32px]">
                  <div className=" ">
                    <p className="texthelvetica20 clr15op75">
                      Product Suggested :
                    </p>
                  </div>
                  <div className="  ">
                    <p className=" helvetica-bold text-font28 leading-[1] text-Darkgreen ">
                      PSB<sup>®</sup> SUPREME
                    </p>
                  </div>
                </div>
                <div className="  ">
                  <Image src={imgdust} alt="" className="h-full" />
                </div>
              </div>
              <div className="py-7 md:py-[60px] ">
                <div>
                  <p className=" helvetica-bold text-font28 leading-[1] text-Darkgreen mb-8">
                    WHY PSB<sup>®</sup> SUPREME?
                  </p>
                </div>
                <div>
                  <div className="flex gap-3 md:gap-[18px] items-start mb-4">
                    <Image src={wh2} alt="" />
                    <p className="texthelvetica20 clr15op75">
                      <span className="texthelvetica20bold opacity-[1] text-black">
                        Superior Moisture Resistance Performance:
                      </span>{" "}
                      PSB<sup>®</sup> Supreme exhibits excellent moisture
                      resistance, with a maximum thickness swelling of 15%. PSB
                      <sup>®</sup> Supreme, when coated properly, results in a
                      thickness swelling of less than 5%.
                    </p>
                  </div>
                  <div className="flex gap-3 md:gap-[18px] items-start mb-4">
                    <Image src={wh3} alt="" />
                    <p className="texthelvetica20 clr15op75">
                      <span className="texthelvetica20bold opacity-[1] text-black">
                        High Modulus of Elasticity and Rupture Strength:
                      </span>{" "}
                      PSB<sup>®</sup> Supreme demonstrates high performance in
                      terms of modulus of elasticity, measuring 3,500 Newtons
                      per square millimeter (N/mm²), and modulus of rupture,
                      ranging from 16 to 22 Newtons per square millimeter
                      (N/mm²).
                    </p>
                  </div>
                  <div className="flex gap-3 md:gap-[18px] items-start ">
                    <Image src={wh1} alt="" />
                    <p className="texthelvetica20 clr15op75">
                      <span className="texthelvetica20bold opacity-[1] text-black">
                        Enhanced Screw Withdrawal Strength and Reusability:
                      </span>{" "}
                      PSB<sup>®</sup> Supreme provides exceptional screw hold
                      capacity compared to other solutions, with edge hold at
                      1,350 Newtons (N) and face hold at 1,650 Newtons (N). PSB
                      <sup>®</sup> Supreme’s mechanical properties allow for
                      repeated use of the same hole without any loss in
                      performance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:p-8 bg-[#E3DED9]">
                <h3 className="nubernext28heavy text-Darkgreen pb-4 md:pb-8">
                  Specifications
                </h3>
                <div className="border-t border-[#15151510] border-dashed pb-4 md:pb-8">
                  <div className="flex justify-between py-2 md:py-5 border-b border-[#15151510] border-dashed">
                    <p className="texthelvetica20 clr15op75">
                      Modulus of rupture{" "}
                    </p>
                    <p className="texthelvetica20 clr15op75">16 – 22 N/mm2</p>
                  </div>
                  <div className="flex justify-between py-2 md:py-5 border-b border-[#15151510] border-dashed">
                    <p className="texthelvetica20 clr15op75">
                      Modulus of elasticity{" "}
                    </p>
                    <p className="texthelvetica20 clr15op75">3,500 N/mm2</p>
                  </div>
                  <div className="flex justify-between py-2 md:py-5 border-b border-[#15151510] border-dashed">
                    <p className="texthelvetica20 clr15op75">
                      Internal Bonding{" "}
                    </p>
                    <p className="texthelvetica20 clr15op75">
                      0.29 – 0.34 N/mm2
                    </p>
                  </div>
                  <div className="flex justify-between py-2 md:py-5 border-b border-[#15151510] border-dashed">
                    <p className="texthelvetica20 clr15op75">
                      Thickness Swelling{" "}
                    </p>
                    <p className="texthelvetica20 clr15op75">5% - 15%</p>
                  </div>
                  <div className="flex justify-between py-2 md:py-5 border-b border-[#15151510] border-dashed">
                    <p className="texthelvetica20 clr15op75">Width </p>
                    <p className="texthelvetica20 clr15op75">
                      1,200 – 1,250 mm
                    </p>
                  </div>
                  <div className="flex justify-between py-2 md:py-5 border-b border-[#15151510] border-dashed">
                    <p className="texthelvetica20 clr15op75">Length </p>
                    <p className="texthelvetica20 clr15op75">
                      1,830 – 3,048 mm
                    </p>
                  </div>
                  <div className="flex justify-between py-2 md:py-5 border-b border-[#15151510] border-dashed">
                    <p className="texthelvetica20 clr15op75">Thickness </p>
                    <p className="texthelvetica20 clr15op75">9 – 44 mm</p>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div className="flex gap-3 items-center group rmbtn pb-3 cursor-pointer">
                    <div>
                      <p className="relative  flex gap-2 max-w-fit transition-opacity duration-300 text-font18  leading-[1.44]  text-font18
                            nuber-next-heavy leading-[1.25] " >
                        Technical Datasheet
                      </p>
                    </div>
                    <Image
                      src={readarrow}
                      alt="icn1"
                      className=" relative top-[2px] transition-all duration-300 group-hover:translate-x-1 "
                    />
                  </div>

                  <div className="flex gap-3 items-center group rmbtn pb-3 cursor-pointer">
                    <div>
                      <p className="relative  flex gap-2 max-w-fit transition-opacity duration-300 text-font18  leading-[1.44]  text-font18
                            nuber-next-heavy leading-[1.25] " >
                        Certificates
                      </p>
                    </div>
                    <Image
                      src={readarrow}
                      alt="icn1"
                      className=" relative top-[2px] transition-all duration-300 group-hover:translate-x-1 "
                    />
                  </div>

                  <div className="flex gap-3 items-center group rmbtn pb-3 cursor-pointer">
                    <div>
                      <p className="relative  flex gap-2 max-w-fit transition-opacity duration-300 text-font18  leading-[1.44]  text-font18
                            nuber-next-heavy leading-[1.25] " >
                        Get InTouch
                      </p>
                    </div>
                    <Image
                      src={readarrow}
                      alt="icn1"
                      className=" relative top-[2px] transition-all duration-300 group-hover:translate-x-1 "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 ">
            <SingleSlider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
