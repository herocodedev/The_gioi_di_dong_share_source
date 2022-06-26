import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useOutletContext } from "react-router-dom";
import {
  GET_DATA_HOME_PAGE_SAGA,
  GET_QUANTITY_SAGA,
} from "../../../redux/sagas/types/main";
import Header from "../Layouts/Header";

const tabs = [
  {
    name: "Trang chủ",
    path: "/admin/homepage",
  },
  {
    name: "Tạo mới",
    path: "/admin/homepage/add",
  },
  {
    name: "Cập nhật",
    path: "/admin/homepage/edit",
  },
];
export default function ManagerHomePage() {
  const handleDrawerToggle = useOutletContext();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_DATA_HOME_PAGE_SAGA,
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
        title={"Quản lí trang chủ"}
        tabs={tabs}
        onDrawerToggle={handleDrawerToggle}
      />
      <Outlet />
    </Box>
  );
}
