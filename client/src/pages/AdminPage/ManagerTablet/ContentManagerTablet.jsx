import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaginateCT from "../../../components/Pagination/PaginateCT";
import { GET_TABLET_SAGA } from "../../../redux/sagas/types/main";
import ManagerProducts from "../global/ManagerContent/ManagerProducts";
import ManagerSlider from "../global/ManagerContent/ManagerSlider";

function ContentManagerTablet(props) {
  const dispatch = useDispatch();
  const { dataTabletPage } = useSelector((state) => state.page);
  const { tablet, totalQuantity } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch({
      type: GET_TABLET_SAGA,
    });
  }, [dispatch]);
  let finalData = dataTabletPage.length;
  return (
    <div>
      <div className="content px-4 py-2">
        <ManagerSlider sliders={dataTabletPage[finalData - 1]?.sliders} />
      </div>
      <div className="content px-4 py-2">
        <ManagerProducts products={tablet} />
        <PaginateCT
          length={Math.ceil(
            totalQuantity[0]?.tablet ? totalQuantity[0].tablet / 10 : 0
          )}
          actionName={GET_TABLET_SAGA}
        />
      </div>
    </div>
  );
}

export default ContentManagerTablet;
