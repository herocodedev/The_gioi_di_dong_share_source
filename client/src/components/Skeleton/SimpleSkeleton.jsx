import { Skeleton } from "@mui/material";
import React from "react";

function SimpleSkeleton(props) {
  const { width, height } = props;
  return (
    <Skeleton
      className="rounded-md my-2"
      width={width || "100%"}
      height={height || "100%"}
      animation="wave"
      variant="rectangular"
    />
  );
}

export default SimpleSkeleton;
