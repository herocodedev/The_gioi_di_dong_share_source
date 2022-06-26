import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import { useLocation } from "react-router-dom";
import Search from "../../global/Search";
const typePaths = [
  {
    type: "smartphone",
    category: "smartphone",
    path: "/admin/product/smartphone",
  },
  {
    type: "laptop",
    category: "laptop",

    path: "/admin/product/laptop",
  },
  {
    type: "tablet",
    category: "tablet",

    path: "/admin/product/tablet",
  },
  {
    type: "accessory",
    category: "accessory",
    path: "/admin/product/accessory",
  },
  {
    type: "swatch",
    category: "swatch",
    path: "/admin/product/swatch",
  },
  {
    type: "pc",
    category: "pc",
    path: "/admin/product/pc",
  },
];

const getTypeToGetData = (currentPath) => {
  let type = "";
  let category = "";
  typePaths.forEach((x, y) => {
    if (x.path.toLowerCase() === currentPath.toLowerCase()) {
      type = x.type.toUpperCase();
      category = x.category;
    }
  });
  return { type, category };
};
function AppBarCT(props) {
  const { pathname } = useLocation();

  // Handle get Data
  let objData = getTypeToGetData(pathname);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
    >
      <Toolbar>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <SearchIcon color="inherit" sx={{ display: "block" }} />
          </Grid>
          <Search category={objData.category} type={objData.type} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarCT;
