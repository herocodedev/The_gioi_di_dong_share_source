import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useOutletContext } from "react-router-dom";
import BoxCT from "../../../components/Box/BoxCT";
import { GET_QUANTITY_SAGA } from "../../../redux/sagas/types/main";
import Header from "../Layouts/Header";

const arrBoxColor = [
  "#3b82f6",
  "#06b6d4",
  "#6366f1",
  "#ef4444",
  "#ec4899",
  "#22c55e",
];

const tabs = [
  {
    name: "Tất cả",
    path: "/admin/product",
  },
  {
    name: "Điện thoại",
    path: "/admin/product/smartphone",
  },
  {
    name: "Laptop",
    path: "/admin/product/laptop",
  },
  {
    name: "Tablet",
    path: "/admin/product/tablet",
  },
  {
    name: "Phụ kiện",
    path: "/admin/product/accessory",
  },
  {
    name: "Đồng hồ",
    path: "/admin/product/swatch",
  },
  {
    name: "PC",
    path: "/admin/product/pc",
  },
];

export default function ManagerProduct() {
  const handleDrawerToggle = useOutletContext();
  const { totalQuantity } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_QUANTITY_SAGA,
    });
  }, [dispatch]);

  const renderStatistical = () => {
    const arrJSX = [];
    const objQuantity = totalQuantity[0];
    let index = 0;
    for (let key in objQuantity) {
      if (key === "accessory") {
        arrJSX.push(
          <BoxCT
            key={index}
            color={arrBoxColor[index]}
            height={"70px"}
            width={"100%"}
            content={`${objQuantity[key]} Phụ kiện`}
          />
        );
        index++;
      } else if (key === "laptop") {
        arrJSX.push(
          <BoxCT
            key={index}
            color={arrBoxColor[index]}
            height={"70px"}
            width={"100%"}
            content={`${objQuantity[key]} Laptop`}
          />
        );
        index++;
      } else if (key === "pc") {
        arrJSX.push(
          <BoxCT
            key={index}
            color={arrBoxColor[index]}
            height={"70px"}
            width={"100%"}
            content={`${objQuantity[key]} PC`}
          />
        );
        index++;
      } else if (key === "smartphone") {
        arrJSX.push(
          <BoxCT
            key={index}
            color={arrBoxColor[index]}
            height={"70px"}
            width={"100%"}
            content={`${objQuantity[key]} Điện thoại`}
          />
        );
        index++;
      } else if (key === "swatch") {
        arrJSX.push(
          <BoxCT
            key={index}
            color={arrBoxColor[index]}
            height={"70px"}
            width={"100%"}
            content={`${objQuantity[key]} Đồng hồ`}
          />
        );
        index++;
      } else if (key === "tablet") {
        arrJSX.push(
          <BoxCT
            key={index}
            color={arrBoxColor[index]}
            height={"70px"}
            width={"100%"}
            content={`${objQuantity[key]} Tablet`}
          />
        );
        index++;
      }
    }

    return arrJSX;
  };

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Header
        title={"Quản lí sản phẩm"}
        tabs={tabs}
        onDrawerToggle={handleDrawerToggle}
      />
      {/* STATISTICAL PRODUCT */}
      <div className="content px-4 py-4">
        <div className="">
          <h1 className="text-center mb-4 text-2xl">Thống kê </h1>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-2">
            {renderStatistical()}
          </div>
        </div>
        {/* END STATISTICAL PRODUCT */}
        <h1 className="text-center text-2xl mt-8">Tất cả sản phẩm</h1>
        {/* OUTLET */}
        <Outlet />
        {/* END OUTLET */}
      </div>
    </Box>
  );
}
