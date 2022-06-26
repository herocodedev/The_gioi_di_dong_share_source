import { Card, CardActions } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import * as React from "react";

function SkeletonCT(props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
      }}
    >
      <Skeleton animation="wave" variant="rectangular" width="100%">
        <div style={{ height: 150, width: "100%" }} />
      </Skeleton>

      <CardActions className="flex items-center justify-center">
        <Skeleton animation="wave" className="rounded-lg" variant="rectangular">
          <div className="w-[120px]  h-[30px]"></div>
        </Skeleton>
      </CardActions>

      <CardActions className="flex items-center justify-center">
        <Skeleton animation="wave" className="rounded-lg" variant="rectangular">
          <div className="w-[70px]  h-[30px]"></div>
        </Skeleton>
        <Skeleton animation="wave" className="rounded-lg" variant="rectangular">
          <div className="w-[70px]  h-[30px]"></div>
        </Skeleton>
      </CardActions>
    </Card>
  );
}

export default SkeletonCT;
