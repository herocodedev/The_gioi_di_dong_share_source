import React from "react";
import CardCustom from "../../../components/Card/Card";
import SkeletonCard from "../../../components/Skeleton/SkeletonCard";
import SkeletonSlider from "../../../components/Skeleton/SkeletonSlider";
import { Link } from "react-router-dom";

function ProductList(props) {
  const { products, colorBtn, banner, id, urlFilter } = props;

  const renderProduct = () => {
    if (!products) {
      let jsx = [];
      for (let i = 0; i < 15; i++) jsx.push(<SkeletonCard key={i} />);
      return jsx;
    }
    return products.map((item, index) => {
      return <CardCustom key={index} product={item} />;
    });
  };
  return (
    <div className="rounded-xl px-4" id={id}>
      {banner ? (
        <img src={banner[0]?.url} className="object-cover" alt="" />
      ) : (
        <SkeletonSlider />
      )}

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-4">
        {renderProduct()}
      </div>
      <div className="flex items-center justify-center my-4">
        <Link to={urlFilter ? urlFilter : ""}>
          <button
            className={`${
              colorBtn ? `bg-[${colorBtn}]` : "bg-[#fff]"
            } uppercase shadow-lg px-20 py-2 rounded-lg shadow-yellow-500/50 font-semibold text-[10px] sm:text-[12px]`}
          >
            xem tất cả các sản phẩm
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductList;
