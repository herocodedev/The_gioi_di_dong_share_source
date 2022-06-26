import { Skeleton } from "@mui/material";
import React from "react";
import SliderImg from "../Slider/SliderImg";

function Advertisement(props) {
  const { data } = props;
  const renderImg = () => {
    let jsx = [];
    if (!data) {
      for (let i = 0; i < 2; i++)
        jsx.push(
          <Skeleton
            key={i}
            className="rounded-md mb-2"
            variant="rectangular"
            width={"100%"}
            height={100}
          />
        );
      return jsx;
    }
    return (
      <>
        <img src={data[1]?.url} alt="" className="row-span-1 rounded-lg mb-2" />
        <img src={data[2]?.url} alt="" className="row-span-1 rounded-lg " />
      </>
    );
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 my-4">
      <div className="col-span-1 md:col-span-2 row-span-2">
        {data ? (
          <SliderImg data={data} sliderPerview={1} gap={0} />
        ) : (
          <Skeleton
            className="rounded-md"
            variant="rectangular"
            width={"100%"}
            height={200}
          />
        )}
      </div>
      <div className="col-span-1 row-span-2">{renderImg()}</div>
    </div>
  );
}

export default Advertisement;
