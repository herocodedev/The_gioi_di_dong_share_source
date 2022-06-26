import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import CheckboxUploadImage from "../../global/CheckboxUploadImage";

function AddSlider(props) {
  const [sliders, setSliders] = useState([]);
  const { values, errors, touched, setFieldValue, rootNameSlider } = props;
  const renderSlider = () => {
    // ----- Handle case edit -----
    if (sliders.length === 0 && values[rootNameSlider]?.length > 0) {
      // in case edit sliders had value
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
    if (sliders.length === 4) {
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
    for (let i = 0; i < 4; i++) {
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
  return (
    <div className="grid my-4 grid-cols-1 md:grid-cols-2 gap-4">
      {/* Control */}
      <div className="flex flex-col justify-center">
        <h1 className="flex items-center text-xl font-medium">
          <AddIcon /> <p>Slider</p>
        </h1>

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
            maxLength={4}
          />
          {touched[rootNameSlider] && errors[rootNameSlider] && (
            <p className="text-red-600 text-[14px] my-2">
              {errors[rootNameSlider]}
            </p>
          )}
        </div>
      </div>
      {/* Image render */}
      <div className="flex gap-2 flex-col justify-center">
        <div className="grid grid-cols-2 gap-2">{renderSlider()}</div>
      </div>
    </div>
  );
}

export default AddSlider;
