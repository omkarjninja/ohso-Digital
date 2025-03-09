"use client";
import React from "react";
import Image from "next/image";

import Marquee from "react-fast-marquee";

const Slider = () => {
  const imageUrls = [
    "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1643503640904-75c1a2093570?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className="slider relative lg:pt-16 pt-4 pb-16 bg-[#0077FF] w-full h-auto">
      <h1 className="block lg:px-16 px-2 text-[#F9F9F9] text-[7vw] font-[rejoice-heading]">
        Get in touch
      </h1>

      <div className="marquee-container">
        <Marquee className="cursor-pointer">
          {imageUrls.map((imageUrl, index) => (
            <Image
              key={index}
              width={250}
              height={250}
              src={imageUrl}
              alt={`Image ${index}`}
              className="marquee-image w-full h-full"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Slider;
