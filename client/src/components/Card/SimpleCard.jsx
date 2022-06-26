import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
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

function SimpleCard(props) {
  const dispatch = useDispatch();
  const { srcImg, product } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          className="py-2"
          height="150"
          style={{ height: 150, objectFit: "contain", width: "100%" }}
          image={srcImg}
          alt="green iguana"
        />
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => {
            if (product?.category === "smartphone") {
              dispatch({
                type: OPEN_MODAL_HOC,
                ComponentContentModal: <ContentSmartPhone data={product} />,
              });
            } else if (product?.category === "tablet") {
              dispatch({
                type: OPEN_MODAL_HOC,
                ComponentContentModal: <ContentTablet data={product} />,
              });
            } else if (product?.category === "accessory") {
              dispatch({
                type: OPEN_MODAL_HOC,
                ComponentContentModal: <ContentAccessory data={product} />,
              });
            } else if (product?.category === "laptop") {
              dispatch({
                type: OPEN_MODAL_HOC,
                ComponentContentModal: <ContentLaptop data={product} />,
              });
            } else if (product?.category === "pc") {
              dispatch({
                type: OPEN_MODAL_HOC,
                ComponentContentModal: <ContentPC data={product} />,
              });
            } else if (product?.category === "swatch") {
              dispatch({
                type: OPEN_MODAL_HOC,
                ComponentContentModal: <ContentSwatch data={product} />,
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
export default React.memo(SimpleCard);
