

import { Metadata } from "next";
import Index from "../../components/about/Index";
import apiService from "@/app/services/apiService";


interface AboutData {
  about: {
    metaTitle: string;
    metaDescription: string;
  }[];
}

export async function generateMetadata(): Promise<Metadata> {
const data = await apiService.get<AboutData>("/about");


const metadataTitle = data?.about[0]?.metaTitle || "Desert Board World's first Wooden Board made from Palm Waste - Desert Board";
const metadataDescription =
  data?.about[0]?.metaDescription || "Welcome to Desert Board. Pioneering a carbon negative future from the UAE to the World. Introducing the world's first Wooden Board made from Date Palm Biomass.";

return {
  title: metadataTitle,
  description: metadataDescription,
};

}


export default function Home() {
  return (
    <>
     <Index/>
    </>
  );
}
