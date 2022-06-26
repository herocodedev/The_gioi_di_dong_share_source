import React from "react";
import { Link } from "react-router-dom";
import SkeletonCard from "../../components/Skeleton/SkeletonCard";

function Trend(props) {
  const { products } = props;
  const renderProducts = () => {
    if (!products) {
      let jsx = [];
      for (let i = 0; i < 4; i++) jsx.push(<SkeletonCard key={i} />);
      return jsx;
    }
    return products.map((item, index) => (
      <div key={index} className="relative mx-auto">
        <img
          className="w-full  md:w-[400px] lg:w-full h-[200px] object-contain  rounded-lg"
          src={item?.images[0]?.imgs[0]?.url}
          alt=""
        />
        <div className="mt-2 flex flex-col bottom-[1rem] left-[1rem] tracking-wider leading-8">
          <span className="capitalize">{item?.category}</span>
          <Link to="/" className="text-sky-700 text-struncate">
            {item?.name}
          </Link>
        </div>
      </div>
    ));
  };
  return (
    <div className="bg-white rounded-xl px-4 py-4">
      <h1 className="text-lg sm:text-2xl uppercase text-[#333] font-bold text-left">
        Xu hướng mua sắm
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        {renderProducts()}{" "}
      </div>
    </div>
  );
}

export default Trend;
