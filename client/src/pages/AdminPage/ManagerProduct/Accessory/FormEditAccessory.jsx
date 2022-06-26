import { Alert, createTheme, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import InputFieldColorCT from "../../../../components/Form/FormAddProduct/CheckboxField/InputFieldColorCT";
import InputFieldDesc from "../../../../components/Form/FormAddProduct/InputFieldDesc";
import InputFieldName from "../../../../components/Form/FormAddProduct/InputFieldName";
import InputFieldPrice from "../../../../components/Form/FormAddProduct/InputFieldPrice";
import InputFieldType from "../../../../components/Form/FormAddProduct/InputFieldType";
import InputFieldVideoDemo from "../../../../components/Form/FormAddProduct/InputFieldVideoDemo";
import { EDIT_ACCESSORY_SAGA } from "../../../../redux/sagas/types/main";
import {
  selectColor,
  selectTypeAccessory,
} from "../../../../utils/Settings/data";
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

export default function FormEditAccessory(props) {
  const dispatch = useDispatch();
  const { product } = props;
  // console.log("product detail: ", product);
  const { handleSubmit, handleChange, values, errors, touched, setFieldValue } =
    useFormik({
      initialValues: {
        name: product?.name,
        images: [],
        description: product?.description,
        price: product?.price,
        type: product?.type,
        idVideo: product?.idVideo,
      },
      validationSchema: Yup.object({
        name: Yup.string().required("Bạn không được bỏ trống"),
        description: Yup.string().required("Bạn không được bỏ trống"),
        price: Yup.string().required("Bạn không được bỏ trống"),
        type: Yup.string().required("Bạn không được bỏ trống"),
        idVideo: Yup.string().required("Bạn không được bỏ trống"),
        images: Yup.array().test({
          message: "Sản phẩm phải có ít nhất một màu và hình ảnh",
          test: (arr) => arr.length !== 0,
        }),
      }),
      onSubmit: (values) => {
        dispatch({
          type: EDIT_ACCESSORY_SAGA,
          values: {
            ...values,
            _id: product._id,
            oldImgs: product.images,
          },
        });
      },
    });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ m: 0.5 }}>
            Cập nhật điện thoại
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {/* NAME */}
            <h1 className="font-bold">Tên sản phẩm</h1>
            <InputFieldName
              touched={touched}
              values={values}
              errors={errors}
              handleChange={handleChange}
            />
            {/* END NAME */}

            {/* DESCRIPTION */}
            <h1 className="my-2 font-semibold">Mô tả</h1>
            <InputFieldDesc
              touched={touched}
              values={values}
              errors={errors}
              handleChange={handleChange}
            />
            {/* END DESCRIPTION */}

            {/* TYPE  + CAMERA */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="">
                <h1 className="my-2 font-semibold">Giá</h1>
                <InputFieldPrice
                  touched={touched}
                  values={values}
                  errors={errors}
                  handleChange={handleChange}
                />
              </div>
              <div className="">
                <h1 className="my-2 font-semibold">Loại phụ kiện</h1>
                <InputFieldType
                  touched={touched}
                  errors={errors}
                  values={values}
                  handleChange={handleChange}
                  data={selectTypeAccessory}
                />
              </div>
            </div>
            {/* END TYPE  + CAMERA */}

            {/*  VIDEO */}
            <div className="">
              <h1 className="font-bold">ID Video sản phẩm</h1>
              <Alert severity="info">
                Bạn có thể lấy ID này: ptLhOKtyu9U
                <br />
              </Alert>
              <Alert severity="warning" className="mt-2">
                Lưu ý: ID trên chỉ là ID tạm thời cho video demo sản phẩm . Nếu
                muốn lấy id chính xác bạn cần phải lấy
                <a
                  className="text-sky-600 mx-2"
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Tại đây
                </a>
              </Alert>
              <InputFieldVideoDemo
                touched={touched}
                values={values}
                errors={errors}
                handleChange={handleChange}
              />
            </div>
            {/*  END VIDEO */}

            {/* IMAGES + COLOR */}
            <div className="grid grid-cols-1 ">
              <div className="my-2 font-semibold">
                <h1 className="">Màu sắc và hình ảnh</h1>
                <Alert severity="warning" className="mt-2">
                  Khi chọn màu bạn phải upload ít nhất 1 hình ảnh của sản phẩm
                </Alert>
                <Alert severity="warning" className="mt-2">
                  Khi cập nhật lại sản phẩm bạn phải thêm hình lại từ đầu
                </Alert>
              </div>
              <InputFieldColorCT
                values={values}
                touched={touched}
                errors={errors}
                setFieldValue={setFieldValue}
                data={selectColor}
              />
            </div>
            {/* IMAGES + COLOR */}

            <Button
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cập nhật
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
