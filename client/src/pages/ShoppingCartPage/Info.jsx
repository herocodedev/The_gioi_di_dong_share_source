import { Checkbox, TextField } from "@mui/material";
import { memo, useState } from "react";

function Info(props) {
  const [gender, setGender] = useState("");
  const { setFieldValue, errors, handleChange, touched } = props;
  return (
    <div className="py-4 ">
      <h1 className="text-center font-semibold text-base">
        THÔNG TIN KHÁCH HÀNG
      </h1>
      {/* Male */}
      <div className="flex flex-col flex-wrap">
        <div className="flex flex-wrap">
          <div className="flex items-center ">
            <Checkbox
              onChange={() => {
                setGender("male");
                setFieldValue("gender", "male");
              }}
              size="small"
              checked={gender === "male"}
              inputProps={{ "aria-label": "controlled" }}
            />
            <span>Anh</span>
          </div>
          <div className="flex items-center ">
            <Checkbox
              onChange={() => {
                setGender("female");
                setFieldValue("gender", "female");
              }}
              size="small"
              checked={gender === "female"}
              inputProps={{ "aria-label": "controlled" }}
            />
            <span>Chị</span>
          </div>
        </div>
        <p className=" text-left text-red-600 text-sm">
          {touched?.gender && errors?.gender ? errors?.gender : ""}
        </p>
      </div>

      {/* Name + phone */}
      <div className="flex flex-col md:flex-row my-2 gap-2 ">
        <div className="flex flex-col md:basis-1/2">
          <TextField
            onChange={handleChange}
            name="name"
            style={{ width: "100%" }}
            id="filled-basic"
            label="Họ và tên"
            variant="filled"
          />

          <p className=" text-left text-red-600 text-sm">
            {touched?.name && errors?.name ? errors?.name : ""}
          </p>
        </div>
        <div className="flex flex-col md:basis-1/2">
          <TextField
            onChange={handleChange}
            name="phone"
            style={{ width: "100%" }}
            id="filled-basic"
            label="Số điện thoại"
            variant="filled"
          />
          <p className=" text-left text-red-600 text-sm">
            {touched?.phone && errors?.phone ? errors?.phone : ""}
          </p>
        </div>
      </div>
      <div className="my-2">
        <TextField
          onChange={handleChange}
          name="address"
          style={{ width: "100%" }}
          id="filled-basic"
          label="Địa chỉ"
          variant="filled"
        />
        <p className=" text-left text-red-600 text-sm">
          {touched?.address && errors?.address ? errors?.address : ""}
        </p>
      </div>
    </div>
  );
}

export default memo(Info);
