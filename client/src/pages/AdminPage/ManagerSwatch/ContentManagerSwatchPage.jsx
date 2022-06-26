import React from "react";
import { useSelector } from "react-redux";
import ManagaerBannerProduct from "../global/ManagerContent/ManagerBannerProduct";
import ManagerSlider from "../global/ManagerContent/ManagerSlider";
import ManagerTitleProduct from "../global/ManagerContent/ManagerTitleProduct";

function ContentManagerSwatchPage(props) {
  const { dataSwatchPage } = useSelector((state) => state.page);
  let finalData = dataSwatchPage.length;
  return (
    <div>
      <div className="content px-4 py-2">
        <ManagerTitleProduct
          title={dataSwatchPage[finalData - 1]?.titleEvents}
          products={dataSwatchPage[finalData - 1]?.productSwatchEvents}
        />
      </div>
      <div className="content px-4 py-2">
        <ManagerSlider sliders={dataSwatchPage[finalData - 1]?.sliders} />
      </div>
      <div className="content px-4 py-2">
        <ManagaerBannerProduct
          name="Đồng hồ"
          type="Thời trang"
          banner={dataSwatchPage[finalData - 1]?.bannerSwatch}
          products={dataSwatchPage[finalData - 1]?.productSwatchs}
        />
      </div>
    </div>
  );
}

export default ContentManagerSwatchPage;
