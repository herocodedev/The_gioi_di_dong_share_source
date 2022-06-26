import { Box, Button } from "@mui/material";
import { useFormik } from "formik";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { EDIT_SWATCH_PAGE_SAGA } from "../../../../../redux/sagas/types/main";
import AddBanerProducts from "../../../global/ManagerAction/AddBannerProducts";
import AddSlider from "../../../global/ManagerAction/AddSlider";
import AddTitleProducts from "../../../global/ManagerAction/AddTitleProducts";

function EditSwatchPage(props) {
  const dispatch = useDispatch();
  const { dataSwatchPage } = useSelector((state) => state.page);
  let finalIndex = dataSwatchPage.length - 1;
  const { handleSubmit, values, errors, touched, setFieldValue } = useFormik({
    enableReinitialize: true,
    initialValues: {
      _id: dataSwatchPage[finalIndex]?._id,
      titleEvents: dataSwatchPage[finalIndex]?.titleEvents,
      productSwatchEvents: dataSwatchPage[finalIndex]?.productSwatchEvents,
      sliders: dataSwatchPage[finalIndex]?.sliders,
      bannerSwatch: dataSwatchPage[finalIndex]?.bannerSwatch,
      productSwatchs: dataSwatchPage[finalIndex]?.productSwatchs,
    },
    validationSchema: Yup.object({
      titleEvents: Yup.string().required("Bạn không được bỏ trống"),
      productSwatchEvents: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      sliders: Yup.array().test({
        message: "Slider phải có đúng 4 hình ảnh",
        test: (arr) => arr.length === 4,
      }),
      bannerSwatch: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      productSwatchs: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
    }),
    onSubmit: (values) => {
      dispatch({
        type: EDIT_SWATCH_PAGE_SAGA,
        values,
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
          <h1 className="text-center font-normal text-2xl">Cập nhật đồng hồ</h1>
          <div className="">
            <AddTitleProducts
              rootNameTitle={"titleEvents"}
              rootNameProducts={"productSwatchEvents"}
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="">
            <AddSlider
              rootNameSlider={"sliders"}
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          </div>

          <div className="">
            <AddBanerProducts
              type="Thời trang"
              rootNameBanner="bannerSwatch"
              rootNameProducts="productSwatchs"
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          </div>
        </div>

        <div className="my-4 flex items-center justify-center">
          <Button type="submit" variant="contained" color="primary">
            Cập nhật
          </Button>
        </div>
      </Box>
    </Box>
  );
}

export default EditSwatchPage;
