import AddIcon from "@mui/icons-material/Add";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_MODAL_HOC } from "../../../../redux/reducers/types/mainType";
import ContentModalListProduct from "../../global/ContentModalListProduct";

function AddProducts(props) {
  const dispatch = useDispatch();
  const { values, errors, touched, setFieldValue, rootNameProducts } = props;
  const { productChoosed } = useSelector((state) => state.global);
  const renderProducts = () => {
    // ---- Handle case edit ----
    if (
      productChoosed[rootNameProducts]?.length === 0 &&
      values[rootNameProducts]?.length > 0
    ) {
      return values[rootNameProducts]?.map((item, index) => (
        <img
          key={index}
          style={{ height: 100, objectFit: "contain" }}
          src={item?.images[0]?.imgs[0]?.url}
          alt="product"
        />
      ));
    }
    // ---- Handle case add ----
    return productChoosed[rootNameProducts]?.map((item, index) => (
      <img
        key={index}
        style={{ height: 100, objectFit: "contain" }}
        src={item?.images[0]?.imgs[0]?.url}
        alt="product"
      />
    ));
  };
  return (
    <div className="grid my-4 grid-cols-1 md:grid-cols-2 gap-4">
      {/* Control */}
      <div className="flex flex-col justify-center">
        <h1 className="flex items-center  text-xl font-medium">
          <AddIcon /> <p>Danh sách sản phẩm</p>
        </h1>

        <div className="">
          <h1 className="flex my-4 gap-2 items-center tex">
            <AllInboxIcon className="text-teal-500" /> <p>Sản phẩm </p>
          </h1>
          <div className="my-2">
            <Button
              onClick={() => {
                dispatch({
                  type: OPEN_MODAL_HOC,
                  ComponentContentModal: (
                    <ContentModalListProduct
                      rootName={rootNameProducts}
                      setFieldValue={setFieldValue}
                    />
                  ),
                });
              }}
              style={{ marginRight: 4 }}
              variant="outlined"
              size="small"
            >
              Chọn và thêm
            </Button>
            {touched[rootNameProducts] && errors[rootNameProducts] && (
              <p className="text-red-600 text-[14px] my-2">
                {errors[rootNameProducts]}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* Image render */}
      <div className="flex gap-2 flex-col">
        {productChoosed[rootNameProducts]?.length ||
        values[rootNameProducts]?.length > 0 ? (
          <div className="grid-cols-2 md:grid-cols-3 grid lg:grid-cols-4 gap-2">
            {renderProducts()}
          </div>
        ) : (
          <div className="h-[100%] flex justify-center items-center  rounded-lg bg-gray-200">
            <p className="uppercase font-normal text-gray-400">Sản phẩm</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddProducts;
