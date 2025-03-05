import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/public/assets/images/assets";
import Link from "next/link";
import useSWR from "swr";

const ApplicationSelector = ({
  activeApplications,
  sectorName,
  page
}: {
  activeApplications: {
    title: string;
    image: string;
    product: string;
  }[];
  sectorName: string;
  page?: string;
}) => {
  const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json());

  const { data: productData } = useSWR('/api/admin/products', fetcher);

  const [productImage, setProductImage] = useState(null);

  const handleProductImageChange = (productName: string) => {
    const product = productData && productData.data.find((item: { title: string }) => item.title === productName);
    setProductImage(product?.images[0]);
  };

  const formatText = (text: string) => {
    if (!text) {
      return;
    }
    return text.replace(/®/g, "<sup>®</sup>");
  };



  return (
    <>
      <div className="border-b-[2px] pb-8 border-[#1515151A]">
        <h3 className="nuber-next-heavy text-font28 text-Darkgreen leading-[1]">
          {page !== "sectors" && sectorName ? (
            <>
              {sectorName} is suitable for <span className="text-orange">:</span>
            </>
          ) : (
            <>
              Select Application <span className="text-orange">:</span>
            </>
          )}
        </h3>
      </div>

      <div className="grid  lg:gap-10 gap-8 grid-cols-1 sm:grid-cols-2 xxl:grid-cols-3">
        {activeApplications && activeApplications.map((application, index) => (
          <div className="flex flex-col gap-3 lg:gap-5" key={index}>
            <div className="relative  h-[350px] md:h-[400px] lg:h-[450px] w-full group">
              <figure className="relative h-[100%] md:h-full w-full">
                <Image
                  className="w-full object-cover h-full"
                  src={application.image}
                  width={800}
                  height={500}
                  alt=""
                />
              </figure>
              <div
                className="absolute left-0 top-0 w-full h-full bg-Darkgreen px-4 md:px-8 lg:px-6 xl:px-10 xxl:px-6  3xl:px-10 py-3 md:py-6 lg:py-10
                opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                transition-all duration-500 ease-in-out flex flex-col justify-between"
                onMouseEnter={() => handleProductImageChange(application.product)}
              >
                <div>
                <p className="texthelvetica20 text-white opacity-75 mb-2">
                  Product Used:
                </p>

                <p className="  helvetica-bold text-font28 text-white" dangerouslySetInnerHTML={{ __html: formatText(application.product) || "" }}>
                </p>
                </div>

                <Image src={productImage ?? assets.bghr} className="  h-[150px]" alt="" width={300} height={50} />

                <Link
                  href={page === "product" ? `/product-details/${application.product}` : `/applications/${application.product}?application=${encodeURIComponent(application.title)}&sector=${encodeURIComponent(sectorName?.replace(/\s+/g, "-"))}`}
                  className="nuber-next-heavy flex gap-2 max-w-fit w-[250px]
                                            group-hover:w-full transition-all duration-300
                                            text-[14px] md:text-font16 leading-[1.5] rmbtn pb-2"
                >
                  {page === "product" ? `Discover ${application.product}` : "Read More"}
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
              <h4 className="text-[18px] md:text-font20 nuber-next-bold">
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
