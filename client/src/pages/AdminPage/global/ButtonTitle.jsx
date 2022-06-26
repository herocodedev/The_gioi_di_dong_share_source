import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import React, { memo } from "react";
import { Link } from "react-router-dom";
function ButtonTitle(props) {
  const { title } = props;
  return (
    <div className="flex items-center gap-2 my-2">
      <h1 className="flex my-2">
        <AddIcon /> <p>{title}</p>
      </h1>
      <Link to={"edit"}>
        <Button variant="outlined">Cập nhật</Button>
      </Link>
    </div>
  );
}

export default memo(ButtonTitle);
