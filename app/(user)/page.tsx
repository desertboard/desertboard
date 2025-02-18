import BeforeFooterTag from "../components/Common/BeforeFooterTag";
import MainDescBOx from "../components/Common/MainDescBox";
import BannerSr from "../components/home/BannerSr";
import SectorsList from "../components/home/SectorsList";
import SustainabeSc from "../components/home/SustainabeSc";
import UspList from "../components/home/UspList";

export default function Home() {
  return (
    <>
      <BannerSr />
      <MainDescBOx
        secTitle="Inspiration"
        subTitle="A Legacy Rooted in the Desert"
        paragraphs={[
          "In the heart of the desert, where towering date palm trees symbolize our heritage, a groundbreaking innovation has emerged: DesertBoard's Palm Strand Board ( PSB® ), the world’s first engineered palm-based board.",
          "For centuries, date palm trees have been a vital resource in the Middle East, historically used to construct Barasti houses that provided essential shelter in the harsh desert climate. Inspired by the rich legacy and the vision of the UAE's founding father, Sheikh Zayed bin Sultan Al Nahyan, DesertBoard successfully produced the first engineered board in 2021.",
        ]}
        // mainImg="/assets/images/mn.jpg"
        mainVdo="/assets/videos/Desertboard_About_sec.mp4"
        vdoPoster="/assets/images/home/abt-vid.jpg"
      />
      <UspList secTitle={"Key USPs"} />
      <SectorsList />
      <SustainabeSc />
      <BeforeFooterTag title={"To Sustainability"} url={"/sustainability"} />
    </>
  );
}
