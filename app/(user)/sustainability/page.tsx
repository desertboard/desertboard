import React from 'react'
import Sustainability from '../../components/Sustainability'
import { Metadata } from 'next';
import apiService from '@/app/services/apiService';

interface Sustainability {
  sustainability: {
    metaTitle: string;
    metaDescription: string;
  };
}

export async function generateMetadata(): Promise<Metadata> {
const data = await apiService.get<Sustainability>("/sustainability");
console.log(data)


const metadataTitle = data?.sustainability?.metaTitle || "Desert Board World's first Wooden Board made from Palm Waste - Desert Board";
const metadataDescription =
  data?.sustainability?.metaDescription || "Welcome to Desert Board. Pioneering a carbon negative future from the UAE to the World. Introducing the world's first Wooden Board made from Date Palm Biomass.";

return {
  title: metadataTitle,
  description: metadataDescription,
};

}


const page = () => {
  return (
    <>
      <Sustainability/>
    </>
  )
}

export default page