
import React from 'react'
import ProducrDetails from '@/app/components/product-details'
import apiService from '@/app/services/apiService';

interface ProductDetails {
  data: {
    metaTitle: string;
    metaDescription: string;
  };
}

export async function generateMetadata({params}:{params: Promise<{productName: string}>}) {
const {productName} = await params;
// let convertedProductName;
if(productName){
  // convertedProductName = productName.replace("psb", "PSB").replace("fr", "FR").replace("ecocore", "ecoCore").replace(/\s+/g, "-").replace(/\b\w/g, (char) => char.toUpperCase())
  const data = await apiService.get<ProductDetails>(`/products?slug=${productName}`);
  const metadataTitle = data?.data?.metaTitle || "Desert Board World's first Wooden Board made from Palm Waste - Desert Board";
  const metadataDescription =
  data?.data?.metaDescription || "Welcome to Desert Board. Pioneering a carbon negative future from the UAE to the World. Introducing the world's first Wooden Board made from Date Palm Biomass.";

return {
  title: metadataTitle,
  description: metadataDescription,
};
}

}

const page = () => {
  return (
    <>
      <ProducrDetails/>
    </>
  )
}

export default page