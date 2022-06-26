import { Alert, createTheme, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import InputFieldColorCT from "../../../../components/Form/FormAddProduct/CheckboxField/InputFieldColorCT";
import InputFieldBrand from "../../../../components/Form/FormAddProduct/InputFieldBrand";
import InputFieldDesc from "../../../../components/Form/FormAddProduct/InputFieldDesc";
import InputFieldName from "../../../../components/Form/FormAddProduct/InputFieldName";
import InputFieldOps from "../../../../components/Form/FormAddProduct/InputFieldOps";
import InputFieldPrice from "../../../../components/Form/FormAddProduct/InputFieldPrice";
import InputFieldRam from "../../../../components/Form/FormAddProduct/InputFieldRam";
import InputFieldScreen from "../../../../components/Form/FormAddProduct/InputFieldScreen";
import InputFieldStorage from "../../../../components/Form/FormAddProduct/InputFieldStorage";
import InputFieldVideoDemo from "../../../../components/Form/FormAddProduct/InputFieldVideoDemo";
import { ADD_PC_SAGA } from "../../../../redux/sagas/types/main";
import {
  selectColor,
  selectOpsBrandPC,
  selectOpsScreenPC,
  selectOpsSys,
  selectRamPC,
  selectStoragePC,
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

export default function FormAddTablet() {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, touched, setFieldValue } =
    useFormik({
      initialValues: {
        name: "",
        images: [],
        description: "",
        brand: "",
        screen: "",
        ram: "",
        storage: "",
        operateSys: "",
        price: "",
        idVideo: "",
      },
      validationSchema: Yup.object({
        name: Yup.string().required("Bạn không được bỏ trống"),
        description: Yup.string().required("Bạn không được bỏ trống"),
        brand: Yup.string().required("Bạn không được bỏ trống"),
        price: Yup.string().required("Bạn không được bỏ trống"),
        screen: Yup.string().required("Bạn không được bỏ trống"),
        storage: Yup.string().required("Bạn không được bỏ trống"),
        ram: Yup.string().required("Bạn không được bỏ trống"),
        operateSys: Yup.string().required("Bạn không được bỏ trống"),
        idVideo: Yup.string().required("Bạn không được bỏ trống"),
        images: Yup.array().test({
          message: "Sản phẩm phải có ít nhất một màu và hình ảnh",
          test: (arr) => arr.length !== 0,
        }),
      }),
      onSubmit: (values) => {
        values = {
          ...values,
          price: Number(values.price),
          ram: Number(values.ram),
          storage: Number(values.storage),
        };
        dispatch({
          type: ADD_PC_SAGA,
          values,
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
            Thêm PC
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
                  data={selectOpsBrandPC}
                />
              </div>
            </div>
            {/* END BRAND  */}

            {/* RAM  + STORAGE */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="">
                <h1 className="my-2 font-semibold">Ram</h1>
                <InputFieldRam
                  values={values}
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  data={selectRamPC}
                />
              </div>
              <div className="">
                <h1 className="my-2 font-semibold">Bộ nhớ</h1>
                <InputFieldStorage
                  touched={touched}
                  values={values}
                  errors={errors}
                  handleChange={handleChange}
                  data={selectStoragePC}
                />
              </div>
            </div>
            {/* END RAM  + STORAGE */}

            {/* OPERATESYS */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="">
                <h1 className="my-2 font-semibold">Hệ điều hành</h1>
                <InputFieldOps
                  touched={touched}
                  errors={errors}
                  values={values}
                  handleChange={handleChange}
                  data={selectOpsSys}
                />
              </div>
            </div>
            {/* END OPERATESYS */}

            {/* PRICE + SCREEN */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="">
                <h1 className="my-2 font-semibold">Màn hình</h1>
                <InputFieldScreen
                  touched={touched}
                  values={values}
                  errors={errors}
                  handleChange={handleChange}
                  data={selectOpsScreenPC}
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
            {/* END PRICE + SCREEN */}

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

            <div className="grid grid-cols-1 ">
              <div className="my-2 font-semibold">
                <h1 className="">Màu sắc và hình ảnh</h1>
                <Alert severity="warning" className="mt-2">
                  Khi chọn màu bạn phải upload ít nhất 1 hình ảnh của sản phẩm
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

            <Button
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Thêm
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
