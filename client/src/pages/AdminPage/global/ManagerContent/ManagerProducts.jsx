import { Skeleton } from "@mui/material";
import React from "react";
import SimpleCard from "../../../../components/Card/SimpleCard";
import ButtonTitle from "../ButtonTitle";

function ManagerProducts(props) {
  const { products } = props;
  const renderProducts = () => {
    if (!products?.length) {
      let jsx = [];
      for (let i = 0; i < 8; i++)
        jsx.push(
          <Skeleton
            key={i}
            className="rounded-lg"
            variant="rectangular"
            width={"100%"}
            height={100}
          />
        );
      return jsx;
    }
    return products.map((item, index) => (
      <SimpleCard
        product={item}
        key={index}
        srcImg={item?.images[0]?.imgs[0]?.url}
      />
    ));
  };
  return (
    <div>
      <h1 className="text-center font-normal text-2xl ">Sản phẩm hiện có</h1>
      <ButtonTitle title={"Sản phẩm"} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {renderProducts()}
      </div>
    </div>
  );
}

export default ManagerProducts;
