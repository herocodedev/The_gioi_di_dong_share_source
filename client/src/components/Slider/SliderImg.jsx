// Import Swiper styles
import React from "react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

function SliderImg(props) {
  const { data, sliderPerview, gap } = props;
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay
      spaceBetween={gap}
      slidesPerView={sliderPerview}
      navigation
    >
      {data.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <img
              className="rounded-lg h-[100%] object-cover"
              src={item.url}
              alt=""
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SliderImg;
