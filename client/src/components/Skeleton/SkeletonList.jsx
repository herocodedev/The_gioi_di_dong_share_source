import { Skeleton } from "@mui/material";
import React from "react";
import SkeletonCT from "./SkeletonCTItem";

function SkeletonList(props) {
  const { quantityLoading } = props;
  const renderSkeleton = () => {
    let jsx = [];
    for (let i = 0; i < quantityLoading; i++) {
      jsx.push(
        <Skeleton key={i} animation="wave" height={"100%"} width="100%" />
      );
    }
    return jsx;
  };
  return (
    <div className="p-1 grid grid-cols-2 lg:grid-cols-5 gap-2">
      {renderSkeleton()}
    </div>
  );
}

export default SkeletonList;
