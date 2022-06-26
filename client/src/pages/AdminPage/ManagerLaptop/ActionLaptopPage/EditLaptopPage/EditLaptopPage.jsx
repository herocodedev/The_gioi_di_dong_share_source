import { Box, Button } from "@mui/material";
import { useFormik } from "formik";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { EDIT_LAPTOP_PAGE_SAGA } from "../../../../../redux/sagas/types/main";
import AddBanerProducts from "../../../global/ManagerAction/AddBannerProducts";
import AddSlider from "../../../global/ManagerAction/AddSlider";
import AddTitleProducts from "../../../global/ManagerAction/AddTitleProducts";

function EditHomePage(props) {
  const dispatch = useDispatch();
  const { dataLaptopPage } = useSelector((state) => state.page);
  let finalIndex = dataLaptopPage.length - 1;
  const { handleSubmit, values, errors, touched, setFieldValue } = useFormik({
    enableReinitialize: true,
    initialValues: {
      _id: dataLaptopPage[finalIndex]?._id,
      titleEvents: dataLaptopPage[finalIndex]?.titleEvents,
      productLaptopEvents: dataLaptopPage[finalIndex]?.productLaptopEvents,
      sliders: dataLaptopPage[finalIndex]?.sliders,
      bannerLaptopGaming: dataLaptopPage[finalIndex]?.bannerLaptopGaming,
      productLaptopGamings: dataLaptopPage[finalIndex]?.productLaptopGamings,
      bannerLaptopMac: dataLaptopPage[finalIndex]?.bannerLaptopMac,
      productLaptopMacs: dataLaptopPage[finalIndex]?.productLaptopMacs,
      bannerLaptopOffice: dataLaptopPage[finalIndex]?.bannerLaptopOffice,
      productLaptopOffices: dataLaptopPage[finalIndex]?.productLaptopOffices,
      bannerLaptopCode: dataLaptopPage[finalIndex]?.bannerLaptopCode,
      productLaptopCodes: dataLaptopPage[finalIndex]?.productLaptopCodes,
      bannerLaptopThin: dataLaptopPage[finalIndex]?.bannerLaptopThin,
      productLaptopThins: dataLaptopPage[finalIndex]?.productLaptopThins,
      bannerLaptopLuxurious: dataLaptopPage[finalIndex]?.bannerLaptopLuxurious,
      productLaptopLuxurious:
        dataLaptopPage[finalIndex]?.productLaptopLuxurious,
    },
    validationSchema: Yup.object({
      titleEvents: Yup.string().required("Bạn không được bỏ trống"),
      productLaptopEvents: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      sliders: Yup.array().test({
        message: "Slider phải có đúng 4 hình ảnh",
        test: (arr) => arr.length === 4,
      }),
      bannerLaptopGaming: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length === 1,
      }),
      productLaptopGamings: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      bannerLaptopMac: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      productLaptopMacs: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      bannerLaptopOffice: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      productLaptopOffices: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      bannerLaptopCode: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      productLaptopCodes: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      bannerLaptopThin: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      productLaptopThins: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      bannerLaptopLuxurious: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      productLaptopLuxurious: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
    }),
    onSubmit: (values) => {
      dispatch({
        type: EDIT_LAPTOP_PAGE_SAGA,
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
            Cập nhật trang laptop
          </h1>
          <div className="">
            <AddTitleProducts
              rootNameTitle={"titleEvents"}
              rootNameProducts={"productLaptopEvents"}
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
              type="gamming"
              rootNameBanner="bannerLaptopGaming"
              rootNameProducts="productLaptopGamings"
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="">
            <AddBanerProducts
              type="macbook"
              rootNameBanner="bannerLaptopMac"
              rootNameProducts="productLaptopMacs"
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="">
            <AddBanerProducts
              type="office"
              rootNameBanner="bannerLaptopOffice"
              rootNameProducts="productLaptopOffices"
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="">
            <AddBanerProducts
              type="code"
              rootNameBanner="bannerLaptopCode"
              rootNameProducts="productLaptopCodes"
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="">
            <AddBanerProducts
              type="thin"
              rootNameBanner="bannerLaptopThin"
              rootNameProducts="productLaptopThins"
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="">
            <AddBanerProducts
              type="luxurious"
              rootNameBanner="bannerLaptopLuxurious"
              rootNameProducts="productLaptopLuxurious"
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
