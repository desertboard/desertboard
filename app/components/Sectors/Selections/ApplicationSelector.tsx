import React from "react";
import Image from "next/image";
import { assets } from "@/public/assets/images/assets";
import Link from "next/link";

const ApplicationSelector = ({
  activeApplications,
}: {
  activeApplications: {
    title: string;
    image: string;
    product:string;
  }[];
}) => {
  return (
    <>
      <div className="border-b-[2px] pb-8 border-[#1515151A]">
        <h3 className="nuber-next-heavy text-font28 text-Darkgreen leading-[1]">
          Select Application<span className="text-orange">.</span>
        </h3>
      </div>

      <div className="grid  lg:gap-10 gap-3 grid-cols-1 sm:grid-cols-2 xxl:grid-cols-3">
        {activeApplications && activeApplications.map((application, index) => (
          <div className="flex flex-col gap-3 lg:gap-5" key={index}>
            <div className="relative md:h-[400px] h-[300px] w-full group">
              <figure className=" relative h-[100%] md:h-full  w-full  ">
                <Image
                  className="w-full   object-cover h-full"
                  src={application.image}
                  width={320}
                  height={500}
                  alt=""
                />
              </figure>
              <div className="absolute left-0 top-0 w-full h-full bg-Darkgreen p-4 md:p-10
                opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                transition-all duration-500 ease-in-out
                ">
                <p className="texthelvetica20 text-white opacity-75 mb-2">
                  Product Used:
                </p>

                <p className="pb-3 md:pb-10 helvetica-bold text-font28 text-white">
                  {application.product}
                </p>

                <Image src={assets.tlse} className="pb-3 md:pb-10" alt="" />

                <Link
                  href={`/product-details/${application.product}`}
                  className="nuber-next-heavy flex gap-2 max-w-fit w-[250px]
                                            group-hover:w-full transition-all duration-300
                                            text-[14px] md:text-font16 leading-[1.5] rmbtn pb-2"
                >
                  Read More
                  <Image
                    src={assets.readarrow}
                    alt="icn1"
                    className="transition-all duration-300 relative top-[2px]"
                    width={11}
                    height={16}
                  />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-font20 nuber-next-bold">
                {application.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ApplicationSelector;
