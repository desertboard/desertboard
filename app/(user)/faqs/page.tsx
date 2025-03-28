import React from 'react'
import Faqs from '../../components/Faqs/Faqs'
import apiService from '@/app/services/apiService';
import { Metadata } from 'next';

interface Faqs {
  data: {
    metaTitle: string;
    metaDescription: string;
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await apiService.get<Faqs>("/faqs/meta");
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
    <Faqs/>
  )
}

export default page