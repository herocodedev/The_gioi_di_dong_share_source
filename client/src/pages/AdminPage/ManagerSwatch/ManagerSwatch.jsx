import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useOutletContext } from "react-router-dom";
import {
  GET_DATA_SWATCH_PAGE_SAGA,
  GET_QUANTITY_SAGA,
} from "../../../redux/sagas/types/main";
import Header from "../Layouts/Header";

const tabs = [
  {
    name: "Trang đồng hồ",
    path: "/admin/swatch",
  },
  {
    name: "Tạo mới",
    path: "/admin/swatch/add",
  },
  {
    name: "Cập nhật",
    path: "/admin/swatch/edit",
  },
];
export default function ManagerSwatch() {
  const handleDrawerToggle = useOutletContext();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_DATA_SWATCH_PAGE_SAGA,
    });
  }, [dispatch]);

  // GET QUANTITY ALL PRODUCT
  useEffect(() => {
    dispatch({
      type: GET_QUANTITY_SAGA,
    });
  }, [dispatch]);
  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Header
        title={"Quản lí trang đồng hồ"}
        tabs={tabs}
        onDrawerToggle={handleDrawerToggle}
      />
      <Outlet />
    </Box>
  );
}
