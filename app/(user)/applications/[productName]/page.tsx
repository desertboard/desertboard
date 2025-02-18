"use client";

import SectionTwo from "../../../components/Applications/SectionTwo";
import SectionThree from "../../../components/Applications/SectionThree";
import SectionFive from "../../../components/Applications/SectionFive";
import PageBanner from "../../../components/Common/PageBanner";
import SectionFour from "../../../components/Applications/SectionFour";

// Image imports
import { assets } from "@/public/assets/images/assets";
import Arrow from "@/public/assets/brdcrbs.svg";
import { relslideses } from "../../../components/Applications/data";
import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";
// import { IndiSectorType } from "@/types/IndiSector";
import { IndiApplication } from "@/types/ApplicationType";
import { IndiSectorType } from "@/types/IndiSector";
import Link from "next/link";

const Sectors = () => {
  const { productName } = useParams();
  const searchParams = useSearchParams();
  const application = searchParams.get("application")
    ? decodeURIComponent(searchParams.get("application") || "")
    : "";
  const sector = searchParams.get("sector")
    ? decodeURIComponent(searchParams.get("sector")!)
    : "";
  const [finishes, setFinishes] = useState<string[]>([]);

  console.log("secotr", sector.replace(/-/g, " "));

  console.log("applic", application);

  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());

  const {
    data,
  }: { data: IndiApplication; error: Error | undefined; isLoading: boolean } =
    useSWR(`/api/admin/products?productName=${productName}`, fetcher);
  const {
    data: sectorData,
  }: { data: IndiSectorType; error: Error | undefined; isLoading: boolean } =
    useSWR(
      sector &&
        `/api/admin/sector/byid?sector=${encodeURIComponent(
          sector?.replace(/-/g, " ")
        )}`,
      fetcher
    );
  // const {data:relatedApps}:{data:RelatedApps} = useSWR(`/api/admin/sector?product=${productName}`, fetcher)

  const [relatedApps, setRelatedApps] = useState<
    {
      title: string;
      description: string;
      image: string;
      product: string;
      _id: string;
      bannerImage: string;
      gallery: string[];
      shortDescription: string;
    }[]
  >([]);
  useEffect(() => {
    if (data?.data?.finishes) {
      setFinishes(
        data.data.finishes.map((item: { name: string }) => item.name)
      );
    }
  }, [data]);

  const { data: finishesData } = useSWR(
    finishes.length > 0
      ? `/api/admin/finish?finishes=${encodeURIComponent(finishes.join(","))}`
      : null,
    fetcher
  );

  useEffect(() => {
    console.log("data", sectorData && sectorData.data);
    setRelatedApps(
      sectorData && sectorData.data && sectorData.data.applications
    );
  }, [sectorData]);

  useEffect(() => {
    console.log("data data", data);
  }, [data]);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Sectors", href: "/sectors" },
    { label: `${sector.replace(/-/g, " ")}`, href: "#" },
    { label: `${application}`, href: "" },
  ];

  return (
    <>
      <PageBanner
        bannerSrc={
          sectorData?.data?.applications.find(
            (item) => item.title === application
          )?.bannerImage || assets.appbanner
        } // Corrected image import here
        arrowSrc={Arrow}
        desc=""
        title={application || ""}
        breadcrumbs={breadcrumbs}
        bnrHeight="60dvh"
      />

      <SectionTwo
        pageName="applications"
        suggested={true}
        data={data}
        sectorData={sectorData}
      />
      <div className="pt-10 md:pt-20 insp-mn relative inspbg"></div>
      <SectionThree data={finishesData} />
      <SectionFour data={data} />
      <SectionFive {...relslideses} relatedApps={relatedApps} />
      <section className="bg-[#FFB549]  relative z-[1]">
        <div className="container flex justify-between m-auto">
          <Link href={"/sectors"}>
            <div className="flex items-center flex-row-reverse gap-3   py-6 md:py-10 group  justify-end">
              <p className="mb-0 nuber-next-bold text-font28    text-white nuber-next-heavy cursor-pointer">
                To Sectors
              </p>
              <div className="transition-all duration-300 group-hover:translate-x-1 rotate-180">
                <svg
                  width="20"
                  height="30"
                  viewBox="0 0 25 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
          <Link href={"/downlods"}>
            <div className="flex items-center gap-3   py-6 md:py-10 group  justify-end">
              <p className="mb-0 nuber-next-bold text-font28    text-white nuber-next-heavy cursor-pointer">
                To Downloads
              </p>
              <div className="transition-all duration-300 group-hover:translate-x-1">
                <svg
                  width="20"
                  height="30"
                  viewBox="0 0 25 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Sectors;
