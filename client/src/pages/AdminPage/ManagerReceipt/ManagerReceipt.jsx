import Box from "@mui/material/Box";
import { Outlet, useOutletContext } from "react-router-dom";
import Header from "../Layouts/Header";

const tabs = [
  {
    name: "Trang đơn hàng",
    path: "/admin/receipt",
  },
  {
    name: "Đơn hàng đã xác nhận",
    path: "/admin/receipt/sign",
  },
  {
    name: "Đơn hàng chưa xác nhận",
    path: "/admin/receipt/noSign",
  },
];
export default function ManagerReceipt() {
  const handleDrawerToggle = useOutletContext();

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Header
        title={"Quản lí trang đơn hàng"}
        tabs={tabs}
        onDrawerToggle={handleDrawerToggle}
      />
      <Outlet />
    </Box>
  );
}
