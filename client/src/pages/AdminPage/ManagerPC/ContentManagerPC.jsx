import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaginateCT from "../../../components/Pagination/PaginateCT";
import { GET_PC_SAGA } from "../../../redux/sagas/types/main";
import ManagerProducts from "../global/ManagerContent/ManagerProducts";
import ManagerSlider from "../global/ManagerContent/ManagerSlider";

function ContentManagerPC(props) {
  const dispatch = useDispatch();
  const { dataPCPage } = useSelector((state) => state.page);
  const { pc, totalQuantity } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch({
      type: GET_PC_SAGA,
    });
  }, [dispatch]);
  let finalData = dataPCPage.length;
  return (
    <div>
      <div className="content px-4 py-2">
        <ManagerSlider sliders={dataPCPage[finalData - 1]?.sliders} />
      </div>
      <div className="content px-4 py-2">
        <ManagerProducts products={pc} />
        <PaginateCT
          length={Math.ceil(
            totalQuantity[0]?.pc ? totalQuantity[0].pc / 10 : 0
          )}
          actionName={GET_PC_SAGA}
        />
      </div>
    </div>
  );
}

export default ContentManagerPC;
