import React from "react";
import { useSelector } from "react-redux";
import ManagerBannerProduct from "../global/ManagerContent/ManagerBannerProduct";
import ManagerBannerSlider from "../global/ManagerContent/ManagerBannerSlider";
import ManagerProducts from "../global/ManagerContent/ManagerProducts";
import ManagerSlider from "../global/ManagerContent/ManagerSlider";
import ManagerTitleSliderProducts from "../global/ManagerContent/ManagerTitleSliderProducts";

function ContentManagerHomePage(props) {
  const { dataHomePage } = useSelector((state) => state.page);
  let finalData = dataHomePage.length;
  return (
    <div>
      <div className="content px-4 py-2">
        <ManagerBannerSlider
          banner={dataHomePage[finalData - 1]?.firstBanner}
          sliders={dataHomePage[finalData - 1]?.firstSliders}
        />
      </div>
      <div className="content px-4 py-2">
        <ManagerBannerProduct
          banner={dataHomePage[finalData - 1]?.saleBanner}
          products={dataHomePage[finalData - 1]?.productSales}
        />
      </div>
      <div className="content px-4 py-2">
        <ManagerTitleSliderProducts
          title={dataHomePage[finalData - 1]?.titleEvents}
          sliders={dataHomePage[finalData - 1]?.bannerEvents}
          products={dataHomePage[finalData - 1]?.productEvents}
        />
      </div>
      <div className="content px-4 py-2">
        <ManagerProducts
          products={dataHomePage[finalData - 1]?.productTrends}
        />
      </div>
      <div className="content px-4 py-2">
        <ManagerSlider
          sliders={dataHomePage[finalData - 1]?.sliderPayOnlines}
        />
      </div>
      <div className="content px-4 py-2">
        <ManagerProducts
          products={dataHomePage[finalData - 1]?.productRecommends}
        />
      </div>
      <div className="content px-4 py-2">
        <ManagerSlider sliders={dataHomePage[finalData - 1]?.sliderBrands} />
      </div>
      <div className="content px-4 py-2">
        <ManagerSlider sliders={dataHomePage[finalData - 1]?.sliderDeals} />
      </div>
    </div>
  );
}

export default ContentManagerHomePage;
