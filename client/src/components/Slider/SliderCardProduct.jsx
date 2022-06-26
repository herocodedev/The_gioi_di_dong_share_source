import React from "react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CardCustom from "../Card/Card";
import SkeletonList from "../Skeleton/SkeletonList";

function SliderCardProduct(props) {
  const { data, slidePerview } = props;
  const renderCard = () => {
    if (data.length > 0) {
      return (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay
          spaceBetween={10}
          slidesPerView={slidePerview}
          navigation
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <CardCustom product={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      );
    }
    return <SkeletonList quantityLoading={5} />;
  };

  return <>{renderCard()}</>;
}

export default SliderCardProduct;
