import React from "react";
// Import Swiper styles
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SkeletonSlider from "../../components/Skeleton/SkeletonSlider";

function SaleOnline(props) {
  const { sliders } = props;
  const renderSlider = () => {
    return sliders ? (
      <div className="mt-4">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay
          spaceBetween={50}
          slidesPerView={3}
          navigation
        >
          {sliders.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img className="rounded-lg" src={item?.url} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
        <SkeletonSlider />
        <SkeletonSlider />
        <SkeletonSlider />
      </div>
    );
  };
  return (
    <div className="rounded-xl px-4 py-4">
      <h1 className="text-lg sm:text-2xl uppercase text-[#333] font-bold text-left">
        GIẢM THÊM KHI THANH TOÁN ONLINE Xu hướng mua sắm
      </h1>
      {renderSlider()}
    </div>
  );
}

export default SaleOnline;
