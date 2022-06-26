import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import TableCT from "../../../components/Table/TableCT";
import { SEARCH_USER } from "../../../redux/reducers/types/mainType";
import {
  DELETE_USER_SAGA,
  GET_ALL_USER_SAGA,
} from "../../../redux/sagas/types/main";
import Header from "../Layouts/Header";

const getSearchUser = (keyword, rootData) => {
  const arrUser = [];
  rootData.forEach((item, index) => {
    if (item.email.toLowerCase().includes(keyword.toLowerCase())) {
      arrUser.push(item);
    }
  });
  return arrUser;
};

const tabs = [
  {
    name: "Người dùng",
    path: "/admin/user",
  },
];

export default function ManagerUser() {
  const handleDrawerToggle = useOutletContext();
  const columns = [
    { field: "_id", headerName: "ID", width: 230 },
    { field: "firstName", headerName: "Họ", width: 100 },
    { field: "lastName", headerName: "Tên", width: 100 },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "admin",
      headerName: "Admin",
      sortable: false,
      width: 70,
    },
    {
      field: "createdAt",
      headerName: "Ngày tạo",
      sortable: false,
      width: 160,
    },
    {
      field: "action",
      headerName: "Hành động",
      width: 80,
      renderCell: (params) => {
        if (!params.row.admin) {
          return (
            <Button
              onClick={() => {
                if (
                  window.confirm("Bạn chắc chắc chắn muốn xóa người dùng này?")
                ) {
                  dispatch({
                    type: DELETE_USER_SAGA,
                    id: params.row._id,
                  });
                }
              }}
              variant="outlined"
              color="error"
            >
              Xóa
            </Button>
          );
        }
        return (
          <Button variant="contained" color="secondary">
            ADMIN
          </Button>
        );
      },
    },
  ];
  const typingTimeoutRef = useRef(null);
  const { users } = useSelector((state) => state.user);
  const { currentUsers } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    // Debounce search
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    const value = e.target.value;
    typingTimeoutRef.current = setTimeout(() => {
      if (value) {
        dispatch({
          type: SEARCH_USER,
          users: getSearchUser(value, users),
        });
      } else {
        dispatch({
          type: SEARCH_USER,
          users: users,
        });
      }
    }, 300);
  };

  useEffect(() => {
    dispatch({
      type: GET_ALL_USER_SAGA,
    });
  }, [dispatch]);

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Header
        title={"Quản lí người dùng"}
        tabs={tabs}
        onDrawerToggle={handleDrawerToggle}
      />
      <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: "#eaeff1" }}>
        <Paper sx={{ maxWidth: 936, margin: "auto", overflow: "hidden" }}>
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
                <Grid item xs>
                  <TextField
                    fullWidth
                    placeholder="Tìm kiếm email..."
                    onChange={handleSearch}
                    InputProps={{
                      disableUnderline: true,
                      sx: { fontSize: "default" },
                    }}
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <Button variant="contained" sx={{ mr: 1 }}>
                    Tìm kiếm
                  </Button>
                  <Tooltip title="Reload">
                    <IconButton>
                      <RefreshIcon color="inherit" sx={{ display: "block" }} />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <TableCT columns={columns} rows={currentUsers} />
        </Paper>
      </Box>
    </Box>
  );
}
