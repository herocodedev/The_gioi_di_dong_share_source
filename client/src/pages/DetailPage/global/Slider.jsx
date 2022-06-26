// Import Swiper styles
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SkeletonSlider from "../../../components/Skeleton/SkeletonSlider";
import SliderImg from "../../../components/Slider/SliderImg";

function Slider(props) {
  const { sliders } = props;
  return (
    <div className="py-16">
      {sliders ? (
        <SliderImg data={sliders} sliderPerview={2} gap={50} />
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <SkeletonSlider />
          <SkeletonSlider />
        </div>
      )}
    </div>
  );
}

export default Slider;
