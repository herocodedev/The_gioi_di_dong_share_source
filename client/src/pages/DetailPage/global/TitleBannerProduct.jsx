import { Button, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import SkeletonSlider from "../../../components/Skeleton/SkeletonSlider";
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
function TitleBannerProduct(props) {
  const { title, banner, products } = props;
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
    <div className="bg-blue-800 rounded-xl px-4 py-4">
      <h1 className="text-4xl uppercase text-white font-bold text-center">
        {title ? title : <Skeleton variant="text" />}
      </h1>
      {banner ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          {banner.map((item, index) => (
            <img
              key={index}
              className="rounded-md"
              src={item?.url}
              alt="imageError"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <SkeletonSlider />
          <SkeletonSlider />
          <SkeletonSlider />
        </div>
      )}

      {products ? (
        <SliderCardProduct slidePerview={slidePerview} data={products} />
      ) : (
        <Skeleton
          className="rounded-lg"
          variant="rectangular"
          width={"100%"}
          height={300}
        />
      )}
      <div className="flex items-center  justify-center my-4">
        <Button variant="contained" size="large" className="mx-auto ">
          Xem tất cả sản phẩm
        </Button>
      </div>
    </div>
  );
}

export default TitleBannerProduct;
