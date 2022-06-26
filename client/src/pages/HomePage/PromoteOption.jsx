import React from "react";

function PromoteOption(props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="col-span-1 bg-white rounded-xl py-3 px-4 flex gap-2 items-center justify-center">
        <img
          className="w-[50px] h-[50px]  object-contain"
          src={require("../../assests/img/icon_smartphone.png")}
          alt=""
        />
        <h1 className="text-[18px] text-center md:text-[22px] text-gray-800 font-semibold">
          Chỉ giảm Online
        </h1>
      </div>
      <div className="col-span-1 bg-white rounded-xl py-3 px-4 flex gap-2 items-center justify-center">
        <img
          className="w-[50px] h-[50px]  object-contain"
          src={require("../../assests/img/icon_hand.png")}
          alt=""
        />
        <h1 className="text-[18px] text-center md:text-[22px] text-gray-800 font-semibold">
          Đồng giá từ 99k
        </h1>
      </div>
      <div className="col-span-1 bg-white rounded-xl py-3 px-4 flex gap-2 items-center justify-center">
        <img
          className="w-[50px] h-[50px]  object-contain"
          src={require("../../assests/img/icon_deal.png")}
          alt=""
        />
        <h1 className="text-[18px] text-center md:text-[22px] text-gray-800 font-semibold">
          Xã hảng giảm sốc
        </h1>
      </div>
    </div>
  );
}

export default PromoteOption;
