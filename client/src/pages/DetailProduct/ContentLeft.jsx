import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import InboxIcon from "@mui/icons-material/Inbox";
import MarkunreadMailboxOutlinedIcon from "@mui/icons-material/MarkunreadMailboxOutlined";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import { memo, useState } from "react";
import { useSelector } from "react-redux";
import SimpleSkeleton from "../../components/Skeleton/SimpleSkeleton";
import SliderAdvProduct from "../../components/Slider/SliderAdvProduct";
import VideoItem from "../../components/Video/VideoItem";
import Comments from "./Other/Comments";
function ContentLeft(props) {
  const { idVideo, images, description, name, id, category, user, isLogin } =
    props;
  const [value, setValue] = useState("");
  const { comments } = useSelector((state) => state.global);

  const renderStaticItem1 = () => {
    return (
      <div className="grid grid-cols-2 gap-4 my-4 border-b-[1px] pb-4">
        {images ? (
          <>
            <div className="flex flex-col justify-center sm:flex-row items-center gap-2">
              <CasesOutlinedIcon className="text-minLink" />
              <span className="text-sm text-center sm:text-left">
                Hư gì đổi nấy <strong>12 tháng</strong> tại 3165 siêu thị toàn
                quốc (miễn phí tháng đầu)
              </span>
            </div>
            <div className="flex flex-col justify-center sm:flex-row items-center gap-2">
              <AdminPanelSettingsOutlinedIcon className="text-minLink" />
              <span className="text-sm text-center sm:text-left">
                Bảo hành chính hãng điện thoại 1 năm tại các trung tâm bảo hành
                hãng
              </span>
            </div>
            <div className="flex flex-col justify-center sm:flex-row items-center gap-2">
              <MarkunreadMailboxOutlinedIcon className="text-minLink" />
              <span className="text-sm text-center sm:text-left">
                Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning
              </span>
            </div>
          </>
        ) : (
          <>
            <SimpleSkeleton height={50} />
            <SimpleSkeleton height={50} />
          </>
        )}
      </div>
    );
  };

  const renderDesc = () => {
    return (
      <div className="my-2">
        {description ? (
          <>
            <h1 className="font-semibold text-center text-xl sm:text-left sm:text-2xl my-2">
              Thông tin sản phẩm
            </h1>
            <p className="leading-7 text-sm sm:text-base">{description}</p>
            <h1 className="font-semibold text-xl sm:text-2xl my-2">
              Một số nâng cấp mới
            </h1>
            <p className="leading-7 text-sm sm:text-base">Đang cập nhật...</p>
          </>
        ) : (
          <SimpleSkeleton height={200} />
        )}
      </div>
    );
  };

  return (
    <>
      <div className="flex items-center flex-col">
        {/* Slider */}
        <div className="w-[100%] my-2">
          {images ? (
            value ? (
              <SliderAdvProduct images={value} />
            ) : (
              <VideoItem idVideo={idVideo} width="100%" height="400" />
            )
          ) : (
            <SimpleSkeleton height={300} />
          )}
        </div>
        {/* Category */}
        <div className="grid grid-cols-2 si:grid-cols-3 sm:grid-cols-6">
          {images ? (
            <>
              <div className="">
                <div className="flex h-[60px] justify-center items-center">
                  {/* icon */}
                  <div className="h-[100%] flex justify-center items-center flex-col rounded-md font-thin ">
                    <WorkspacePremiumOutlinedIcon
                      style={{ color: "grey", fontSize: "30px" }}
                    />
                  </div>
                </div>
                <div className="max-w-[70px] text-center text-[15px] mt-1 ">
                  Nổi bật
                </div>
              </div>
              {/* Video button */}
              <div
                className="cursor-pointer"
                onClick={() => {
                  setValue("");
                }}
              >
                <div className="flex h-[60px] justify-center items-center">
                  {/* icon */}
                  <div
                    className={`h-[100%] flex justify-center items-center flex-col rounded-md p-2 font-thin border-[1px] ${
                      !value ? "border-orange-500" : ""
                    }`}
                  >
                    <DesktopMacIcon
                      style={{ color: "grey", fontSize: "30px" }}
                    />
                  </div>
                </div>
                <div className="max-w-[70px] text-center text-[15px] mt-1 ">
                  1 video
                </div>
              </div>
              {/* End Video button */}
              {/* Image color */}
              {images?.map((item, index) => (
                <div
                  className="cursor-pointer mx-2"
                  key={index}
                  onClick={() => {
                    setValue(item);
                  }}
                >
                  <div className="flex h-[60px] justify-center items-center">
                    {/* icon */}
                    <div
                      className={`h-[100%] flex justify-center items-center flex-col rounded-md p-2 font-thin border-[1px] ${
                        value?.colorValue === item.colorValue
                          ? "border-orange-600"
                          : ""
                      }`}
                    >
                      <img
                        className="w-[100%] h-[100%] object-contain"
                        src={item?.imgs[index]?.url}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="max-w-[70px] text-center text-[15px] mt-1 ">
                    {item.colorName}
                  </div>
                </div>
              ))}
              {/* End Image color */}
              <div className="">
                <div className="flex h-[60px] justify-center items-center">
                  {/* icon */}
                  <div className="h-[100%] flex justify-center items-center flex-col rounded-md p-2 font-thin">
                    <InboxIcon style={{ color: "grey", fontSize: "30px" }} />
                  </div>
                </div>
                <div className="max-w-[70px] text-center text-[15px] mt-1 ">
                  Hình mở hộp
                </div>
              </div>
              <div className="">
                <div className="flex h-[60px] justify-center items-center">
                  {/* icon */}
                  <div className="h-[100%] flex justify-center items-center flex-col rounded-md p-2 font-thin">
                    <ThreeSixtyIcon
                      style={{ color: "grey", fontSize: "30px" }}
                    />
                  </div>
                </div>
                <div className="max-w-[70px] text-center text-[15px] mt-1 ">
                  Quay 360 độ
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mx-2">
                <SimpleSkeleton width={50} height={50} />
              </div>
              <div className="mx-2">
                <SimpleSkeleton width={50} height={50} />
              </div>
              <div className="mx-2">
                <SimpleSkeleton width={50} height={50} />
              </div>
              <div className="mx-2">
                <SimpleSkeleton width={50} height={50} />
              </div>
              <div className="mx-2">
                <SimpleSkeleton width={50} height={50} />
              </div>
            </>
          )}
        </div>
      </div>
      {renderStaticItem1()}

      {/* Description */}
      {renderDesc()}

      {name ? (
        <div className="px-3 py-2 border-[1px] rounded-md">
          {/* Comment */}
          <Comments
            comments={comments}
            name={name}
            id={id}
            category={category}
            user={user}
            isLogin={isLogin}
            images={images}
          />
        </div>
      ) : (
        <SimpleSkeleton height={450} />
      )}
    </>
  );
}

export default memo(ContentLeft);
