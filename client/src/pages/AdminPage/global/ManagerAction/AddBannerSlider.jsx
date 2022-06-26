import AddIcon from "@mui/icons-material/Add";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import React, { useState } from "react";
import CheckboxUploadImage from "../../global/CheckboxUploadImage";

function AddBannerSlider(props) {
  const [banner, setBanner] = useState([]);
  const [sliders, setSliders] = useState([]);
  const {
    values,
    errors,
    touched,
    setFieldValue,
    rootNameBanner,
    rootNameSlider,
  } = props;
  const renderSlider = () => {
    // ----- Handle case edit -----
    if (sliders.length === 0 && values[rootNameSlider]?.length > 0) {
      // in case edit firstSliders had value
      return values[rootNameSlider]?.map((item, index) => (
        <img
          key={index}
          style={{ width: "100%" }}
          className="border-2 rounded-lg"
          src={item.url}
          alt="iamgeError"
        />
      ));
    }
    // ----- Handle case add -----
    if (sliders.length === 6) {
      return sliders.map((item, index) => {
        return (
          <img
            key={index}
            style={{ width: "100%" }}
            className="border-2 rounded-lg"
            src={item}
            alt=""
          />
        );
      });
    }
    let jsx = [];
    for (let i = 0; i < 6; i++) {
      let html = (
        <div
          key={i}
          className="h-[82px] flex justify-center items-center  rounded-lg bg-gray-200"
        >
          <p className="uppercase font-normal text-gray-400">Slider</p>
        </div>
      );
      jsx.push(html);
    }
    return jsx;
  };
  const renderBanner = () => {
    // Handle case edit
    if (!banner[0] && values[rootNameBanner]?.length > 0) {
      // in case edit firstbanner had value
      return (
        <img
          style={{ height: "100%", width: "100%" }}
          className="rounded-lg object-cover"
          src={values[rootNameBanner]?.url}
          alt="imageError"
        />
      );
    }
    // Handle case add banner
    return banner[0] ? (
      <img
        style={{ height: "100%", width: "100%" }}
        className="rounded-lg object-cover"
        src={banner}
        alt=""
      />
    ) : (
      <div className="h-[200px] w-[100%] flex justify-center items-center  bg-gray-200 rounded-lg">
        <p className="uppercase font-normal text-gray-400">banner</p>
      </div>
    );
  };
  return (
    <div className="grid my-4 grid-cols-1 md:grid-cols-2 gap-4">
      {/* Control */}
      <div className="flex flex-col justify-center">
        <h1 className="flex items-center text-xl font-medium">
          <AddIcon /> <p>Banner và slider</p>
        </h1>
        <div className="">
          {/* Title */}
          <h1 className="flex my-4 gap-2 items-center tex">
            <ViewKanbanIcon className="text-teal-500" /> <p>Banner </p>
          </h1>
          {/* Checkbox */}
          <CheckboxUploadImage
            values={values}
            errors={errors}
            touched={touched}
            setFieldValue={setFieldValue}
            rootName={rootNameBanner}
            nameInputUploadByLink={`input-upload-${rootNameBanner}-by-link`}
            nameInputUploadByFile={`input-upload-${rootNameBanner}-by-file`}
            imgUploads={banner}
            setImgUploads={setBanner}
            multiple={false}
            maxLength={1}
          />
          {touched[rootNameBanner] && errors[rootNameBanner] && (
            <p className="text-red-600 text-[14px] my-2">
              {errors[rootNameBanner]}
            </p>
          )}
        </div>
        {/* Title */}
        <div className="">
          <h1 className="flex my-4 gap-2 items-center tex">
            <ViewCarouselIcon className="text-teal-500" /> <p>Slider </p>
          </h1>
          {/* Checkbox */}
          <CheckboxUploadImage
            values={values}
            errors={errors}
            touched={touched}
            setFieldValue={setFieldValue}
            rootName={rootNameSlider}
            nameInputUploadByLink={`input-upload-${rootNameSlider}-by-link`}
            nameInputUploadByFile={`input-upload-${rootNameSlider}-by-file`}
            imgUploads={sliders}
            setImgUploads={setSliders}
            multiple={true}
            maxLength={6}
          />

          {touched[rootNameSlider] && errors[rootNameSlider] && (
            <p className="text-red-600 text-[14px] my-2">
              {errors[rootNameSlider]}
            </p>
          )}
        </div>
      </div>
      {/* Image render */}
      <div className="flex gap-2 flex-col">
        {/* Banner */}
        <div className="basis-1/2">{renderBanner()}</div>
        {/* Slider */}
        {/* <ListCT /> */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-2">{renderSlider()}</div>
        </div>
      </div>
    </div>
  );
}

export default AddBannerSlider;
