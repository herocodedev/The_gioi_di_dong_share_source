import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Advertisement from "../../../components/Advertisement/Advertisement";
import { GET_DATA_ACCESSORY_PAGE_SAGA } from "../../../redux/sagas/types/main";
import BannerProductSlider from "../global/BannerProductSlider";
import BannerProducts from "../global/BannerProducts";
import StyleAccessory from "./StyleAccessory";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51d5",
    },
    secondary: {
      main: "#ffc400",
    },
  },
});
function DetailPageAccessory(props) {
  const { dataAccessoryPage } = useSelector((state) => state.page);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_DATA_ACCESSORY_PAGE_SAGA,
    });
  }, [dispatch]);
  let finalIndex = dataAccessoryPage.length - 1;

  return (
    <ThemeProvider theme={theme}>
      <div className="px-12 mb-8 bg-[#f3f3f3]">
        <Advertisement data={dataAccessoryPage[finalIndex]?.sliders} />
      </div>
      <div className="px-12 mb-4">
        <StyleAccessory />
      </div>

      <div className="px-12 mb-8">
        <BannerProductSlider
          backgroundColor="rgb(220 38 38)"
          banner={dataAccessoryPage[finalIndex]?.bannerEvents}
          products={dataAccessoryPage[finalIndex]?.productAccessoryEvents}
          id={"hot-deal"}
        />
      </div>
      <div className="px-2 lg:px-16  py-8">
        <BannerProducts
          banner={dataAccessoryPage[finalIndex]?.bannerAppleAccessory}
          products={dataAccessoryPage[finalIndex]?.productAppleAccessorys}
          id="apple-accessory"
          urlFilter="/accessory?type=appleAccessory"
        />
      </div>
      <div className="px-2 lg:px-16  py-8">
        <BannerProducts
          banner={dataAccessoryPage[finalIndex]?.bannerCharingCable}
          products={dataAccessoryPage[finalIndex]?.productCharingCables}
          id="charing-cable-accessory"
          urlFilter="/accessory?type=backupCharger"
        />
      </div>
      <div className="px-2 lg:px-16  py-8">
        <BannerProducts
          banner={dataAccessoryPage[finalIndex]?.bannerBackupCharger}
          products={dataAccessoryPage[finalIndex]?.productBackupChargers}
          id="pin-accessory"
          urlFilter="/accessory?type=chargingCable"
        />
      </div>
      <div className="px-2 lg:px-16  py-8">
        <BannerProducts
          banner={dataAccessoryPage[finalIndex]?.bannerAccessoryGaming}
          products={dataAccessoryPage[finalIndex]?.productAccessoryGamings}
          id="gamming-accessory"
          urlFilter="/accessory?type=mouse&type=keyboard"
        />
      </div>
    </ThemeProvider>
  );
}

export default DetailPageAccessory;
