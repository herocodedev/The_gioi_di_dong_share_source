import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import SnackbarCT from "./components/Global/Alert/SnackbarCT";
import Loading from "./components/Global/Loading/Loading";
import DrawerApp from "./components/HOC/DrawerApp";
import ModalDetailApp from "./components/HOC/ModalDetailApp";
import Footer from "./components/Layouts/Footer/Footer";
import Header from "./components/Layouts/Header/Header";
import Admin from "./pages/AdminPage/Admin";
import AddAccessoryPage from "./pages/AdminPage/ManagerAccessory/ActionAccessoryPage/AddAccessoryPage/AddAccessoryPage";
import EditAccessoryPage from "./pages/AdminPage/ManagerAccessory/ActionAccessoryPage/EditAccessoryPage/EditAccessoryPage";
import ContentManagerAccessory from "./pages/AdminPage/ManagerAccessory/ContentManagerAccessory";
import ManagerAccessory from "./pages/AdminPage/ManagerAccessory/ManagerAccessory";
import AddNewHomePage from "./pages/AdminPage/ManagerHomePage/ActionHomePage/AddHomePage/AddNewHomePage";
import EditHomePage from "./pages/AdminPage/ManagerHomePage/ActionHomePage/EditHomePage/EditHomePage";
import ContentManagerHomePage from "./pages/AdminPage/ManagerHomePage/ContentManagerHomePage";
import ManagerHomePage from "./pages/AdminPage/ManagerHomePage/ManagerHomePage";
import AddLaptopPage from "./pages/AdminPage/ManagerLaptop/ActionLaptopPage/AddLaptopPage/AddLaptopPage";
import EditLaptopPage from "./pages/AdminPage/ManagerLaptop/ActionLaptopPage/EditLaptopPage/EditLaptopPage";
import ContentManagerLaptop from "./pages/AdminPage/ManagerLaptop/ContentManagerLaptop";
import ManagerLaptop from "./pages/AdminPage/ManagerLaptop/ManagerLaptop";
import AddPCPage from "./pages/AdminPage/ManagerPC/ActionPCPage/AddPCPage/AddPCPage";
import EditPCPage from "./pages/AdminPage/ManagerPC/ActionPCPage/EditPCPage/EditPCPage";
import ContentManagerPC from "./pages/AdminPage/ManagerPC/ContentManagerPC";
import ManagerPC from "./pages/AdminPage/ManagerPC/ManagerPC";
import Accessory from "./pages/AdminPage/ManagerProduct/Accessory/Accessory";
import AllProduct from "./pages/AdminPage/ManagerProduct/AllProduct";
import Laptop from "./pages/AdminPage/ManagerProduct/Laptop/Laptop";
import ManagerProduct from "./pages/AdminPage/ManagerProduct/ManagerProduct";
import PC from "./pages/AdminPage/ManagerProduct/PC/PC";
import SmartPhone from "./pages/AdminPage/ManagerProduct/SmartPhone/SmartPhone";
import Swatch from "./pages/AdminPage/ManagerProduct/Swatch/Swatch";
import Tablet from "./pages/AdminPage/ManagerProduct/Tablet/Tablet";
import ManagerReceipt from "./pages/AdminPage/ManagerReceipt/ManagerReceipt";
import AddNewSmartphonePage from "./pages/AdminPage/ManagerSmartphone/ActionSmartphonePage/AddSmartphonePage/AddNewSmartphonePage";
import EditSmartphonePage from "./pages/AdminPage/ManagerSmartphone/ActionSmartphonePage/EditSmartphomePage/EditSmartphonePage";
import ContentManagerSmartphone from "./pages/AdminPage/ManagerSmartphone/ContentManagerSmartphone";
import ManagerSmartPhone from "./pages/AdminPage/ManagerSmartphone/ManagerSmartPhone";
import AddSwatchPage from "./pages/AdminPage/ManagerSwatch/ActionSwatchPage/AddSwatchPage/AddSwatchPage";
import EditSwatchPage from "./pages/AdminPage/ManagerSwatch/ActionSwatchPage/EditSwatchPage/EditSwatchPage";
import ContentManagerSwatchPage from "./pages/AdminPage/ManagerSwatch/ContentManagerSwatchPage";
import ManagerSwatch from "./pages/AdminPage/ManagerSwatch/ManagerSwatch";
import AddNewTabletPage from "./pages/AdminPage/ManagerTablet/ActionTabletPage/AddTabletPage/AddNewTabletPage";
import EditTabletPage from "./pages/AdminPage/ManagerTablet/ActionTabletPage/EditTabletPage/EditTabletPage";
import ContentManagerTablet from "./pages/AdminPage/ManagerTablet/ContentManagerTablet";
import ManagerTablet from "./pages/AdminPage/ManagerTablet/ManagerTablet";
import ManagerUser from "./pages/AdminPage/ManagerUser/ManagerUser";
import Login from "./pages/AuthPage/Login";
import Register from "./pages/AuthPage/Register";
import DetailPageAccessory from "./pages/DetailPage/DetailPageAccessory/DetailPageAccessory";
import MainPageLaptop from "./pages/DetailPage/DetailPageLaptop/MainPageLaptop/MainPageLaptop";
import DetailPageLaptop from "./pages/DetailPage/DetailPageLaptop/DetailPageLaptop";
import DetailPagePC from "./pages/DetailPage/DetailPagePC/DetailPagePC";
import DetaiPageSmartPhone from "./pages/DetailPage/DetailPageSmartPhone/DetaiPageSmartPhone";
import DetailPageSwatch from "./pages/DetailPage/DetailPageSwatch/DetailPageSwatch";
import DetailPageTablet from "./pages/DetailPage/DetailPageTablet/DetailPageTablet";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import SearchPage from "./pages/SearchPage/SearchPage";
import AuthProtectedRoute from "./protectedRoute/AuthProtectedRoute";
import { ADD_NAVIGATE } from "./redux/reducers/types/mainType";
import MainPageAccessory from "./pages/DetailPage/DetailPageAccessory/MainPageAccessory/MainPageAccessory";
import MainPageSwatch from "./pages/DetailPage/DetailPageSwatch/MainPageSwatch/MainPageSwatch";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import ProtectedRouteAdmin from "./protectedRoute/ProtectedRouteAdmin";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import ProtectedRouteClient from "./protectedRoute/ProtectedRouteClient";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import ContentManagerReceipt from "./pages/AdminPage/ManagerReceipt/ContentManagerReceipt";
import SignReceipt from "./pages/AdminPage/ManagerReceipt/SignReceipt";
import NoSignReceipt from "./pages/AdminPage/ManagerReceipt/NoSignReceipt";

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.global);
  useEffect(() => {
    dispatch({
      type: ADD_NAVIGATE,
      navigate,
    });
  }, [dispatch, navigate]);
  return (
    <>
      <ModalDetailApp />
      <SnackbarCT />
      <DrawerApp />

      {!pathname.includes("/admin") && <Header />}
      {loading && <Loading />}
      <Routes>
        {/* HomePage */}
        <Route path="/" element={<HomePage />} />
        {/* Search */}
        <Route path="/search" element={<SearchPage />} />

        {/* SmartphonePage */}
        <Route path="/smartphone">
          <Route path=":id" element={<DetailProduct />} />
          <Route path="" element={<DetaiPageSmartPhone />} />
        </Route>

        {/* LaptopPage */}
        <Route path="/laptop-adv" element={<DetailPageLaptop />} />
        <Route path="/laptop">
          <Route path=":id" element={<DetailProduct />} />
          <Route path="" element={<MainPageLaptop />} />
        </Route>

        {/* TabletPage */}
        <Route path="/tablet">
          <Route path=":id" element={<DetailProduct />} />
          <Route path="" element={<DetailPageTablet />} />
        </Route>

        {/* AccessoryPage */}
        <Route path="/accessory-adv" element={<DetailPageAccessory />} />
        <Route path="/accessory">
          <Route path=":id" element={<DetailProduct />} />
          <Route path="" element={<MainPageAccessory />} />
        </Route>

        {/* SwatchPage */}
        <Route path="/swatch-adv" element={<DetailPageSwatch />} />
        <Route path="/swatch">
          <Route path=":id" element={<DetailProduct />} />
          <Route path="" element={<MainPageSwatch />} />
        </Route>

        {/* PcPage */}
        <Route path="/pc">
          <Route path=":id" element={<DetailProduct />} />
          <Route path="" element={<DetailPagePC />} />
        </Route>

        {/* Auth Page */}
        <Route element={<AuthProtectedRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Shopping Cart Page */}
        <Route element={<ProtectedRouteClient />}>
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Route>

        <Route element={<ProtectedRouteAdmin />}>
          <Route element={<Admin />}>
            <Route path="/admin/user" element={<ManagerUser />} />

            <Route path="/admin/product" element={<ManagerProduct />}>
              <Route path="" element={<AllProduct />} />
              <Route path="smartphone" element={<SmartPhone />} />
              <Route path="laptop" element={<Laptop />} />
              <Route path="tablet" element={<Tablet />} />
              <Route path="accessory" element={<Accessory />} />
              <Route path="swatch" element={<Swatch />} />
              <Route path="pc" element={<PC />} />
            </Route>

            <Route path="/admin/homepage" element={<ManagerHomePage />}>
              <Route path="" element={<ContentManagerHomePage />} />
              <Route path="add" element={<AddNewHomePage />} />
              <Route path="edit" element={<EditHomePage />} />
            </Route>

            <Route path="/admin/smartphone" element={<ManagerSmartPhone />}>
              <Route path="" element={<ContentManagerSmartphone />} />
              <Route path="add" element={<AddNewSmartphonePage />} />
              <Route path="edit" element={<EditSmartphonePage />} />
            </Route>
            <Route path="/admin/laptop" element={<ManagerLaptop />}>
              <Route path="" element={<ContentManagerLaptop />} />
              <Route path="add" element={<AddLaptopPage />} />
              <Route path="edit" element={<EditLaptopPage />} />
            </Route>
            <Route path="/admin/tablet" element={<ManagerTablet />}>
              <Route path="" element={<ContentManagerTablet />} />
              <Route path="add" element={<AddNewTabletPage />} />
              <Route path="edit" element={<EditTabletPage />} />
            </Route>
            <Route path="/admin/accessory" element={<ManagerAccessory />}>
              <Route path="" element={<ContentManagerAccessory />} />
              <Route path="add" element={<AddAccessoryPage />} />
              <Route path="edit" element={<EditAccessoryPage />} />
            </Route>

            <Route path="/admin/swatch" element={<ManagerSwatch />}>
              <Route path="" element={<ContentManagerSwatchPage />} />
              <Route path="add" element={<AddSwatchPage />} />
              <Route path="edit" element={<EditSwatchPage />} />
            </Route>

            <Route path="/admin/pc" element={<ManagerPC />}>
              <Route path="" element={<ContentManagerPC />} />
              <Route path="add" element={<AddPCPage />} />
              <Route path="edit" element={<EditPCPage />} />
            </Route>
            <Route path="/admin/receipt" element={<ManagerReceipt />}>
              <Route path="sign" element={<SignReceipt />} />
              <Route path="nosign" element={<NoSignReceipt />} />
              <Route path="" element={<ContentManagerReceipt />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      {!pathname.includes("/admin") && <Footer />}
    </>
  );
}

export default App;
