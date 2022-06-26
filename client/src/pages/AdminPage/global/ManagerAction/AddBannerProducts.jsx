import AddIcon from "@mui/icons-material/Add";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_MODAL_HOC } from "../../../../redux/reducers/types/mainType";
import ContentModalListProduct from "../../global/ContentModalListProduct";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import CheckboxUploadImage from "../../global/CheckboxUploadImage";

function AddBanerProducts(props) {
  const [banner, setBanner] = useState([]);
  const dispatch = useDispatch();
  const { productChoosed } = useSelector((state) => state.global);
  const {
    values,
    errors,
    touched,
    setFieldValue,
    type,
    rootNameBanner,
    rootNameProducts,
  } = props;
  const renderBanner = () => {
    // Handle case edit
    if (!banner[0] && values[rootNameBanner]?.length > 0) {
      // in case edit saleBanner had value
      return (
        <img
          style={{ height: "100%", width: "100%" }}
          className="rounded-lg object-contain"
          src={values[rootNameBanner] ? values[rootNameBanner][0]?.url : ""}
          alt="imageError"
        />
      );
    }
    // Handle case add banner
    return banner[0] ? (
      <img
        style={{ maxHeight: 200, width: "100%" }}
        className="rounded-lg object-contain"
        src={banner}
        alt=""
      />
    ) : (
      <div className="h-[200px] w-[100%] flex justify-center items-center  bg-gray-200 rounded-lg">
        <p className="uppercase font-normal text-gray-400">banner</p>
      </div>
    );
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
          <AddIcon /> <p>{type ? type.toUpperCase() : ""}</p>
        </h1>

        <div className="">
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
            {touched[rootNameProducts] && errors[rootNameProducts] && (
              <p className="text-red-600 text-[14px] my-2">
                {errors[rootNameProducts]}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* Image render */}
      <div className="flex gap-2 flex-col">
        <div className="basis-1/2">{renderBanner()}</div>

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

export default AddBanerProducts;
