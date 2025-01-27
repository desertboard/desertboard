import PageBanner from "../components/Common/PageBanner";
// import Banner from "../components/Banner/Hero";
// Image imports
import bannerImg from "@/public/assets/images/sectors/abt-bnr.jpg";
import Arrow from "@/public/assets/brdcrbs.svg";
// import SecondSec from "../components/Common/Second-sec";

export default function Home() {
  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
  ];
  return (
    <>
      <PageBanner
        bannerSrc={bannerImg} // Corrected image import here
        arrowSrc={Arrow}
        desc="Upcycling annually regenerated palm biomass into sustainable building solutions "
        title="About DesertBoard"
        breadcrumbs={breadcrumbs}
        bnrHeight="90dvh"
      />
      {/* <SecondSec
        bgimgSrc={secbgImg}
        title="About DesertBoard"
        subtitle="Upcycling annually regenerated palm biomass into sustainable building solutions "
        imageSrc={secImg} // Updated for consistency, or use a different image here if necessary
      /> */}
    </>
  );
}
