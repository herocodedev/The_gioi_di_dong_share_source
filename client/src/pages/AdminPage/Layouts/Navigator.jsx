import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import PeopleIcon from "@mui/icons-material/People";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
const categories = [
  {
    id: "Quản lí",
    children: [
      {
        id: "Quản lí người dùng",
        icon: <PeopleIcon />,
        path: "/admin/user",
      },
      {
        id: "Quản lí sản phẩm",
        icon: <DnsRoundedIcon />,
        path: "/admin/product",
      },
      { id: "Quản lí đơn hàng", icon: <ReceiptIcon />, path: "/admin/receipt" },
      {
        id: "Quản lí trang chủ",
        icon: <SettingsEthernetIcon />,
        path: "/admin/homepage",
      },
      {
        id: "Quản lí trang điện thoại",
        icon: <SettingsEthernetIcon />,
        path: "/admin/smartphone",
      },
      {
        id: "Quản lí trang laptop",
        icon: <SettingsEthernetIcon />,
        path: "/admin/laptop",
      },
      {
        id: "Quản lí trang tablet",
        icon: <SettingsEthernetIcon />,
        path: "/admin/tablet",
      },
      {
        id: "Quản lí trang phụ kiện",
        icon: <SettingsEthernetIcon />,
        path: "/admin/accessory",
      },
      {
        id: "Quản lí trang đồng hồ",
        icon: <SettingsEthernetIcon />,
        path: "/admin/swatch",
      },
      {
        id: "Quản lí trang pc",
        icon: <SettingsEthernetIcon />,
        path: "/admin/pc",
      },
    ],
  },
];

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;
  const { pathname } = useLocation();
  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >
          <Link to={"/"} className="mx-auto">
            <div className="w-full flex flex-col items-center justify-center min-h-[120px]">
              <img
                className="w-[50px] h-[50px]"
                src={require("../../../assests/img/logo_tgdd_no_text.png")}
                alt=""
              />
              <div className="pt-2 ">Admin</div>
            </div>
          </Link>
        </ListItem>

        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, path }) => {
              return (
                <ListItem disablePadding key={childId}>
                  <Link to={path} className="block w-[100%]">
                    <ListItemButton
                      selected={pathname.includes(path) ? true : false}
                      sx={item}
                    >
                      <ListItemIcon>{icon}</ListItemIcon>

                      <ListItemText>{childId}</ListItemText>
                    </ListItemButton>
                  </Link>
                </ListItem>
              );
            })}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
