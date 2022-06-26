import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_PRODUCT_CHOOSE } from "../../redux/reducers/types/mainType";
function CardEditSimple(props) {
  const { data, setFieldValue, rootName } = props;
  const dispatch = useDispatch();
  const { productChoosed } = useSelector((state) => state.global);
  return (
    <div>
      <Tooltip title={data?.name || ""}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea style={{ padding: "8px " }}>
            <div className="absolute text-red-600 text top-0 left-2 capitalize text-sm">
              {data?.type}
            </div>
            <CardMedia
              component="img"
              height="150"
              style={{
                height: "100px",
                objectFit: "contain",
              }}
              image={data?.images[0]?.imgs[0].url}
              alt="green iguana"
            />
          </CardActionArea>
          <CardActions className="flex items-center justify-center">
            <Button
              onClick={() => {
                let currentProductsArr = [...productChoosed[rootName]];

                // Check data if exist -> no add
                const index = currentProductsArr?.findIndex(
                  (x, y) => x._id === data._id
                );
                if (index !== -1) {
                  alert("Bạn đã thêm sản phẩm này rồi");
                  return;
                }
                // Add new data
                currentProductsArr.push(data);
                setFieldValue(rootName, currentProductsArr);
                dispatch({
                  type: SET_PRODUCT_CHOOSE,
                  products: currentProductsArr,
                  field: rootName,
                });
              }}
              color="primary"
            >
              <span className="text-[10px]">Thêm</span>
            </Button>
            <Button
              onClick={() => {
                let currentProductsArr = [...productChoosed[rootName]];
                const newArr = currentProductsArr?.filter(
                  (x, y) => x._id !== data._id
                );

                setFieldValue(rootName, newArr);
                dispatch({
                  type: SET_PRODUCT_CHOOSE,
                  products: newArr,
                  field: rootName,
                });
                alert("Xóa thành công");
              }}
              color="primary"
            >
              <span className="text-[10px]">Xóa</span>
            </Button>
          </CardActions>
        </Card>
      </Tooltip>
    </div>
  );
}

export default CardEditSimple;
