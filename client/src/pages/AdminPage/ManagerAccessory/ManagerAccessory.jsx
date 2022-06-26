import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useOutletContext } from "react-router-dom";
import {
  GET_DATA_ACCESSORY_PAGE_SAGA,
  GET_QUANTITY_SAGA,
} from "../../../redux/sagas/types/main";
import Header from "../Layouts/Header";
const tabs = [
  {
    name: "Trang phụ kiện",
    path: "/admin/accessory",
  },
  {
    name: "Tạo mới",
    path: "/admin/accessory/add",
  },
  {
    name: "Cập nhật",
    path: "/admin/accessory/edit",
  },
];
function ManagerAccessory(props) {
  const handleDrawerToggle = useOutletContext();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_DATA_ACCESSORY_PAGE_SAGA,
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
        title={"Quản lí trang phụ kiện"}
        tabs={tabs}
        onDrawerToggle={handleDrawerToggle}
      />
      <Outlet />
    </Box>
  );
}

export default ManagerAccessory;
