import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeIcon from "@mui/icons-material/Mode";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Button, Pagination } from "@mui/material";
import { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Comment from "../../../components/Comment/Comment";
import { OPEN_MODAL_HOC } from "../../../redux/reducers/types/mainType";
import {
  CREATE_COMMENT_SAGA,
  DELETE_COMMENT_SAGA,
  EDIT_COMMENT_SAGA,
  GET_COMMENT_SAGA,
} from "../../../redux/sagas/types/main";
import likeAction from "../../../assests/img/like.png";

function Comments(props) {
  const dispatch = useDispatch();
  const { images, name, id, category, user, isLogin, comments } = props;
  const [showPaginate, setShowPaginate] = useState(false);
  useEffect(() => {
    dispatch({
      type: GET_COMMENT_SAGA,
      data: {
        idProduct: id,
        page: 1,
      },
    });
  }, []);
  const renderStar = (quantity) => {
    let jsx = [];
    for (let i = 0; i < quantity; i++) {
      jsx.push(
        <StarOutlineIcon
          key={i}
          style={{ fontSize: "18px" }}
          className="text-orange-600"
        />
      );
    }
    return jsx;
  };
  const renderComment = () => {
    return comments?.comments?.length > 0 ? (
      <>
        {comments?.comments?.map((item, index) => (
          <div key={index} className="py-4 border-b-[1px] ">
            <div className="flex gap-2 items-center">
              <AccountCircleOutlinedIcon className="text-[#ffc400]" />
              <h1 className="font-semibold capitalize">
                {item?.firstName + " " + item?.lastName}
              </h1>
              <CreateOutlinedIcon
                onClick={() => {
                  dispatch({
                    type: OPEN_MODAL_HOC,
                    ComponentContentModal: (
                      <Comment
                        star={item?.star}
                        idComment={item?._id}
                        action={EDIT_COMMENT_SAGA}
                        value={item?.comment}
                        category={category}
                        firstImage={images[0]?.imgs[0]?.url}
                        idProduct={id}
                        user={user}
                        isLogin={isLogin}
                        name={name}
                      />
                    ),
                  });
                }}
                style={
                  item.idUser === user._id
                    ? { fontSize: "18px", display: "block" }
                    : { display: "none" }
                }
                className={`text-minLink text-[18px] `}
              />
              <DeleteOutlineOutlinedIcon
                onClick={() => {
                  if (
                    window.confirm("Bạn chắc chắc chắn muốn xóa đánh giá này?")
                  ) {
                    dispatch({
                      type: DELETE_COMMENT_SAGA,
                      data: {
                        idComment: item._id,
                        idProduct: id,
                      },
                    });
                  }
                }}
                style={
                  item.idUser === user._id
                    ? { fontSize: "18px", display: "block" }
                    : { display: "none" }
                }
                className={`text-red-600 text-[18px]`}
              />
            </div>
            <p className="text-sm si:text-base my-2">{item?.comment}</p>
            <div className="flex gap-2 items-center">
              <div className="">{renderStar(item.star)}</div>
            </div>
          </div>
        ))}
      </>
    ) : (
      <p className="text-center mt-2 text-xl">Không có đánh giá nào</p>
    );
  };

  const renderRateEvaluate = () => {
    let jsx = [];
    for (let i = 5; i >= 1; i--) {
      jsx.push(
        <div className="my-2" key={i}>
          <div className="flex gap-1 items-center">
            <span className="text-[16px]">{i}</span>
            <StarOutlineIcon style={{ fontSize: "16px" }} />
            <span
              style={{ width: `${i + 2}0%` }}
              className={`h-[5px] rounded-sm block bg-orange-500`}
            ></span>
          </div>
        </div>
      );
    }
    return jsx;
  };

  return (
    <>
      <h1 className="font-semibold text-xl text-center sm:text-left sm:text-xl my-2 text-struncate">
        Đánh giá {name}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 border-b-[1px] pb-4">
        <div className="col-span-1 lg:border-r-[1px]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-orange-600 text-2xl">4.0</span>
            <span className="font-semibold flex gap-1 items-center">
              {renderStar()}
            </span>
            <span className="">{comments?.total || 0} đánh giá</span>
          </div>
          {renderRateEvaluate()}
        </div>
        <div className="col-span-1 pt-4 gap-2">
          <img src={likeAction} className="w-[100px] h-[100px] m-auto" alt="" />
          <p className="text-sm si:text-base text-center">
            Được bình chọn là sản phẩm yêu thích nhất
          </p>
        </div>
      </div>

      {renderComment()}

      <div className="py-4 flex-col items-center flex flex-wrap gap-2 justify-center">
        <div className="flex items-center flex-col gap-2">
          <Button
            onClick={() => {
              setShowPaginate(true);
            }}
            variant="outlined"
            color="primary"
          >
            <span className="text-center text-[10px] si:text-sm">
              <ArrowRightIcon className="" />
              Xem thêm đánh giá
            </span>
          </Button>
        </div>
        <Button
          onClick={() => {
            dispatch({
              type: OPEN_MODAL_HOC,
              ComponentContentModal: (
                <Comment
                  action={CREATE_COMMENT_SAGA}
                  value=""
                  category={category}
                  firstImage={images[0]?.imgs[0]?.url}
                  idProduct={id}
                  user={user}
                  isLogin={isLogin}
                  name={name}
                />
              ),
            });
          }}
          variant="contained"
          color="primary"
        >
          <span className="text-center text-[10px] si:text-sm">
            <span className="hidden si:inline-block mr-2">
              <ModeIcon />
            </span>
            Viết đánh giá
          </span>
        </Button>
        {showPaginate && (
          <Pagination
            onChange={(e, page) => {
              dispatch({
                type: GET_COMMENT_SAGA,
                data: {
                  idProduct: id,
                  page: page,
                },
              });
            }}
            count={comments?.total ? Math.ceil(comments.total / 10) : 0}
            variant="outlined"
            color="primary"
          />
        )}
      </div>
    </>
  );
}

export default memo(Comments);
