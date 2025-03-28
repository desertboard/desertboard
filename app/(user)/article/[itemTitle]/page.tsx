import React from 'react'
import Article from '@/app/components/Article'
import apiService from '@/app/services/apiService';
import { Metadata } from 'next';

interface NewsDetails {
  data: {
    metaTitle: string;
    metaDescription: string;
  };
}

export async function generateMetadata({params}:{params:Promise<{itemTitle:string}>}): Promise<Metadata> {
const {itemTitle} = await params
  const data = await apiService.get<NewsDetails>(`/news/byid?slug=${itemTitle}`);
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
      <Article/>
    </>
  )
}

export default page