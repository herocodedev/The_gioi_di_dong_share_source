import { Button } from "@mui/material";
import React from "react";
import CardCustom from "../../components/Card/Card";
import SkeletonCard from "../../components/Skeleton/SkeletonCard";

function Recommend(props) {
  const { products } = props;
  const renderTopCategory = () => {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
        <div className="col-span-1 py-2 sm:px-0 bg-[#ffd400] rounded-xl flex gap-2 items-center justify-center">
          <img
            className="h-[50px] sm:h-[50%]"
            src={require("../../assests/img/fire.png")}
            alt=""
          />
          <h1 className="text-[16px] sm:text-[22px] text-gray-800 font-semibold">
            Cho bạn
          </h1>
        </div>
        <div className="col-span-1 py-2 sm:px-0 bg-white rounded-xl flex gap-2 items-center justify-center">
          <img
            className="h-[50px] sm:h-[50%]"
            src={require("../../assests/img/holiday.png")}
            alt=""
          />
          <h1 className="text-[16px] sm:text-[22px] text-gray-800 font-semibold">
            Giảm 50%
          </h1>
        </div>
        <div className="col-span-1 py-2 sm:px-0 bg-white rounded-xl flex gap-2 items-center justify-center">
          <img
            className="h-[50px] sm:h-[50%]"
            src={require("../../assests/img/icon_smartphone.png")}
            alt=""
          />
          <h1 className="text-[16px] sm:text-[22px] text-gray-800 font-semibold">
            Xã hảng giảm sốc
          </h1>
        </div>
        <div className="col-span-1  py-2 sm:px-0 bg-white rounded-xl flex gap-2 items-center justify-center">
          <img
            className="h-[50px] sm:h-[50%]"
            src={require("../../assests/img/tym_icon.png")}
            alt=""
          />
          <h1 className="text-[16px] sm:text-[22px] text-gray-800 font-semibold">
            Deal từ 99k
          </h1>
        </div>
      </div>
    );
  };
  const renderProduct = () => {
    if (!products) {
      let jsx = [];
      for (let i = 0; i < 15; i++) jsx.push(<SkeletonCard key={i} />);
      return jsx;
    }
    return products.map((item, index) => {
      return <CardCustom key={index} product={item} />;
    });
  };
  return (
    <div className="rounded-xl px-4 py-4">
      <h1 className="text-2xl uppercase text-[#333] font-bold text-left">
        GỢI Ý HÔM NAY
      </h1>
      {renderTopCategory()}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-4">
        {renderProduct()}
      </div>

      <div className="flex items-center  justify-center my-4">
        <Button variant="contained" size="large" className="mx-auto ">
          Xem thêm
        </Button>
      </div>
    </div>
  );
}

export default Recommend;
