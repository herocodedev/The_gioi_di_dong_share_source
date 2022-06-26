import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import LaptopIcon from "@mui/icons-material/Laptop";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import WatchIcon from "@mui/icons-material/Watch";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CHECK_LOGIN_SAGA, LOGOUT_SAGA } from "../../../redux/sagas/types/main";
import "./Header.css";
import History from "./History";
import Search from "./Search";
import ShoppingCart from "./ShoppingCart";
function Header(props) {
  const {
    isLogin,
    quantityShoppingCart,
    quantityHistory,
    loadingShoppingCart,
    loadingHistory,
  } = useSelector((state) => state.global);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const showMenu = () => {
    const menuToggle = document.querySelector(".menu-toggle");
    menuToggle.classList.toggle("hidden");
  };

  useEffect(() => {
    dispatch({
      type: CHECK_LOGIN_SAGA,
    });
  }, [dispatch]);

  return (
    <div className="header">
      <img
        src={require("../../../assests/img/header_1.png")}
        className="w-full"
        alt=""
      />
      <nav className="px-8 py-3 navbar grid grid-cols-6 gap-4 bg-[#ffd400] relative cursor-pointer">
        <div className="col-span-1 hidden sm:flex justify-center flex-col">
          <Link to={"/"}>
            <img src={require("../../../assests/img/logo_tgdd.png")} alt="" />
          </Link>
        </div>

        {/* Search component */}
        <Search />
        {/* Search component */}

        <div className="hidden z-10 col-span-2 menu-toggle bg-[#f3f3f3] left-0 right-0 top-full absolute md:relative md:top-0 md:bg-transparent md:grid grid-cols-3 gap-3 px-2 py-1 rounded text-sm text-[#333]">
          <div className="w-[40%] md:hidden py-2 mx-auto">
            <img src={require("../../../assests/img/logo_tgdd.png")} alt="" />
          </div>

          {user?.admin && (
            <Link to={"/admin/user"} className="col-span-2 ">
              <div className="py-2 bg-red-500 md:py-0 md:px-2 text-center rounded-md font-semibold">
                <AccountCircleIcon
                  style={{ fontSize: "1rem", color: "#fff" }}
                />
                <span className="text-struncate text-white md:mt-0 ">
                  Quản lí hệ Thống
                </span>
              </div>
            </Link>
          )}

          {!user?.admin && (
            <History
              isLogin={isLogin}
              loadingHistory={loadingHistory}
              idUser={user._id}
              quantityHistory={quantityHistory}
            />
          )}

          {!user?.admin && (
            <ShoppingCart
              isLogin={isLogin}
              loadingShoppingCart={loadingShoppingCart}
              idUser={user._id}
              quantityShoppingCart={quantityShoppingCart}
            />
          )}

          <div className="text-center cursor-pointer py-4 md:py-0 ">
            {isLogin ? (
              <>
                <p
                  onClick={() => {
                    dispatch({
                      type: LOGOUT_SAGA,
                    });
                  }}
                  className="text-struncate text-gray-900 font-bold  text-center hover:text-opacity-20"
                >
                  Đăng xuất
                </p>
                <p className="font-semibold text-struncate">
                  {user?.firstName} {user?.lastName}
                </p>
              </>
            ) : (
              <Link to="/login">
                <p className=" font-semibold text-center text-gray-900 hover:text-opacity-20">
                  Đăng nhập
                </p>
              </Link>
            )}
          </div>
        </div>
        <div
          className=" col-span-1 flex md:hidden mt-3 justify-center"
          onClick={() => {
            showMenu();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </nav>

      <div className="px-8 py-3 navbar grid-cols-6 gap-4 grid lg:grid-cols-10 lg:gap-0 bg-[#ffd400] cursor-pointer">
        <Link to={"/smartphone"}>
          <div className="col-span-1 text-center font-semibold flex flex-col  items-center md:block">
            <SmartphoneIcon
              style={{ width: "0.8em" }}
              className="text-gray-800 font-thin"
            />
            <span className="text-struncate font-normal">Điện thoại</span>
          </div>
        </Link>
        <div className="col-span-1 text-center flex flex-col  items-center md:block">
          <Link to={"/laptop-adv"}>
            <LaptopIcon
              style={{ width: "0.8em" }}
              className="text-gray-900 font-thin"
            />
            <span className="text-struncate">Laptop</span>
          </Link>
        </div>
        <div className="col-span-1 text-center flex flex-col  items-center md:block">
          <Link to={"/tablet"}>
            <TabletMacIcon
              style={{ width: "0.8em" }}
              className="text-gray-900 font-thin"
            />
            <span className="text-struncate">Tablet</span>
          </Link>
        </div>
        <div className="group col-span-1 relative">
          <Link to={"/accessory-adv"}>
            <div className="text-center flex flex-col  items-center md:block">
              <HeadphonesIcon
                style={{ width: "0.8em" }}
                className="text-gray-900 font-thin"
              />
              <span className="text-struncate">Phụ Kiện</span>
              <div className="hidden absolute top-1 right-8 lg:inline-block cursor-pointer">
                <ArrowDropDownIcon className="" />
              </div>
            </div>
          </Link>

          <div className="z-50 lg:absolute hidden rounded-md lg:bg-white lg:w-[400px] gap-4 lg:top-8 lg:p-4 lg:group-hover:flex lg:after:w-[20px] lg:after:h-[20px] lg:after:absolute  lg:after:-top-4 ribbon  after:left-[13%]">
            <div className="mr-4">
              <h3 className="font-semibold border-b-2">Phụ kiện di động</h3>
              <ul>
                <Link to={"/accessory?type=backupCharger"}>
                  <li className="p-2 hover:font-semibold">Sạc dự phòng</li>
                </Link>
                <Link to={"/accessory?type=chargingCable"}>
                  <li className="p-2 hover:font-semibold">Sạc cáp</li>
                </Link>
                <Link to={"/accessory?type=appleAccessory"}>
                  <li className="p-2 hover:font-semibold">Phụ kiện apple</li>
                </Link>
              </ul>
            </div>

            <div className="">
              <h3 className="font-semibold border-b-2">Phụ kiện Gamming</h3>
              <ul>
                <Link to={"/accessory?type=mouse"}>
                  <li className="p-2 hover:font-semibold">Chuột </li>
                </Link>
                <Link to={"/accessory?type=keyboard"}>
                  <li className="p-2 hover:font-semibold">Bàn phím</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-1 text-center flex flex-col items-center md:block">
          <Link to={"/swatch-adv"}>
            <WatchIcon
              style={{ width: "0.8em" }}
              className="text-gray-900 font-thin"
            />
            <span className="text-struncate">Đồng hồ</span>
          </Link>
        </div>
        <div className="col-span-1 text-center flex flex-col items-center ">
          <Link to={"/pc"}>
            <DesktopMacIcon
              style={{ width: "0.8em" }}
              className="text-gray-900 font-thin"
            />
            <span className="block">PC</span>
          </Link>
        </div>

        <div className="col-span-1 text-center flex flex-col items-center md:block">
          <span className="text-struncate">Máy cũ giá rẻ, bán chạy</span>
        </div>

        <div className="col-span-1 text-center flex flex-col items-center md:block">
          <span className="text-struncate">Sim thẻ cào</span>
        </div>

        <div className="col-span-1 text-center flex flex-col items-center md:block">
          <span className="text-struncate">Trả góp điện nước</span>
        </div>
        <div className="col-span-1 text-center flex flex-col items-center md:block">
          <span className="text-struncate">Các dịch vụ khác,...</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
