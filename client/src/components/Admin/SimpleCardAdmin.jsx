import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import { useDispatch } from "react-redux";
import ContentAccessory from "../../pages/AdminPage/global/ContentModalDetailProduct/ContentAccessory";
import ContentLaptop from "../../pages/AdminPage/global/ContentModalDetailProduct/ContentLaptop";
import ContentPC from "../../pages/AdminPage/global/ContentModalDetailProduct/ContentPC";
import ContentSmartPhone from "../../pages/AdminPage/global/ContentModalDetailProduct/ContentSmartPhone";
import ContentSwatch from "../../pages/AdminPage/global/ContentModalDetailProduct/ContentSwatch";
import ContentTablet from "../../pages/AdminPage/global/ContentModalDetailProduct/ContentTablet";

import { OPEN_MODAL_HOC } from "../../redux/reducers/types/mainType";

export default function CardAdmin(props) {
  const { data, category } = props;
  const dispatch = useDispatch();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          style={{ height: 150, objectFit: "contain" }}
          image={data?.images[0]?.imgs[0].url}
          alt="green iguana"
        />
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => {
            if (category === "smartphone") {
              dispatch({
                type: OPEN_MODAL_HOC,
                ComponentContentModal: <ContentSmartPhone data={data} />,
              });
            } else if (category === "tablet") {
              dispatch({
                type: OPEN_MODAL_HOC,
                ComponentContentModal: <ContentTablet data={data} />,
              });
            } else if (category === "accessory") {
              dispatch({
                type: OPEN_MODAL_HOC,
                ComponentContentModal: <ContentAccessory data={data} />,
              });
            } else if (category === "laptop") {
              dispatch({
                type: OPEN_MODAL_HOC,
                ComponentContentModal: <ContentLaptop data={data} />,
              });
            } else if (category === "pc") {
              dispatch({
                type: OPEN_MODAL_HOC,
                ComponentContentModal: <ContentPC data={data} />,
              });
            } else if (category === "swatch") {
              dispatch({
                type: OPEN_MODAL_HOC,
                ComponentContentModal: <ContentSwatch data={data} />,
              });
            }
          }}
          size="small"
          color="primary"
        >
          Xem chi tiết
        </Button>
      </CardActions>
    </Card>
  );
}
