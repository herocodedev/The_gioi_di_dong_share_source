import React from "react";
import appleWatch from "../../../assests/img/apple_watch.png";
import bannerSwatch from "../../../assests/img/banner-swatch.png";
import oppoWatch from "../../../assests/img/oppo_watch.png";
import samsungWatch from "../../../assests/img/samsung_watch.png";
import xiaomiWatch from "../../../assests/img/xiaomi_watch.png";

const data = [
  {
    img: appleWatch,
    name: "appleWatch",
  },
  {
    img: samsungWatch,
    name: "samsungWatch",
  },
  {
    img: xiaomiWatch,
    name: "xiaomiWatch",
  },
  {
    img: oppoWatch,
    name: "oppoWatch",
  },
];
function Brand(props) {
  const renderOption = () => {
    return data.map((item, index) => (
      <div
        key={index}
        className="w-[100px] h-[50px] bg-white flex flex-col items-center justify-center rounded-lg overflow-hidden px-2 py-1"
      >
        <img src={item.img} className="" alt="" />
      </div>
    ));
  };
  return (
    <div className="">
      <img src={bannerSwatch} className="h-[220px] object-cover" alt="" />
      <div className="flex items-center gap-16 justify-center px-24 bg-black py-2">
        {renderOption()}
      </div>
    </div>
  );
}

export default Brand;
