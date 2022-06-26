import { Skeleton } from "@mui/material";
import React from "react";

function Banner(props) {
  const { banner } = props;
  return (
    <div>
      {banner ? (
        <img src={banner[0]?.url} alt="" />
      ) : (
        <Skeleton
          className="rounded-lg"
          variant="rectangular"
          width={"100%"}
          height={350}
        />
      )}
    </div>
  );
}

export default Banner;
