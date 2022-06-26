import { Box, Button } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { ADD_NEW_PC_PAGE_SAGA } from "../../../../../redux/sagas/types/main";
import AddSlider from "../../../global/ManagerAction/AddSlider";

function AddPCPage(props) {
  const dispatch = useDispatch();
  const { handleSubmit, values, errors, touched, setFieldValue } = useFormik({
    initialValues: {
      sliders: [],
    },
    validationSchema: Yup.object({
      sliders: Yup.array().test({
        message: "Slider phải có đúng 4 hình ảnh",
        test: (arr) => arr.length === 4,
      }),
    }),
    onSubmit: (values) => {
      const updateFieldData = {
        sliders: values.sliders,
      };
      dispatch({
        type: ADD_NEW_PC_PAGE_SAGA,
        values: updateFieldData,
      });
    },
  });

  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      style={{ width: "100%" }}
    >
      <Box
        style={{ width: "100%" }}
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
        <div className="px-4">
          <h1 className="text-center font-normal text-2xl">Tạo Trang PC mới</h1>
          <div className="">
            <AddSlider
              rootNameSlider={"sliders"}
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          </div>
        </div>

        <div className="my-4 flex items-center justify-center">
          <Button type="submit" variant="contained" color="primary">
            Thêm
          </Button>
        </div>
      </Box>
    </Box>
  );
}

export default AddPCPage;
