import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import BoltIcon from "@mui/icons-material/Bolt";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useEffect } from "react";
function CheckboxBtn(props) {
  const { search } = useLocation();
  const [checked, setChecked] = React.useState(() => {
    return queryString.parse(search)?.sort === "-createdAt" &&
      !queryString.parse(search)?.sort.includes("price")
      ? true
      : false;
  });
  const { first, title, category } = props;
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { checked } = event.target;
    let queryUrls = "";
    if (checked) {
      let queryParamObj = queryString.parse(search);
      queryParamObj = {
        ...queryParamObj,
        sort: "-createdAt",
      };
      queryUrls = queryString.stringify(queryParamObj);
    } else {
      let queryParamObj = queryString.parse(search);
      queryParamObj = {
        ...queryParamObj,
        sort: "createdAt",
      };
      queryUrls = queryString.stringify(queryParamObj);
    }
    navigate(`/${category}?${queryUrls}`);
    setChecked(checked);
  };

  useEffect(() => {
    if (queryString.parse(search)?.sort === "-createdAt") setChecked(true);
    return () => {
      setChecked(false);
    };
  }, [search]);

  return (
    <div
      className={`flex items-center rounded-lg ${
        first ? "bg-sky-100 text-green-500 px-4" : "bg-transparent text-black"
      }`}
    >
      <Checkbox
        size="small"
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <div className="">
        {first ? <BoltIcon /> : ""}
        <span>{title}</span>
      </div>
    </div>
  );
}

export default CheckboxBtn;
