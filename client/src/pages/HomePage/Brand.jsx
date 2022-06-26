import React from "react";
import SkeletonSlider from "../../components/Skeleton/SkeletonSlider";

function Brand(props) {
  const { sliders } = props;
  const renderCard = () => {
    if (!sliders) {
      let jsx = [];
      for (let i = 0; i < 3; i++) jsx.push(<SkeletonSlider key={i} />);
      return jsx;
    }
    return sliders.map((item, index) => {
      return (
        <img
          className="rounded-lg mx-auto"
          key={index}
          src={item?.url}
          alt=""
        />
      );
    });
  };

  return (
    <div className="rounded-xl px-4 py-4">
      <h1 className="text-2xl uppercase text-[#333] font-bold text-center sm:text-left">
        CHUYÊN TRANG THƯƠNG HIỆU
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {renderCard()}
      </div>
    </div>
  );
}

export default Brand;
