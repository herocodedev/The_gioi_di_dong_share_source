import { Button } from "@mui/material";
import React from "react";

function ContentItem(props) {
  const { data, keyData } = props;
  return (
    <Button variant="outlined">
      <h1 className="font-semibold uppercase">{data ? data[keyData] : 0}</h1>
    </Button>
  );
}

export default ContentItem;
