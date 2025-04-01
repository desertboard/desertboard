
import React from 'react'
import SectorDetails from '../../../components/Sector-Details/Index'
import { Metadata } from 'next';
import apiService from '@/app/services/apiService';

interface SectorDetails {
  data: {
    metaTitle: string;
    metaDescription: string;
  };
}

export async function generateMetadata({params}:{params: Promise<{sectorTitle: string}>}): Promise<Metadata> {
const {sectorTitle} = await params;
const data = await apiService.get<SectorDetails>(`/sector?title=${sectorTitle}`);


const metadataTitle = data?.data?.metaTitle || "Desert Board World's first Wooden Board made from Palm Waste - Desert Board";
const metadataDescription =
  data?.data?.metaDescription || "Welcome to Desert Board. Pioneering a carbon negative future from the UAE to the World. Introducing the world's first Wooden Board made from Date Palm Biomass.";

return {
  title: metadataTitle,
  description: metadataDescription,
};

}

const page = () => {
  return (
    <>
      <SectorDetails/>
    </>
  )
}

export default page