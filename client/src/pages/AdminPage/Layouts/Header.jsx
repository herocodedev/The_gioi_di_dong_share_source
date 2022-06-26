import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HelpIcon from "@mui/icons-material/Help";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { deepOrange } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import { Link, useLocation } from "react-router-dom";
const lightColor = "rgba(255, 255, 255, 0.7)";

const getLocationIndex = (currentPath, tabs) => {
  let activeIndex = 0;
  tabs?.forEach((item, index) => {
    if (item.path === currentPath) {
      activeIndex = index;
    }
  });
  return activeIndex;
};

function Header(props) {
  const { onDrawerToggle, title, tabs } = props;
  const { pathname } = useLocation();

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: "none", xs: "block" } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <div className="flex items-center gap-2">
                <ArrowForwardIosIcon />{" "}
                <h1 className="text-center text-xl">Thế Giới Di Động Admin</h1>
              </div>
            </Grid>

            <Grid item xs />

            <Grid item>
              <Tooltip title="Thông báo">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" sx={{ p: 0.5 }}>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>
                  <AdminPanelSettingsIcon />
                </Avatar>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                sx={{ borderColor: lightColor }}
                variant="outlined"
                color="inherit"
                size="small"
              >
                Thiết lập
              </Button>
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Tabs value={getLocationIndex(pathname, tabs) || 0} textColor="inherit">
          {tabs?.map((x, y) => {
            return <Tab component={Link} to={x.path} key={y} label={x.name} />;
          })}
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
