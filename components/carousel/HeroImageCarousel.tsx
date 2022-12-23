import React, { useState, useEffect, useRef } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

import { urlForThubnail } from "../../utils";
import HeroImageCard from "./HeroImageCard";
function HeroImageCarousel({ data }) {
  const [current, setCurrent] = useState(0);
  const [currentImageData, setCurrentImageData] = useState(
    (data && data[0]) || []
  );
  const imageDataLength = (data && data.length) || 0;

  if (!Array.isArray(data) || imageDataLength <= 0) {
    return null;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (current < imageDataLength - 1) {
        setCurrentImageData(data[current + 1]);
        setCurrent((prev) => prev + 1);
      }
      if (current === imageDataLength - 1) {
        setCurrentImageData(data[0]);
        setCurrent(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const handleImageSlider = (index) => {
    setCurrentImageData(data[index]);
    setCurrent(index);
  };

  return (
    <section className="relative w-screen mt-20">
      <HeroImageCard data={currentImageData} />
      <div className="absolute bottom-20 left-20 p-5 flex justify-center items-center">
        {data.map((imageData, index) => {
          const spanClass =
            index === current
              ? "w-10 h-2 bg-white opacity-1 mr-2"
              : " w-10 h-1 bg-white opacity-50 mr-2";
          return (
            <span
              key={imageData._id}
              className={spanClass}
              onClick={() => handleImageSlider(index)}
            ></span>
          );
        })}
      </div>
    </section>
  );
}

export default HeroImageCarousel;
