import Banner from "../../components/Banner/Hero";
import SecondSec from "../../components/Common/SecondSec";

// Image imports
import bannerImg from "@/public/assets/images/sectors/banner.png";
import secImg from "@/public/assets/images/sectors/sec1.png";
import secbgImg from "@/public/assets/images/sectors/secbg.png";
import Arrow from "@/public/assets/brdcrbs.svg";
import Tabs from "../../components/Sector-Details/Tabs";
import BeforeFooterTag from "../../components/Common/BeforeFooterTag";

const Sectors = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Sectors", href: "/sectors" },
    { label: "Engineering & Construction", href: "" },
  ];

  return (
    <>
      <Banner
        bannerSrc={bannerImg} // Corrected image import here
        arrowSrc={Arrow}
        title="Engineering & Construction"
        breadcrumbs={breadcrumbs}
      />
      <SecondSec
        bgimgSrc={secbgImg}
        title="Engineering & Construction"
        subtitle="Desert Board proudly introduces Palm Strand Board (PSB®), a groundbreaking engineered solution redefining sustainability and performance in the construction industry. With zero formaldehyde emissions, PSB® ensures a healthier living environment, exemplifying our commitment to safety and well-being. Crafted from upcycled palm fronds, this locally manufactured material supports the region's bioeconomy while reducing environmental impact. Engineered for strength, durability, and versatility, PSB® thrives under challenging conditions, offering exceptional moisture resistance, fire safety, and sound isolation properties. From structural applications to fine furnishings, PSB® delivers unmatched quality and customization, empowering designers, architects, and builders to create with confidence and sustainability in mind."
        imageSrc={secImg} // Updated for consistency, or use a different image here if necessary
      />
      <Tabs />
      <BeforeFooterTag title={"To Download"} />
    </>
  );
};

export default Sectors;
