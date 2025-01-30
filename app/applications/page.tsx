import SectionTwo from "../components/Applications/SectionTwo";
import SectionThree from "../components/Applications/SectionThree";
import PageBanner from "../components/Common/PageBanner";
import Downloads from "../components/Common/Downloads";


// Image imports
import bannerImg from "@/public/assets/images/sectors/banner.png";
import Arrow from "@/public/assets/brdcrbs.svg";



const Sectors = () => {
  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "Sectors", href: "#" },
    { label: "Engineering & Construction", href: "#" },
    { label: "Façade Cladding", href: "#" },
  ];

  return (
    <>
       <PageBanner
        bannerSrc={bannerImg} // Corrected image import here
        arrowSrc={Arrow}
        desc=""
        title="Façade Cladding."
        breadcrumbs={breadcrumbs}
        bnrHeight="60dvh"
      />
      <SectionTwo />
      <SectionThree />
      <Downloads />
    </>
  );
};

export default Sectors;
