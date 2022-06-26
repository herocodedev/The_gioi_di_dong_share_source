import { Button, Skeleton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ButtonTitle from "../ButtonTitle";

function ManagerBannerSlider(props) {
  const { banner, sliders } = props;
  const renderBanner = () => {
    return banner && banner?.length > 0 ? (
      <img className="rounded-lg" src={banner[0]?.url} alt="" />
    ) : (
      <Skeleton
        className="rounded-lg"
        variant="rectangular"
        width={"100%"}
        height={100}
      />
    );
  };
  const renderSliders = () => {
    if (sliders?.length === 0 || !sliders) {
      let jsx = [];
      for (let i = 0; i < 8; i++)
        jsx.push(
          <Skeleton
            key={i}
            className="rounded-lg"
            variant="rectangular"
            width={"100%"}
            height={100}
          />
        );
      return jsx;
    }
    return sliders.map((item, index) => (
      <img key={index} className="rounded-lg" src={item.url} alt="" />
    ));
  };
  return (
    <div className="mt-2">
      <h2 className="text-center font-normal text-2xl">Banner và Slider</h2>
      <div className="flex flex-col gap-2">
        {/* Title */}
        <ButtonTitle title={"Banner"} />
        {/* Content */}
        <div className="">
          <div className="">{renderBanner()}</div>
        </div>
        {/* Title */}
        <ButtonTitle title={"Slider"} />

        {/* Content */}
        <div className="">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {renderSliders()}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          <Link to="/">
            <Button variant="contained">Xem trang chủ</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ManagerBannerSlider;
