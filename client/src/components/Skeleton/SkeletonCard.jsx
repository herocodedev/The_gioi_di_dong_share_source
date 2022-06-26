import { Skeleton, Stack } from "@mui/material";
import React from "react";

function SkeletonCard(props) {
  return (
    <Stack spacing={1}>
      <Skeleton
        className="rounded-md"
        variant="rectangular"
        width={"100%"}
        height={150}
      />
      <Skeleton variant="text" height={10} />
      <Skeleton variant="text" height={10} />
    </Stack>
  );
}

export default SkeletonCard;
