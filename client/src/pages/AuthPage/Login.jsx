import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import background from "../../assests/img/bg.png";
import logo from "../../assests/img/logo_tgdd_no_text.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { LOGIN_SAGA } from "../../redux/sagas/types/main";
const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51d5",
    },
    secondary: {
      main: "#ffc400",
    },
  },
});

export default function Login() {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Bạn không được bỏ trống")
        .email("Email không hợp lệ"),
      password: Yup.string()
        .required("Bạn không được bỏ trống")
        .min(6, "Mật khẩu phải có ít nhất 6 kí tự"),
    }),
    onSubmit: (values) => {
      dispatch({
        type: LOGIN_SAGA,
        values,
      });
    },
  });
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="h-[50px] w-[50px] object-cover" src={logo} alt="" />

            <Typography component="h1" variant="h5" sx={{ m: 0.5 }}>
              Đăng nhập
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                error={touched.email && errors?.email ? true : false}
                margin="normal"
                required
                fullWidth
                value={values.email}
                id="email"
                label="Email"
                name="email"
                onChange={handleChange}
                autoComplete="email"
                autoFocus
                helperText={touched.email && errors?.email ? errors?.email : ""}
              />

              <TextField
                margin="normal"
                error={touched.password && errors?.password ? true : false}
                required
                fullWidth
                value={values.password}
                name="password"
                label="Mật khẩu"
                type="password"
                onChange={handleChange}
                helperText={
                  touched.password && errors?.password ? errors?.password : ""
                }
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Lưu tài khoản"
              />
              <Button
                type="submit"
                color="secondary"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Đăng nhập
              </Button>
              <Grid container>
                <Grid item>
                  <Link
                    to={"/register"}
                    className="cursor-pointer text-sm text-sky-600"
                  >
                    Bạn chưa có tài khoản? Đăng kí ngay
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
