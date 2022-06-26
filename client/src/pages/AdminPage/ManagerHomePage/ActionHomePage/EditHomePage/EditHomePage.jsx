import { Box, Button } from "@mui/material";
import { useFormik } from "formik";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { EDIT_HOME_PAGE_SAGA } from "../../../../../redux/sagas/types/main";
import AddBanerProducts from "../../../global/ManagerAction/AddBannerProducts";
import AddBannerSlider from "../../../global/ManagerAction/AddBannerSlider";
import AddProducts from "../../../global/ManagerAction/AddProducts";
import AddSlider from "../../../global/ManagerAction/AddSlider";
import AddTitleSliderProducts from "../../../global/ManagerAction/AddTitleSliderProducts";

function EditHomePage(props) {
  const dispatch = useDispatch();
  const { dataHomePage } = useSelector((state) => state.page);
  let finalIndex = dataHomePage.length - 1;
  const { handleSubmit, values, errors, touched, setFieldValue } = useFormik({
    enableReinitialize: true,
    initialValues: {
      _id: dataHomePage[finalIndex]?._id,
      firstBanner: dataHomePage[finalIndex]?.firstBanner, // length === 1 -> ""
      firstSliders: dataHomePage[finalIndex]?.firstSliders,
      saleBanner: dataHomePage[finalIndex]?.saleBanner, // length === 1 -> ""
      productSales: dataHomePage[finalIndex]?.productSales,
      titleEvents: dataHomePage[finalIndex]?.titleEvents,
      bannerEvents: dataHomePage[finalIndex]?.bannerEvents,
      productEvents: dataHomePage[finalIndex]?.productEvents,
      productTrends: dataHomePage[finalIndex]?.productTrends,
      sliderPayOnlines: dataHomePage[finalIndex]?.sliderPayOnlines,
      productRecommends: dataHomePage[finalIndex]?.productRecommends,
      sliderBrands: dataHomePage[finalIndex]?.sliderBrands,
      sliderDeals: dataHomePage[finalIndex]?.sliderDeals,
    },
    validationSchema: Yup.object({
      firstBanner: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length === 1,
      }),
      firstSliders: Yup.array().test({
        message: "Slider phải có đúng 6 hình ảnh",
        test: (arr) => arr.length === 6,
      }),
      saleBanner: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length === 1,
      }),
      productSales: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      titleEvents: Yup.string().required("Bạn không được bỏ trống"),
      bannerEvents: Yup.array().test({
        message: "Banner phải có đúng 3 hình ảnh",
        test: (arr) => arr.length === 3,
      }),
      productEvents: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      productTrends: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      sliderPayOnlines: Yup.array().test({
        message: "Slider phải có đúng 6 hình ảnh",
        test: (arr) => arr.length === 6,
      }),
      productRecommends: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      sliderBrands: Yup.array().test({
        message: "Slider phải có đúng 3 hình ảnh",
        test: (arr) => arr.length === 3,
      }),
      sliderDeals: Yup.array().test({
        message: "Slider phải có đúng 4 hình ảnh",
        test: (arr) => arr.length === 4,
      }),
    }),
    onSubmit: (values) => {
      dispatch({
        type: EDIT_HOME_PAGE_SAGA,
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
          <h1 className="text-center font-normal text-2xl">
            Cập nhật trang chủ
          </h1>
          <div className="">
            <AddBannerSlider
              rootNameBanner="firstBanner"
              rootNameSlider="firstSliders"
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="">
            <AddBanerProducts
              type="Giảm giá sốc"
              rootNameBanner="saleBanner"
              rootNameProducts="productSales"
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="">
            <AddTitleSliderProducts
              rootNameTitle="titleEvents"
              rootNameSlider="bannerEvents"
              rootNameProducts="productEvents"
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="">
            <AddProducts
              rootNameProducts={"productTrends"}
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="">
            <AddSlider
              rootNameSlider={"sliderPayOnlines"}
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="">
            <AddProducts
              rootNameProducts={"productRecommends"}
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="">
            <AddSlider
              rootNameSlider={"sliderBrands"}
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="">
            <AddSlider
              rootNameSlider={"sliderDeals"}
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

export default EditHomePage;
