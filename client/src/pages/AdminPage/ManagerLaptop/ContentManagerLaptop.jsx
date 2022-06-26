import React from "react";
import { useSelector } from "react-redux";
import ManagerBannerProduct from "../global/ManagerContent/ManagerBannerProduct";
import ManagerSlider from "../global/ManagerContent/ManagerSlider";
import ManagerTitleProduct from "../global/ManagerContent/ManagerTitleProduct";

function ContentManagerLaptop(props) {
  const { dataLaptopPage } = useSelector((state) => state.page);
  let finalData = dataLaptopPage.length;
  return (
    <div>
      <div className="content px-4 py-2">
        <ManagerTitleProduct
          title={dataLaptopPage[finalData - 1]?.titleEvents}
          products={dataLaptopPage[finalData - 1]?.productLaptopEvents}
        />
      </div>
      <div className="content px-4 py-2">
        <ManagerSlider sliders={dataLaptopPage[finalData - 1]?.sliders} />
      </div>
      <div className="content px-4 py-2">
        <ManagerBannerProduct
          name="laptop"
          type="GAMMING"
          banner={dataLaptopPage[finalData - 1]?.bannerLaptopGaming}
          products={dataLaptopPage[finalData - 1]?.productLaptopGamings}
        />
      </div>
      <div className="content px-4 py-2">
        <ManagerBannerProduct
          name="laptop"
          type="MACBOOK"
          banner={dataLaptopPage[finalData - 1]?.bannerLaptopMac}
          products={dataLaptopPage[finalData - 1]?.productLaptopMacs}
        />
      </div>
      <div className="content px-4 py-2">
        <ManagerBannerProduct
          name="laptop"
          type="OFFICE"
          banner={dataLaptopPage[finalData - 1]?.bannerLaptopOffice}
          products={dataLaptopPage[finalData - 1]?.productLaptopOffices}
        />
      </div>
      <div className="content px-4 py-2">
        <ManagerBannerProduct
          name="laptop"
          type="CODE"
          banner={dataLaptopPage[finalData - 1]?.bannerLaptopCode}
          products={dataLaptopPage[finalData - 1]?.productLaptopCodes}
        />
      </div>
      <div className="content px-4 py-2">
        <ManagerBannerProduct
          name="laptop"
          type="THIN"
          banner={dataLaptopPage[finalData - 1]?.bannerLaptopThin}
          products={dataLaptopPage[finalData - 1]?.productLaptopThins}
        />
      </div>
      <div className="content px-4 py-2">
        <ManagerBannerProduct
          name="laptop"
          type="LUXURIOUS"
          banner={dataLaptopPage[finalData - 1]?.bannerLaptopLuxurious}
          products={dataLaptopPage[finalData - 1]?.productLaptopLuxurious}
        />
      </div>
    </div>
  );
}

export default ContentManagerLaptop;
