import React from "react";
import { Link } from "react-router-dom";
import bumper from "../../assests/img/bumper.png";
import computer from "../../assests/img/computer.png";
import gallery from "../../assests/img/gallery.png";
import headphone from "../../assests/img/headphone.png";
import laptop from "../../assests/img/laptop.png";
import loudspeaker from "../../assests/img/loudspeaker.png";
import modun_network from "../../assests/img/modun_network.png";
import screen from "../../assests/img/screen.png";
import smartphone from "../../assests/img/smartphone.png";
import smartwatch from "../../assests/img/smartwatch.png";
import stylewatch from "../../assests/img/stylewatch.png";
import tablet from "../../assests/img/tablet.png";

const dataImg = [
  {
    url: smartphone,
    name: "Điện thoại",
    path: "smartphone",
  },
  {
    url: laptop,
    name: "Laptop",
    path: "laptop",
  },
  {
    url: computer,
    name: "PC",
    path: "pc",
  },
  {
    url: bumper,
    name: "Ốp lưng",
    path: "accessory",
  },
  {
    url: gallery,
    name: "Trang sức",
    path: "accessory",
  },
  {
    url: headphone,
    name: "Tai nghe",
    path: "accessory",
  },
  {
    url: loudspeaker,
    name: "Loa",
    path: "accessory",
  },
  {
    url: stylewatch,
    name: "Đổng hồ thời trang",
    path: "accessory",
  },
  {
    url: smartwatch,
    name: "Đổng hồ thông minh",
    path: "swatch",
  },
  {
    url: modun_network,
    name: "Modun wifi",
    path: "accessory",
  },
  {
    url: screen,
    name: "Màn hình",
    path: "accessory",
  },
  {
    url: tablet,
    name: "Máy tính bảng",
    path: "tablet",
  },
];
function HotCategory(props) {
  const renderImg = () => {
    return dataImg?.map((item, index) => (
      <Link
        to={item.path}
        key={index}
        className="relative flex justify-center items-center flex-col"
      >
        <img className="rounded-lg h-[50%]" src={item.url} alt="" />
        <div className="text-center text-struncate">{item.name}</div>
      </Link>
    ));
  };
  return (
    <div className="bg-white rounded-xl px-4 py-4">
      <h1 className="text-lg sm:text-2xl uppercase text-[#333] font-bold text-left">
        Danh mục nổi bật
      </h1>
      <div className="grid grid-cols-6 item justify-center">{renderImg()}</div>
    </div>
  );
}

export default HotCategory;
