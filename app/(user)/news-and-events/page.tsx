

import { Metadata } from "next";
import Index from "../../components/NewsEvents/Index";
import apiService from "@/app/services/apiService";

interface NewsAndEvents {
  newsMeta: {
    metaTitle: string;
    metaDescription: string;
  };
}

export async function generateMetadata(): Promise<Metadata> {
const data = await apiService.get<NewsAndEvents>("/news/meta");

const metadataTitle = data?.newsMeta?.metaTitle || "Desert Board World's first Wooden Board made from Palm Waste - Desert Board";
const metadataDescription =
  data?.newsMeta?.metaDescription || "Welcome to Desert Board. Pioneering a carbon negative future from the UAE to the World. Introducing the world's first Wooden Board made from Date Palm Biomass.";

return {
  title: metadataTitle,
  description: metadataDescription,
};

}

const NewsAndEventsPage = () => {
  
  return (
    <>
      <Index />
    </>
  );
};

export default NewsAndEventsPage;
