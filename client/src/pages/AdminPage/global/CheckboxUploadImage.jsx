import { Button, Checkbox, TextField } from "@mui/material";
import React, { useState } from "react";

function CheckboxUploadImage(props) {
  const [state, setState] = useState({
    isShowLink: false,
    isShowFile: false,
  });
  const {
    nameInputUploadByLink,
    nameInputUploadByFile,
    rootName,
    setFieldValue,
    setImgUploads,
    multiple,
    maxLength,
  } = props;
  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    // When change set img upload

    setFieldValue(rootName, []);
    setImgUploads([]);

    // Handle Show Textfield to upload
    if (name === nameInputUploadByLink) {
      setState({
        isShowLink: !state.isShowLink,
        isShowFile: false,
      });
    } else {
      setState({
        isShowLink: false,
        isShowFile: !state.isShowFile,
      });
    }
  };

  const handleInputUploadFileChange = (e) => {
    const { files } = e.target;
    if (!multiple) {
      setImgUploads(URL.createObjectURL(files[0]));
      setFieldValue(rootName, Array.from(files));
    } else {
      let arrFile = Array.from(files);
      let arrUrl = arrFile.map((item, index) => URL.createObjectURL(item));
      if (arrUrl.length !== maxLength) {
        alert(`Vui lòng nhập ${maxLength} số lượng hình ảnh`);
        return;
      }
      setImgUploads(arrUrl);
      setFieldValue(rootName, arrFile);
    }
  };

  const renderTextField = () => {
    let jsx = [];
    for (let i = 0; i < maxLength; i++) {
      let html = (
        <div key={i} className="flex items-center gap-2">
          <TextField
            className={`w-[80%] my-2 ${nameInputUploadByLink}`}
            id="standard-basic"
            label="Link hình ảnh"
            // onChange={handleInputUploadChange}
            variant="standard"
            placeholder="Ex: http://image.com"
          />
        </div>
      );
      jsx.push(html);
    }
    return jsx;
  };
  return (
    <div>
      <div className="flex flex-col">
        <div className="">
          <Checkbox
            checked={state.isShowLink}
            onChange={(e) => handleCheckboxChange(e)}
            name={nameInputUploadByLink}
            size="small"
          />
          <span className="font-normal">Thêm hình ảnh bằng link</span>
        </div>
        {state.isShowLink && (
          <div>
            {renderTextField()}
            <div className="my-2">
              <Button
                style={{ marginRight: 4 }}
                variant="outlined"
                size="small"
                onClick={() => {
                  let textFieldEls = document.querySelectorAll(
                    `.${nameInputUploadByLink} input`
                  );
                  let arrEl = Array.from(textFieldEls);
                  let arrValue = [];
                  arrEl.forEach((item, index) => {
                    if (item.value) arrValue.push(item.value);
                  });
                  if (arrValue.length === maxLength) {
                    setFieldValue(rootName, arrValue);
                    setImgUploads(arrValue);
                  } else {
                    alert("Vui lòng nhập đủ số lượng");
                  }
                }}
              >
                Thêm
              </Button>
              <Button
                style={{ marginRight: 4 }}
                variant="outlined"
                size="small"
                color="error"
                onClick={() => {
                  let textFieldEls = document.querySelectorAll(
                    `.${nameInputUploadByLink} input`
                  );
                  let arrEl = Array.from(textFieldEls);
                  arrEl.forEach((item, index) => {
                    item.value = "";
                  });
                  setFieldValue(rootName, []);
                  setImgUploads([]);
                }}
              >
                Xóa
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <div className="">
          <Checkbox
            checked={state.isShowFile}
            onChange={(e) => handleCheckboxChange(e)}
            name={nameInputUploadByFile}
            size="small"
          />
          <span className="font-normal">Upload hình ảnh từ máy</span>
        </div>
        {state.isShowFile && (
          <div className="mt-1 max-w-[80%] flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
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
                  htmlFor={nameInputUploadByFile}
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id={nameInputUploadByFile}
                    onChange={handleInputUploadFileChange}
                    multiple={multiple}
                    accept=".jpg, .png, .gif"
                    name={nameInputUploadByFile}
                    type="file"
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckboxUploadImage;
