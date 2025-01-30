import MainDescBOx from "../components/Common/MainDescBox";
import PageBanner from "../components/Common/PageBanner";
import Tabs from "../components/Sectors/Tabs";
import Downloads from "../components/Common/Downloads";

// Image imports
import bannerImg from "@/public/assets/images/sectors/banner.png";
import Arrow from "@/public/assets/brdcrbs.svg";



const Sectors = () => {
  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "Sectors", href: "#" },
    { label: "Engineering & Construction", href: "#" },
  ];

  return (
    <>
       <PageBanner
        bannerSrc={bannerImg} // Corrected image import here
        arrowSrc={Arrow}
        desc=""
        title="Engineering & Construction"
        breadcrumbs={breadcrumbs}
        bnrHeight="60dvh"
      />
      <MainDescBOx
        secTitle="Engineering & Construction."
        subTitle=""
        desc="In the heart of the desert, where towering date palm trees symbolize our heritage, a groundbreaking innovation has emerged: DesertBoard's Palm Strand Board (PSB®), the world’s first engineered palm-based board. "
        desc2=" For centuries, date palm trees have been a vital resource in the Middle East, historically used to construct Barasti houses that provided essential shelter in the harsh desert climate. Inspired by the rich legacy and the vision of the UAE's founding father, Sheikh Zayed bin Sultan Al Nahyan, DesertBoard® successfully produced the
              first engineered board in 2021."
        // mainImg="/assets/images/mn.jpg"
        mainVdo={"../assets/images/home/liftvdo.mp4"}
        vdoPoster="../assets/images/mn.jpg"
      />
      <Tabs />
      <Downloads />
    </>
  );
};

export default Sectors;
