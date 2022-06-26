import React from "react";
import { useSelector } from "react-redux";
import { categoryAllProduct } from "../../../utils/Settings/data";
import ProductList from "./global/ProductList";

function AllProduct(props) {
  const { totalQuantity } = useSelector((state) => state.product);
  const renderProductList = () => {
    return categoryAllProduct.map((item, index) => {
      const totalPro = totalQuantity[0] ? totalQuantity[0][item.category] : 1;
      return (
        <ProductList
          key={index}
          content={item.content}
          category={item.category}
          totalPro={totalPro}
        />
      );
    });
  };
  return <div>{renderProductList()}</div>;
}

export default AllProduct;
