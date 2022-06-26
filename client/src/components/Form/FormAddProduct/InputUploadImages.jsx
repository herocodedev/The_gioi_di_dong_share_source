import * as React from "react";
import ImageIcon from "@mui/icons-material/Image";
export default function InputUploadImages(props) {
  const { errors, touched, setFieldValue } = props;

  const [fileUploads, setFileUploads] = React.useState([]);
  const handleInputChange = async (e) => {
    // Set file upload
    const { files } = e.target;

    setFieldValue("images", Array.from(files));
    setFileUploads(Array.from(files));
  };
  return (
    <div>
      <h1 className="my-2 font-semibold">Upload hình ảnh</h1>
      <div
        style={
          touched.images && errors?.images ? { border: "1px solid red" } : {}
        }
        className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
      >
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
              htmlFor="file-upload-multiple"
              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <span>Upload a file</span>
              <input
                id="file-upload-multiple"
                onChange={handleInputChange}
                multiple={true}
                accept=".jpg, .png, .gif"
                name="images"
                type="file"
                className="sr-only"
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <div className="flex text-sm text-gray-600">
            <label
              htmlFor="file-upload-multiple-2"
              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <span>Upload a file</span>
              <input
                id="file-upload-multiple-2"
                onChange={handleInputChange}
                multiple={true}
                accept=".jpg, .png, .gif"
                name="images"
                type="file"
                className="sr-only"
              />
            </label>
            <p className="pl-1">or drag and drop</p>
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
      {touched?.images && errors.images && (
        <p className="text-red-600 text-[12px] my-2">{errors?.images}</p>
      )}
    </div>
  );
}
