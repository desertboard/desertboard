import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/background-image.jpg')"
      }}
    >
    
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>


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
