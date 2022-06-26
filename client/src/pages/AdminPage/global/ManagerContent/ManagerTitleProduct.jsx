import { TextField } from "@mui/material";
import React from "react";
import SimpleCard from "../../../../components/Card/SimpleCard";
import SkeletonCard from "../../../../components/Skeleton/SkeletonCard";
import ButtonTitle from "../ButtonTitle";

function ManagerTitleProduct(props) {
  const { title, products } = props;
  const renderProducts = () => {
    if (!products?.length) {
      let jsx = [];
      for (let i = 0; i < 8; i++) jsx.push(<SkeletonCard key={i} />);
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
    <div className="">
      <h1 className="text-center font-normal text-2xl ">Sự kiện</h1>
      <div className="flex flex-col gap-2">
        {/* Title */}
        <ButtonTitle title={"Tiêu đề"} />

        <TextField
          className="max-w-xl"
          id="standard-basic"
          label="Sự kiện"
          variant="standard"
          value={title ? title : ""}
        />

        {/* Title */}
        <ButtonTitle title={"Sản phẩm"} />
        {/* Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {renderProducts()}
        </div>
      </div>
    </div>
  );
}

export default ManagerTitleProduct;
