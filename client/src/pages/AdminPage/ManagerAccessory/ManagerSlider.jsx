import { Skeleton } from "@mui/material";
import React from "react";
import ButtonTitle from "../global/ButtonTitle";

function ManagerSlider(props) {
  const { sliders } = props;
  const renderSliders = () => {
    if (!sliders) {
      let jsx = [];
      for (let i = 0; i < 4; i++)
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
    <div className="">
      <h1 className="text-center font-normal text-2xl ">Slider</h1>
      <div className="flex flex-col gap-2">
        {/* Title */}
        <ButtonTitle title={"Slider"} />
        {/* Content */}
        <div className="grid grid-cols-2  gap-2">{renderSliders()}</div>
      </div>
    </div>
  );
}

export default ManagerSlider;
