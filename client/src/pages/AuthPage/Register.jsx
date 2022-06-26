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
import { useDispatch } from "react-redux";
import background from "../../assests/img/bg.png";
import * as Yup from "yup";
import logo from "../../assests/img/logo_tgdd_no_text.png";
import { useFormik } from "formik";
import { REGISTER_SAGA } from "../../redux/sagas/types/main";
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

export default function SignUp() {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Bạn không được bỏ trống"),
      lastName: Yup.string().required("Bạn không được bỏ trống"),
      email: Yup.string()
        .required("Bạn không được bỏ trống")
        .email("Email không hợp lệ"),
      password: Yup.string()
        .required("Bạn không được bỏ trống")
        .min(6, "Mật khẩu phải có ít nhất 6 kí tự"),
      confirmPassword: Yup.string()
        .required("Bạn không được bỏ trống")
        .oneOf(
          [Yup.ref("password"), null],
          "Mật khẩu nhập lại không chính xác"
        ),
    }),
    onSubmit: (values) => {
      dispatch({
        type: REGISTER_SAGA,
        values,
      });
    },
  });

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
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

            <Typography component="h1" variant="h5" sx={{ m: 1 }}>
              Đăng kí thành viên
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    error={
                      touched.firstName && errors?.firstName ? true : false
                    }
                    value={values.firstName}
                    onChange={handleChange}
                    helperText={
                      touched.firstName && errors?.firstName
                        ? errors?.firstName
                        : ""
                    }
                    id="firstName"
                    label="Họ"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    error={touched.lastName && errors?.lastName ? true : false}
                    value={values.lastName}
                    onChange={handleChange}
                    helperText={
                      touched.lastName && errors?.lastName
                        ? errors?.lastName
                        : ""
                    }
                    label="Tên"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    error={touched.email && errors?.email ? true : false}
                    value={values.email}
                    onChange={handleChange}
                    helperText={
                      touched.email && errors?.email ? errors?.email : ""
                    }
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    error={touched.password && errors?.password ? true : false}
                    value={values.password}
                    onChange={handleChange}
                    helperText={
                      touched.password && errors?.password
                        ? errors?.password
                        : ""
                    }
                    label="Mật khẩu"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    error={
                      touched.confirmPassword && errors?.confirmPassword
                        ? true
                        : false
                    }
                    value={values.confirmPassword}
                    onChange={handleChange}
                    helperText={
                      touched.confirmPassword && errors?.confirmPassword
                        ? errors?.confirmPassword
                        : ""
                    }
                    label="Nhập lại mật khẩu"
                    type="password"
                    id="confirmPassword"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="Bạn chắc chắn đồng ý với các điều khoản của chúng tôi?"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                color="secondary"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Đăng kí
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    to="/login"
                    className="cursor-pointer text-sm text-sky-600"
                  >
                    Bạn đã có tài khoản? Đăng nhập
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
