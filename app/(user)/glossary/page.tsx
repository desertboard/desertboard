import React from 'react'
import Glossary from '@/app/components/Glossary'
import { Metadata } from 'next';
import apiService from '@/app/services/apiService';

interface Glossary {
  data: {
    metaTitle: string;
    metaDescription: string;
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await apiService.get<Glossary>("/glossary/meta");
  console.log(data)

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
      <Glossary/>
    </>
  )
}

export default page