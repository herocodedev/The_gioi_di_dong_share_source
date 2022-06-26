import { Button } from "@mui/material";
import React from "react";

function CommonContent(props) {
  const { data } = props;
  return (
    <div>
      <div className="name">
        <h1 className="font-semibold my-4 text-xl">Tên sản phẩm</h1>
        <p>{data.name}</p>
      </div>
      <div className="image">
        <h1 className="font-semibold my-4 text-xl">Hình ảnh</h1>
        <div className="">
          {data?.images.map((x, y) => (
            <div key={y} className="">
              <div className="flex gap-2 flex-wrap ">
                <p className="">Màu:</p>
                <div
                  className="w-[30px] h-[30px] rounded-lg shadow-2xl"
                  style={{ backgroundColor: x.colorValue }}
                ></div>
              </div>
              <div className="grid grid-cols-4 gap-2 my-2">
                {x?.imgs.map((item, index) => (
                  <img
                    key={index}
                    className="w-[100%] h-[100%] object-contain rounded-lg"
                    src={item.url}
                    alt=""
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="description">
        <h1 className="font-semibold my-4 text-xl">Mô tả</h1>
        <p>{data.description}</p>
      </div>
      <div className="price">
        <h1 className="font-semibold my-4 text-xl">Giá sản phẩm</h1>
        <div className="flex flex-wrap gap-2">
          <Button variant="outlined" color="error">
            <h1 className="font-semibold uppercase">
              {data.price.toLocaleString("en-US", {
                currency: "USD",
              })}
              đ
            </h1>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CommonContent;
