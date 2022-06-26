import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Skeleton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function Title(props) {
  const { name, brand, category } = props;
  const renderStar = () => {
    let jsx = [];
    for (let i = 0; i < 5; i++) {
      jsx.push(
        <StarOutlineIcon
          key={i}
          className="text-orange-600"
          style={{ fontSize: "16px" }}
        />
      );
    }
    return jsx;
  };
  return (
    <div className="border-b-[1px] pb-2 border-gray-300">
      {/* category */}
      <div className="">
        {category ? (
          <Link
            to={`/${category}`}
            className="capitalize text-minLink hover:opacity-80"
          >
            {category}
          </Link>
        ) : (
          <Skeleton animation="wave" width={80} height={20} />
        )}

        {brand && (
          <span className="text-minLink capitalize">
            <ArrowForwardIosIcon
              style={{ fontSize: "14px", margin: "0 12px" }}
            />
            {brand}
          </span>
        )}
      </div>
      {/* title */}

      <div className="my-2 ">
        <div className="flex justify-between items-center gap-4">
          {name ? (
            <div className="flex gap-2 flex-wrap">
              <h1 className="font-bold text-xl text-struncate">{name}</h1>

              <div className="flex items-center">{renderStar()}</div>
              <div className="">
                <span className="text-minLink text-[14px]">
                  <MoreHorizIcon /> đánh giá
                </span>
              </div>
              <div className="">
                <span className="text-minLink text-[14px]">
                  <AddCircleOutlineRoundedIcon style={{ fontSize: "14px" }} />
                  So sánh
                </span>
              </div>
            </div>
          ) : (
            <Skeleton animation="wave" height={30} width="100%" />
          )}

          <div className="flex gap-2 flex-wrap">
            {name ? (
              <div className="p-1 rounded-md flex items-center bg-minLink text-white text-[12px] px-2">
                <span className=" m-auto">
                  <ThumbUpRoundedIcon
                    style={{
                      fontSize: "14px",
                      marginRight: "2px",
                      paddingBottom: "2px",
                    }}
                  />
                </span>
                <span className="text-center hidden sm:block">Thích 109</span>
              </div>
            ) : (
              <Skeleton animation="wave" height={30} width={100} />
            )}

            {name ? (
              <div className="p-1 rounded-md flex bg-minLink text-white text-[12px] px-2">
                <span className=" m-auto">
                  <ShareRoundedIcon
                    style={{
                      fontSize: "14px",
                      marginRight: "2px",
                      paddingBottom: "2px",
                    }}
                  />
                </span>
                <span className="text-center hidden sm:block">Chia sẽ 109</span>
              </div>
            ) : (
              <Skeleton animation="wave" height={30} width={100} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
