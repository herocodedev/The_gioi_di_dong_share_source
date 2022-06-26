import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useOutletContext } from "react-router-dom";
import {
  GET_DATA_LAPTOP_PAGE_SAGA,
  GET_QUANTITY_SAGA,
} from "../../../redux/sagas/types/main";
import Header from "../Layouts/Header";
const tabs = [
  {
    name: "Trang laptop",
    path: "/admin/laptop",
  },
  {
    name: "Tạo mới",
    path: "/admin/laptop/add",
  },
  {
    name: "Cập nhật",
    path: "/admin/laptop/edit",
  },
];
function ManagerLaptop(props) {
  const handleDrawerToggle = useOutletContext();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_DATA_LAPTOP_PAGE_SAGA,
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
        title={"Quản lí trang laptop"}
        tabs={tabs}
        onDrawerToggle={handleDrawerToggle}
      />
      <Outlet />
    </Box>
  );
}

export default ManagerLaptop;
