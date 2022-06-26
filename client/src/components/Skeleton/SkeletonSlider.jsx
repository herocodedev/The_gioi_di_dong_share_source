import { Skeleton } from "@mui/material";
import React from "react";

function SkeletonSlider(props) {
  return (
    <Skeleton
      variant="rectangular"
      className="rounded-md"
      width={"100%"}
      height={200}
    />
  );
}

export default SkeletonSlider;
