import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

function SliderAdvProduct(props) {
  const { images } = props;
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay
        spaceBetween={0}
        slidesPerView={1}
        navigation
      >
        {images?.imgs?.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              className="h-[350px] w-[100%] sm:object-contain object-cover"
              src={item.url}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderAdvProduct;
