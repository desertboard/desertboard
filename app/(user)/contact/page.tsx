import React from 'react'
import Contact from '../../components/Contact/Contact'
import { Metadata } from 'next';
import apiService from '@/app/services/apiService';

interface Contact {
  data: {
    metaTitle: string;
    metaDescription: string;
  }[];
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await apiService.get<Contact>("/contact/meta");
  console.log(data)

const metadataTitle = data?.data[0]?.metaTitle || "Desert Board World's first Wooden Board made from Palm Waste - Desert Board";
const metadataDescription =
  data?.data[0]?.metaDescription || "Welcome to Desert Board. Pioneering a carbon negative future from the UAE to the World. Introducing the world's first Wooden Board made from Date Palm Biomass.";

return {
  title: metadataTitle,
  description: metadataDescription,
};

}

const page = () => {
  return (
    <Contact/>
    
  )
}

export default page