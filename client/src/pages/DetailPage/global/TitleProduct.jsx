import Skeleton from "@mui/material/Skeleton";
import React, { useEffect, useState } from "react";
import SkeletonCard from "../../../components/Skeleton/SkeletonCard";
import SliderCardProduct from "../../../components/Slider/SliderCardProduct";

// Responsive
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const getSlidePerviewResponsive = () => {
  const screenWidth = getWindowDimensions().width;
  if (screenWidth <= 768 && screenWidth >= 640) return 3;
  else if (screenWidth > 768 && screenWidth < 1024) return 4;
  else if (screenWidth < 640 && screenWidth >= 500) return 2;
  else if (screenWidth < 500) return 1;
  else return 5;
};
// End Responsive
function TitleProduct(props) {
  const { id, title, products } = props;
  // Responsive
  const [slidePerview, setSlidePerview] = useState(() => {
    return getSlidePerviewResponsive();
  });

  window.addEventListener("resize", () => {
    const screenWidth = window.outerWidth;
    if (screenWidth <= 768 && screenWidth >= 640) setSlidePerview(3);
    else if (screenWidth > 768 && screenWidth < 1024) setSlidePerview(4);
    else if (screenWidth < 640 && screenWidth >= 500) setSlidePerview(2);
    else if (screenWidth < 500) setSlidePerview(1);
    else setSlidePerview(5);
  });
  // End Responsive

  useEffect(() => {
    return () => {
      setSlidePerview(0);
    };
  }, []);
  return (
    <div className="bg-red-600 rounded-xl px-4 py-4 mt-4" id={id}>
      {title ? (
        <h1 className="text-3xl si:text-4xl mb-6 uppercase text-white font-bold text-center">
          <span className="text-yellow-300 font-bold">deal sốc</span> {title}
        </h1>
      ) : (
        <Skeleton height={20} variant="text" />
      )}
      <div className="my-4">
        {products ? (
          <SliderCardProduct slidePerview={slidePerview} data={products} />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        )}
      </div>
    </div>
  );
}

export default TitleProduct;
