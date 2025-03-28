import React from 'react'
import Sectors from '@/app/components/ApplicationDetails/Index'
import { Metadata } from 'next';
import apiService from '@/app/services/apiService';

interface ApplicationData {
  data: {
    applications: {
      title: string;
      metaTitle: string;
      metaDescription: string;
    }[];
  };
}

export async function generateMetadata({searchParams}:{searchParams: Promise<{application: string,sector: string}>}): Promise<Metadata> {
  const params = await searchParams;
  const data = await apiService.get<ApplicationData>(`/sector/byid?sector=${params.sector}`);
  const application = data.data.applications.find((application) => application.title === params.application.replace(/\s+/g, "-").replace(/-+/g, " ").replace(/\band\b/g, "&").replace(/\b\w/g, (char) => char.toUpperCase()))


const metadataTitle = application?.metaTitle || "Desert Board World's first Wooden Board made from Palm Waste - Desert Board";
const metadataDescription =
  application?.metaDescription || "Welcome to Desert Board. Pioneering a carbon negative future from the UAE to the World. Introducing the world's first Wooden Board made from Date Palm Biomass.";

return {
  title: metadataTitle,
  description: metadataDescription,
};
}


const page = async () => {

  return (
    <Sectors/>
  )
}

export default page