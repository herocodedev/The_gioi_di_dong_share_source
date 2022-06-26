import { Skeleton } from "@mui/material";
import React from "react";
import SimpleCard from "../../../../components/Card/SimpleCard";
import SkeletonCard from "../../../../components/Skeleton/SkeletonCard";
import ButtonTitle from "../ButtonTitle";

function ManagaerBannerProduct(props) {
  const { banner, products, type, name } = props;
  const renderBanner = () => {
    return banner && banner?.length > 0 ? (
      <img className="rounded-lg" src={banner[0]?.url} alt="" />
    ) : (
      <Skeleton
        className="rounded-lg"
        variant="rectangular"
        width={"100%"}
        height={100}
      />
    );
  };
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
      <h1 className="text-center font-normal text-2xl ">
        {name ? name.toUpperCase() : ""} {type ? type.toUpperCase() : ""}
      </h1>
      <div className="flex flex-col gap-2">
        {/* Title */}
        <ButtonTitle title={"Banner"} />
        {/* Content */}
        <div className="w-full rounded-xl px-2 py-4">
          <div className="">{renderBanner()}</div>
        </div>
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

export default ManagaerBannerProduct;
