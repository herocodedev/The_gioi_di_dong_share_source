import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA_LAPTOP_PAGE_SAGA } from "../../../redux/sagas/types/main";
import BannerProducts from "../global/BannerProducts";
import Slider from "../global/Slider";
import TitleProduct from "../global/TitleProduct";
import Brand from "./Brand";

function DetailPageLaptop(props) {
  const { dataLaptopPage } = useSelector((state) => state.page);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_DATA_LAPTOP_PAGE_SAGA,
    });
  }, [dispatch]);
  let finalIndex = dataLaptopPage.length - 1;

  return (
    <div className="bg-[#f3f3f3]">
      <Brand />
      <div className="px-2 lg:px-16">
        <TitleProduct
          title={dataLaptopPage[finalIndex]?.titleEvents}
          products={dataLaptopPage[finalIndex]?.productLaptopEvents}
          id={"hot-deal"}
        />
      </div>
      <div className="px-2 lg:px-16 sm:block hidden">
        <Slider sliders={dataLaptopPage[finalIndex]?.sliders} />
      </div>
      <div className="px-2 lg:px-16 bg-gray-900 py-4 my-4">
        <BannerProducts
          banner={dataLaptopPage[finalIndex]?.bannerLaptopGaming}
          products={dataLaptopPage[finalIndex]?.productLaptopGamings}
          colorBtn={"#ffd400"}
          urlFilter="/laptop?type=gamming"
          id="laptop-gamming"
        />
      </div>
      <div className="px-2 lg:px-16 py-4">
        <BannerProducts
          banner={dataLaptopPage[finalIndex]?.bannerLaptopMac}
          products={dataLaptopPage[finalIndex]?.productLaptopMacs}
          urlFilter="/laptop?type=macbook"
          id="laptop-macbook"
        />
      </div>

      <div className="px-2 lg:px-16 py-4">
        <BannerProducts
          banner={dataLaptopPage[finalIndex]?.bannerLaptopOffice}
          products={dataLaptopPage[finalIndex]?.productLaptopOffices}
          urlFilter="/laptop?type=office"
          id="laptop-office"
        />
      </div>
      <div className="px-2 lg:px-16 py-4">
        <BannerProducts
          banner={dataLaptopPage[finalIndex]?.bannerLaptopCode}
          products={dataLaptopPage[finalIndex]?.productLaptopCodes}
          urlFilter="/laptop?type=code"
          id="laptop-code"
        />
      </div>
      <div className="px-2 lg:px-16 py-4">
        <BannerProducts
          banner={dataLaptopPage[finalIndex]?.bannerLaptopThin}
          products={dataLaptopPage[finalIndex]?.productLaptopThins}
          urlFilter="/laptop?type=thin&type=macbook&type=office"
          id="laptop-thin"
        />
      </div>
      <div className="px-2 lg:px-16 py-4">
        <BannerProducts
          banner={dataLaptopPage[finalIndex]?.bannerLaptopLuxurious}
          products={dataLaptopPage[finalIndex]?.productLaptopLuxurious}
          urlFilter="/laptop?type=luxurious&type=macbook"
          id="laptop-luxury"
        />
      </div>
    </div>
  );
}

export default DetailPageLaptop;
