import React from 'react'
import Products from '@/app/components/Products/Index'
import apiService from '@/app/services/apiService';

interface Product {
  productMeta: {
    metaTitle: string;
    metaDescription: string;
  };
}

export async function generateMetadata() {

  const data = await apiService.get<Product>(`/products/meta`);
  console.log(data)


const metadataTitle = data?.productMeta?.metaTitle || "Desert Board World's first Wooden Board made from Palm Waste - Desert Board";
const metadataDescription =
  data?.productMeta?.metaDescription || "Welcome to Desert Board. Pioneering a carbon negative future from the UAE to the World. Introducing the world's first Wooden Board made from Date Palm Biomass.";

return {
  title: metadataTitle,
  description: metadataDescription,
};

}

const page = () => {
  return (
    <Products/>
  )
}

export default page