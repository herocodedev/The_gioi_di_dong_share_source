import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";

function CheckboxItemEdit(props) {
  const {
    isChecked,
    dataImages,
    ops,
    colorImages,
    index,
    setFieldValue,
    setColorImages,
  } = props;
  const [show, setShow] = useState(isChecked);
  const [fileUploads, setFileUploads] = React.useState([]);
  const [objData, setObjData] = useState({
    colorName: "",
    colorValue: "",
    imgs: [],
    index: index,
  });
  console.log("dataImages:", dataImages);
  const handleInputChange = async (e, index) => {
    // Set file upload
    const { files } = e.target;
    let newColorImages = [...colorImages];

    if (show) {
      // Push file to imgs
      objData.imgs = Array.from(files);

      // Set file upload to render img
      setFileUploads(Array.from(files));

      // Set all
      newColorImages.push(objData);

      setFieldValue("images", newColorImages);
      setColorImages(newColorImages);
    }
  };
  console.log("dataImages: ", dataImages);
  const handleCheckboxChange = (e, index) => {
    const { value, checked } = e.target;
    if (checked) {
      setObjData({
        ...objData,
        colorValue: value,
        colorName: ops.name,
        index,
      });
    } else {
      // Handle remove
      let newColorImages = [...colorImages];
      let filterColorImages = newColorImages.filter(
        (x, y) => x.index !== index
      );
      // Set field
      setFieldValue("images", filterColorImages);
      setColorImages(filterColorImages);
      // Reset img rendered
      setFileUploads([]);

      // Clear objData
      setObjData({
        colorName: "",
        colorValue: "",
        imgs: [],
      });
    }
    setShow(checked);
  };

  const renderImages = () => {
    if (dataImages.length > 0) {
      dataImages.map((item, index) => <img src={item} alt="" />);
    } else {
    }
  };
  return (
    <div className="">
      <div className="">
        <Checkbox
          disabled={dataImages.length > 0 ? true : false}
          checked={show}
          onChange={(e) => handleCheckboxChange(e, index)}
          value={ops.value}
          size="small"
        />
        <span className="text-[12px]">{ops.name}</span>
      </div>
      {dataImages.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {dataImages.map((item, index) => (
            <img key={index} src={item} alt="" />
          ))}
        </div>
      )}
      {show && dataImages.length === 0 && (
        <div>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor={`file-upload-multiple-smartphone-${index}`}
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <p className="text-center">Tải hình ảnh sản phẩm</p>
                  <input
                    id={`file-upload-multiple-smartphone-${index}`}
                    onChange={(e) => handleInputChange(e, index)}
                    multiple={true}
                    accept=".jpg, .png, .gif"
                    name={`images-${index}`}
                    type="file"
                    className="sr-only"
                  />
                </label>
              </div>
              <div className="text-xs text-gray-500">
                {fileUploads.map((item, index) => (
                  <p key={index}>
                    <ImageIcon />
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckboxItemEdit;
