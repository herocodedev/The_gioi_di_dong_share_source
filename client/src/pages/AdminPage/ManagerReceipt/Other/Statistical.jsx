import React from "react";

function Statistical(props) {
  return (
    <>
      <div className="">
        <span className="font-semibold text-xl">Tổng số lượng đơn hàng: </span>
        <strong className="text-red-500">999999</strong>
      </div>
      <ul className="my-2">
        <li className="py-2">
          <span className="text-xl">Số lượng đơn hàng đã xác nhận: </span>
          <strong>100</strong>
        </li>
        <li className=" py-2">
          <span className="text-xl">Số lượng đơn hàng chưa xác nhận: </span>
          <strong>100</strong>
        </li>
      </ul>
    </>
  );
}

export default Statistical;
