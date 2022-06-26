import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
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
function BannerProductSlider(props) {
  const { id, banner, products, backgroundColor } = props;
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
    <div
      style={backgroundColor ? { background: `${backgroundColor}` } : {}}
      className="rounded-xl px-4 py-4 mt-4"
      id={id}
    >
      {banner ? (
        <img src={banner[0]?.url} alt="" />
      ) : (
        <Skeleton
          className="rounded-lg"
          variant="rectangular"
          width={"100%"}
          height={100}
        />
      )}
      <div className="mt-2"></div>

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
    </div>
  );
}

export default BannerProductSlider;
