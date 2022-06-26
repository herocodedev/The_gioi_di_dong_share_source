import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import { useDispatch } from "react-redux";
import FormEditAccessory from "../../pages/AdminPage/ManagerProduct/Accessory/FormEditAccessory";
import FormEditLaptop from "../../pages/AdminPage/ManagerProduct/Laptop/FormEditLaptop";
import FormEditSmartPhone from "../../pages/AdminPage/ManagerProduct/SmartPhone/FormEditSmartPhone";
import FormEditSwatch from "../../pages/AdminPage/ManagerProduct/Swatch/FormEditSwatch";
import FormEditTablet from "../../pages/AdminPage/ManagerProduct/Tablet/FormEditTablet";
import FormEditPC from "../../pages/AdminPage/ManagerProduct/PC/FormEditPC";

import {
  OPEN_DRAWER_HOC,
  OPEN_MODAL_HOC,
} from "../../redux/reducers/types/mainType";
import ContentSmartPhone from "../../pages/AdminPage/global/ContentModalDetailProduct/ContentSmartPhone";
import ContentTablet from "../../pages/AdminPage/global/ContentModalDetailProduct/ContentTablet";
import ContentAccessory from "../../pages/AdminPage/global/ContentModalDetailProduct/ContentAccessory";
import ContentLaptop from "../../pages/AdminPage/global/ContentModalDetailProduct/ContentLaptop";
import ContentPC from "../../pages/AdminPage/global/ContentModalDetailProduct/ContentPC";
import ContentSwatch from "../../pages/AdminPage/global/ContentModalDetailProduct/ContentSwatch";

export default function CardEditCustom(props) {
  const { product, category } = props;
  const dispatch = useDispatch();
  const actionName = "DELETE_" + category.toUpperCase() + "_SAGA";
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          style={{ height: 150, objectFit: "contain" }}
          image={product?.images[0]?.imgs[0].url}
          alt="green iguana"
        />
      </CardActionArea>
      <CardActions className="flex items-center justify-center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (category === "smartphone") {
              dispatch({
                type: OPEN_MODAL_HOC,
                ComponentContentModal: <ContentSmartPhone data={product} />,
              });
            } else if (category === "tablet") {
              dispatch({
                type: OPEN_MODAL_HOC,
                ComponentContentModal: <ContentTablet data={product} />,
              });
            } else if (category === "accessory") {
              dispatch({
                type: OPEN_MODAL_HOC,
                ComponentContentModal: <ContentAccessory data={product} />,
              });
            } else if (category === "laptop") {
              dispatch({
                type: OPEN_MODAL_HOC,
                ComponentContentModal: <ContentLaptop data={product} />,
              });
            } else if (category === "pc") {
              dispatch({
                type: OPEN_MODAL_HOC,
                ComponentContentModal: <ContentPC data={product} />,
              });
            } else if (category === "swatch") {
              dispatch({
                type: OPEN_MODAL_HOC,
                ComponentContentModal: <ContentSwatch data={product} />,
              });
            }
          }}
        >
          <span className="text-struncate">Xem chi tiết</span>
        </Button>
      </CardActions>
      <CardActions className="flex items-center justify-center">
        <Button
          onClick={() => {
            if (category === "smartphone") {
              dispatch({
                type: OPEN_DRAWER_HOC,
                ComponentContent: <FormEditSmartPhone product={product} />,
              });
            } else if (category === "tablet") {
              dispatch({
                type: OPEN_DRAWER_HOC,
                ComponentContent: <FormEditTablet product={product} />,
              });
            } else if (category === "accessory") {
              dispatch({
                type: OPEN_DRAWER_HOC,
                ComponentContent: <FormEditAccessory product={product} />,
              });
            } else if (category === "laptop") {
              dispatch({
                type: OPEN_DRAWER_HOC,
                ComponentContent: <FormEditLaptop product={product} />,
              });
            } else if (category === "pc") {
              dispatch({
                type: OPEN_DRAWER_HOC,
                ComponentContent: <FormEditPC product={product} />,
              });
            } else if (category === "swatch") {
              dispatch({
                type: OPEN_DRAWER_HOC,
                ComponentContent: <FormEditSwatch product={product} />,
              });
            }
          }}
          variant="outlined"
          color="primary"
        >
          Sửa
        </Button>
        <Button
          onClick={() => {
            if (window.confirm("Bạn chắc chắc chắn muốn xóa sản phẩm này?")) {
              dispatch({
                type: actionName,
                id: product._id,
              });
            }
          }}
          variant="outlined"
          color="error"
        >
          Xóa
        </Button>
      </CardActions>
    </Card>
  );
}
