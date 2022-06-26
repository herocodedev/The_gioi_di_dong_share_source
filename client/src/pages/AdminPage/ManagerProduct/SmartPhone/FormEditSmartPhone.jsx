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
import InputFieldBrand from "../../../../components/Form/FormAddProduct/InputFieldBrand";
import InputFieldCamera from "../../../../components/Form/FormAddProduct/InputFieldCamera";
import InputFieldDesc from "../../../../components/Form/FormAddProduct/InputFieldDesc";
import InputFieldName from "../../../../components/Form/FormAddProduct/InputFieldName";
import InputFieldPerfomance from "../../../../components/Form/FormAddProduct/InputFieldPerfomance";
import InputFieldPrice from "../../../../components/Form/FormAddProduct/InputFieldPrice";
import InputFieldRam from "../../../../components/Form/FormAddProduct/InputFieldRam";
import InputFieldStorage from "../../../../components/Form/FormAddProduct/InputFieldStorage";
import InputFieldType from "../../../../components/Form/FormAddProduct/InputFieldType";
import InputFieldVideoDemo from "../../../../components/Form/FormAddProduct/InputFieldVideoDemo";
import { EDIT_SMARTPHONE_SAGA } from "../../../../redux/sagas/types/main";
import {
  selectCameraSmartPhone,
  selectColor,
  selectOpsBrandSmartphone,
  selectPerformanceSmartPhone,
  selectRamSmartPhone,
  selectStorageSmartPhone,
  selectTypeSmartPhone,
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

export default function FormEditSmartPhone(props) {
  const dispatch = useDispatch();
  const { product } = props;
  // console.log("product detail: ", product);
  const { handleSubmit, handleChange, values, errors, touched, setFieldValue } =
    useFormik({
      initialValues: {
        name: product?.name,
        images: [],
        description: product?.description,
        brand: product?.brand,
        price: product?.price,
        type: product?.type,
        performance: product?.performance,
        ram: product?.ram,
        storage: product?.storage,
        camera: product?.camera,
        idVideo: product?.idVideo,
      },
      validationSchema: Yup.object({
        name: Yup.string().required("Bạn không được bỏ trống"),
        description: Yup.string().required("Bạn không được bỏ trống"),
        brand: Yup.string().required("Bạn không được bỏ trống"),
        price: Yup.string().required("Bạn không được bỏ trống"),
        type: Yup.string().required("Bạn không được bỏ trống"),
        performance: Yup.string().required("Bạn không được bỏ trống"),
        ram: Yup.string().required("Bạn không được bỏ trống"),
        storage: Yup.string().required("Bạn không được bỏ trống"),
        idVideo: Yup.string().required("Bạn không được bỏ trống"),
        camera: Yup.string().required("Bạn không được bỏ trống"),
        images: Yup.array().test({
          message: "Sản phẩm phải có ít nhất một màu và hình ảnh",
          test: (arr) => arr.length !== 0,
        }),
      }),
      onSubmit: (values) => {
        dispatch({
          type: EDIT_SMARTPHONE_SAGA,
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

            {/* BRAND */}
            <div className="grid grid-cols-1 gap-2 mb-4">
              <div className="">
                <h1 className="my-2 font-semibold">Nhãn hiệu</h1>
                <InputFieldBrand
                  touched={touched}
                  values={values}
                  errors={errors}
                  handleChange={handleChange}
                  data={selectOpsBrandSmartphone}
                />
              </div>
            </div>
            {/* END BRAND  */}
            {/* RAM  + STORAGE */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="">
                <h1 className="my-2 font-semibold">Ram</h1>
                <InputFieldRam
                  touched={touched}
                  values={values}
                  errors={errors}
                  handleChange={handleChange}
                  data={selectRamSmartPhone}
                />
              </div>
              <div className="">
                <h1 className="my-2 font-semibold">Bộ nhớ</h1>
                <InputFieldStorage
                  touched={touched}
                  values={values}
                  errors={errors}
                  handleChange={handleChange}
                  data={selectStorageSmartPhone}
                />
              </div>
            </div>
            {/* END RAM  + STORAGE */}

            {/* TYPE  + CAMERA */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="">
                <h1 className="my-2 font-semibold">Camera</h1>
                <InputFieldCamera
                  touched={touched}
                  errors={errors}
                  values={values}
                  handleChange={handleChange}
                  data={selectCameraSmartPhone}
                />
              </div>
              <div className="">
                <h1 className="my-2 font-semibold">Loại điện thoại</h1>
                <InputFieldType
                  touched={touched}
                  errors={errors}
                  values={values}
                  handleChange={handleChange}
                  data={selectTypeSmartPhone}
                />
              </div>
            </div>
            {/* END TYPE  + CAMERA */}

            {/* PERFOMANCE + PRICE */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="">
                <h1 className="my-2 font-semibold">Hiệu năng</h1>
                <InputFieldPerfomance
                  touched={touched}
                  values={values}
                  errors={errors}
                  handleChange={handleChange}
                  data={selectPerformanceSmartPhone}
                />
              </div>
              <div className="">
                <h1 className="my-2 font-semibold">Giá</h1>
                <InputFieldPrice
                  touched={touched}
                  values={values}
                  errors={errors}
                  handleChange={handleChange}
                />
              </div>
            </div>
            {/* END PERFOMANCE + PRICE */}

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
