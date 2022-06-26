import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaginateCT from "../../../components/Pagination/PaginateCT";
import { GET_SMARTPHONE_SAGA } from "../../../redux/sagas/types/main";
import ManagerProducts from "../global/ManagerContent/ManagerProducts";
import ManagerSlider from "../global/ManagerContent/ManagerSlider";

function ContentManagerSmartphone(props) {
  const dispatch = useDispatch();
  const { dataSmartphonePage } = useSelector((state) => state.page);
  const { smartphone, totalQuantity } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch({
      type: GET_SMARTPHONE_SAGA,
    });
  }, [dispatch]);
  let finalData = dataSmartphonePage.length;
  return (
    <div>
      <div className="content px-4 py-2">
        <ManagerSlider sliders={dataSmartphonePage[finalData - 1]?.sliders} />
      </div>
      <div className="content px-4 py-2">
        <ManagerProducts products={smartphone} />
        <PaginateCT
          length={Math.ceil(
            totalQuantity[0]?.smartphone ? totalQuantity[0].smartphone / 10 : 0
          )}
          actionName={GET_SMARTPHONE_SAGA}
        />
      </div>
    </div>
  );
}

export default ContentManagerSmartphone;
