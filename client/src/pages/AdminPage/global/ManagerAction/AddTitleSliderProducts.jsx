import AddIcon from "@mui/icons-material/Add";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_MODAL_HOC } from "../../../../redux/reducers/types/mainType";
import ContentModalListProduct from "../../global/ContentModalListProduct";
import CheckboxUploadImage from "../../global/CheckboxUploadImage";

function AddTitleSliderProducts(props) {
  const dispatch = useDispatch();
  const [sliders, setSliders] = useState([]);
  const [title, setTitle] = useState("");
  const {
    values,
    errors,
    touched,
    setFieldValue,
    rootNameTitle,
    rootNameSlider,
    rootNameProducts,
  } = props;
  const { productChoosed } = useSelector((state) => state.global);
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
  const renderProducts = () => {
    // ---- Handle case edit ----
    if (
      productChoosed[rootNameProducts]?.length === 0 &&
      values[rootNameProducts]?.length > 0
    ) {
      return values[rootNameProducts]?.map((item, index) => (
        <img
          key={index}
          style={{ height: 100, objectFit: "contain" }}
          src={item?.images[0]?.imgs[0]?.url}
          alt="product"
        />
      ));
    }
    // ---- Handle case add ----
    return productChoosed[rootNameProducts]?.map((item, index) => (
      <img
        key={index}
        style={{ height: 100, objectFit: "contain" }}
        src={item?.images[0]?.imgs[0]?.url}
        alt="product"
      />
    ));
  };

  return (
    <div className="grid my-4 grid-cols-1 md:grid-cols-2 gap-4">
      {/* Control */}
      <div className="flex flex-col justify-center">
        <h1 className="flex items-center  text-xl font-medium">
          <AddIcon /> <p>Sự kiện</p>
        </h1>
        <div className="">
          <h1 className="flex mt-4 mb-2 gap-2 items-center">
            <TextFormatIcon className="text-teal-500" /> <p>Tiêu đề </p>
          </h1>
          {/* Checkbox */}
          <TextField
            className="w-[80%] my-2"
            id="standard-basic"
            label="Tiêu đề"
            name={rootNameTitle}
            value={values[rootNameTitle] ? values[rootNameTitle] : title}
            onChange={(e) => {
              setTitle(e.target.value);
              setFieldValue(rootNameTitle, e.target.value);
            }}
            variant="standard"
            placeholder="Ex: Đại tiệc sam sung"
          />
          {touched[rootNameTitle] && errors[rootNameTitle] && (
            <p className="text-red-600 text-[14px] my-2">
              {errors[rootNameTitle]}
            </p>
          )}
        </div>
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
            maxLength={3}
          />
          {touched[rootNameSlider] && errors[rootNameSlider] && (
            <p className="text-red-600 text-[14px] my-2">
              {errors[rootNameSlider]}
            </p>
          )}
        </div>

        <div className="">
          <h1 className="flex my-4 gap-2 items-center tex">
            <AllInboxIcon className="text-teal-500" /> <p>Sản phẩm </p>
          </h1>
          <div className="my-2">
            <Button
              onClick={() => {
                dispatch({
                  type: OPEN_MODAL_HOC,
                  ComponentContentModal: (
                    <ContentModalListProduct
                      rootName={rootNameProducts}
                      setFieldValue={setFieldValue}
                    />
                  ),
                });
              }}
              style={{ marginRight: 4 }}
              variant="outlined"
              size="small"
            >
              Chọn và thêm
            </Button>
          </div>
          {touched[rootNameProducts] && errors[rootNameProducts] && (
            <p className="text-red-600 text-[14px] my-2">
              {errors[rootNameProducts]}
            </p>
          )}
        </div>
      </div>
      {/* Image render */}
      <div className="flex gap-2 flex-col">
        {/* Title */}
        <div className="">
          <h1 className="flex gap-2">
            <strong>Tiêu đề:</strong>
            <p className="">
              {values[rootNameTitle] ? values[rootNameTitle] : title}
            </p>
          </h1>
        </div>
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {renderSlider()}
          </div>
        </div>
        {productChoosed[rootNameProducts]?.length ||
        values[rootNameProducts]?.length > 0 ? (
          <div className="grid-cols-2 md:grid-cols-3 grid lg:grid-cols-4 gap-2">
            {renderProducts()}
          </div>
        ) : (
          <div className="h-[100%] flex justify-center items-center  rounded-lg bg-gray-200">
            <p className="uppercase font-normal text-gray-400">Sản phẩm</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddTitleSliderProducts;
