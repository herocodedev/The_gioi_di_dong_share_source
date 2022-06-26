import React from "react";
import { useSelector } from "react-redux";
import { categoryAllProduct } from "../../../utils/Settings/data";
import ListProduct from "./ListProduct";
import { useLocation } from "react-router-dom";
function ContentModalListProduct(props) {
  const { pathname } = useLocation();
  const { totalQuantity } = useSelector((state) => state.product);
  const { rootName, setFieldValue } = props;
  const renderProductList = () => {
    // Home page
    if (pathname.includes("homepage")) {
      return categoryAllProduct.map((item, index) => {
        const totalPro = totalQuantity[0] ? totalQuantity[0][item.category] : 1;
        return (
          <ListProduct
            key={index}
            content={item.content}
            category={item.category}
            totalPro={totalPro}
            setFieldValue={setFieldValue}
            rootName={rootName}
          />
        );
      });
    }

    // Product page
    return categoryAllProduct.map((item, index) => {
      if (pathname.includes(item.category)) {
        const totalPro = totalQuantity[0] ? totalQuantity[0][item.category] : 1;
        return (
          <ListProduct
            key={index}
            content={item.content}
            category={item.category}
            totalPro={totalPro}
            setFieldValue={setFieldValue}
            rootName={rootName}
          />
        );
      }
    });
  };
  return <div>{renderProductList()}</div>;
}

export default ContentModalListProduct;
