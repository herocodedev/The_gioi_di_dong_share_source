import { Box, Button } from "@mui/material";
import { useFormik } from "formik";
import * as React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { ADD_NEW_ACCESSORY_PAGE_SAGA } from "../../../../../redux/sagas/types/main";
import AddBanerProducts from "../../../global/ManagerAction/AddBannerProducts";
import AddSlider from "../../../global/ManagerAction/AddSlider";

function AddAccessoryPage(props) {
  const dispatch = useDispatch();
  const { handleSubmit, values, errors, touched, setFieldValue } = useFormik({
    initialValues: {
      sliders: [],
      bannerEvents: [],
      productAccessoryEvents: [],
      bannerAppleAccessory: [],
      productAppleAccessorys: [],
      bannerCharingCable: [],
      productCharingCables: [],
      bannerBackupCharger: [],
      productBackupChargers: [],
      bannerAccessoryGaming: [],
      productAccessoryGamings: [],
    },
    validationSchema: Yup.object({
      sliders: Yup.array().test({
        message: "Slider phải có đúng 4 hình ảnh",
        test: (arr) => arr.length === 4,
      }),
      bannerEvents: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      productAccessoryEvents: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      bannerAppleAccessory: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      productAppleAccessorys: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      bannerCharingCable: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      productCharingCables: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      bannerBackupCharger: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      productBackupChargers: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      bannerAccessoryGaming: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
      productAccessoryGamings: Yup.array().test({
        message: "Bạn không được bỏ trống",
        test: (arr) => arr.length > 0,
      }),
    }),
    onSubmit: (values) => {
      dispatch({
        type: ADD_NEW_ACCESSORY_PAGE_SAGA,
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
            Tạo Trang phụ kiện mới
          </h1>

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
              type="event"
              rootNameBanner="bannerEvents"
              rootNameProducts="productAccessoryEvents"
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          </div>

          <div className="">
            <AddBanerProducts
              type="apple"
              rootNameBanner="bannerAppleAccessory"
              rootNameProducts="productAppleAccessorys"
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="">
            <AddBanerProducts
              type="charing cable"
              rootNameBanner="bannerCharingCable"
              rootNameProducts="productCharingCables"
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="">
            <AddBanerProducts
              type="backup charger"
              rootNameBanner="bannerBackupCharger"
              rootNameProducts="productBackupChargers"
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="">
            <AddBanerProducts
              type="gamming"
              rootNameBanner="bannerAccessoryGaming"
              rootNameProducts="productAccessoryGamings"
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

export default AddAccessoryPage;
