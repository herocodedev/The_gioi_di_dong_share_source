import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

export default function BoxPrice(props) {
  const { search } = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { category } = props;
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleSort = (sort) => {
    let queryUrls = "";
    if (sort) {
      let queryParamObj = queryString.parse(search);
      queryParamObj = {
        ...queryParamObj,
        sort,
      };
      queryUrls = queryString.stringify(queryParamObj);
    } else {
      let queryParamObj = queryString.parse(search);
      queryParamObj = {
        ...queryParamObj,
        sort: "-createdAt",
      };
      queryUrls = queryString.stringify(queryParamObj);
    }
    navigate(`/${category}?${queryUrls}`);
  };
  return (
    <div>
      <Button
        aria-describedby={id}
        size="small"
        variant="text"
        onClick={handleClick}
      >
        <span className=""> Sắp xếp theo giá</span>
        <span>
          <KeyboardArrowDownIcon />
        </span>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <ul className="cursor-pointer">
          <li
            onClick={() => {
              handleSort("");
            }}
            className="hover:font-semibold px-4 py-2 border-b-gray-300"
          >
            <span className="flex items-center gap-2">
              <AutoFixNormalIcon /> Mặc định
            </span>
          </li>
          <li
            onClick={() => {
              handleSort("price");
            }}
            className="hover:font-semibold px-4 py-2 border-b-[1px] border-t-[1px] border-b-gray-300"
          >
            <span className="flex items-center gap-2">
              <ArrowDropUpIcon /> Thấp lên cao
            </span>
          </li>
          <li
            onClick={() => {
              handleSort("-price");
            }}
            className="hover:font-semibold px-4 py-2  border-b-gray-300"
          >
            <span className="flex items-center gap-2">
              <ArrowDropDownIcon /> Cao xuống thấp
            </span>
          </li>
        </ul>
      </Popover>
    </div>
  );
}
