"use client"
import React, { useState } from "react";

const Carousel = () => {
  const images = [
    "/images/banner.png", // Replace with your image paths
    "/images/banner.png", 
    "/images/banner.png", 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative ">
      {/* Images */}
      <div className="w-[1920px] h-[391px] overflow-hidden items-center justify-center rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-[1920px] h-[391px] object-cover transition-transform duration-500"
        />
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
              currentIndex === index
                ? "bg-orange-500"
                : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
