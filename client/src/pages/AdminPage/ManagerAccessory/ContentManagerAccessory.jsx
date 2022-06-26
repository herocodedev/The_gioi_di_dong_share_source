import React from "react";
import { useSelector } from "react-redux";
import ManagaerBannerProduct from "../global/ManagerContent/ManagerBannerProduct";
import ManagerSlider from "../global/ManagerContent/ManagerSlider";

function ContentManagerAccessory(props) {
  const { dataAccessoryPage } = useSelector((state) => state.page);
  let finalData = dataAccessoryPage.length;
  return (
    <div>
      <div className="content px-4 py-2">
        <ManagerSlider sliders={dataAccessoryPage[finalData - 1]?.sliders} />
      </div>
      <div className="content px-4 py-2">
        <ManagaerBannerProduct
          name="Phụ kiện"
          type="event"
          banner={dataAccessoryPage[finalData - 1]?.bannerEvents}
          products={dataAccessoryPage[finalData - 1]?.productAccessoryEvents}
        />
      </div>
      <div className="content px-4 py-2">
        <ManagaerBannerProduct
          name="Phụ kiện"
          type="apple"
          banner={dataAccessoryPage[finalData - 1]?.bannerAppleAccessory}
          products={dataAccessoryPage[finalData - 1]?.productAppleAccessorys}
        />
      </div>
      <div className="content px-4 py-2">
        <ManagaerBannerProduct
          name="Phụ kiện"
          type="cáp sạc"
          banner={dataAccessoryPage[finalData - 1]?.bannerCharingCable}
          products={dataAccessoryPage[finalData - 1]?.productCharingCables}
        />
      </div>
      <div className="content px-4 py-2">
        <ManagaerBannerProduct
          name="Phụ kiện"
          type="sạc dự phòng"
          banner={dataAccessoryPage[finalData - 1]?.bannerBackupCharger}
          products={dataAccessoryPage[finalData - 1]?.productBackupChargers}
        />
      </div>
      <div className="content px-4 py-2">
        <ManagaerBannerProduct
          name="Phụ kiện"
          type="gamming"
          banner={dataAccessoryPage[finalData - 1]?.bannerAccessoryGaming}
          products={dataAccessoryPage[finalData - 1]?.productAccessoryGamings}
        />
      </div>
    </div>
  );
}

export default ContentManagerAccessory;
