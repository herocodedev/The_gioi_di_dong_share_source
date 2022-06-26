import { Button } from "@mui/material";
import React from "react";
import PaginateCT from "../../../../components/Pagination/PaginateCT";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SimpleCard from "../../../../components/Admin/SimpleCardAdmin";
import { useSelector, useDispatch } from "react-redux";

function ProductList(props) {
  const { totalPro, content, category } = props;
  // console.log("totalPro: ", totalPro);
  const products = useSelector((state) => state.product);
  const actionName = "GET_" + category.toUpperCase() + "_SAGA";
  const dispatch = useDispatch();
  const renderCard = () => {
    return products[category]?.map((x, y) => (
      <SimpleCard key={y} data={x} category={category} />
    ));
  };
  return (
    <div className="">
      <h3 className="my-2 ">
        <ArrowRightIcon />
        <span className="text-xl mr-4 inline-block w-[100px]">{content}</span>
        <Button
          onClick={() => {
            dispatch({
              type: actionName,
              page: 1,
            });
          }}
          variant="contained"
          color="primary"
        >
          Xem tất cả
        </Button>
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-2">
        {renderCard()}
      </div>
      <PaginateCT length={Math.ceil(totalPro / 10)} actionName={actionName} />
    </div>
  );
}

export default ProductList;
