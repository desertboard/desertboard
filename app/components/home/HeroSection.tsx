import React from "react";
import Link from "next/link";
import Banner from '@/public/assets/banner.png'
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
      
    >
                <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
                <div className="absolute inset-0 bg-primary opacity-20 -z-20"></div>
        <figure className="absolute h-screen w-screen  -z-40">

            <Image className="w-screen h-screen absolute object-cover" src={Banner} width={1000} height={800} alt=""/>

      </figure>
      <div className="relative z-10 text-white px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          DesertBoard’s Palm Strand Board
        </h1>
        <p className="text-lg md:text-xl font-light mb-6">
          The region’s most sustainable building material
        </p>
        <Link
          href="#"
          className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition rounded-md"
        >
          Know More 
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
