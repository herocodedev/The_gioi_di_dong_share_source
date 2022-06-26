import { Pagination } from "@mui/material";
import queryString from "query-string";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { SET_HISTORY_ADMIN } from "../../../redux/reducers/types/mainType";
import { GET_ALL_HISTORY_NO_SIGN_SAGA } from "../../../redux/sagas/types/main";
import Receipt from "./Other/Receipt";
function NoSignReceipt(props) {
  const { historyAdmin, quantityHistoryAdmin } = useSelector(
    (state) => state.global
  );
  const navigate = useNavigate();
  const { search } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    let searchObj;
    if (search) {
      searchObj = queryString.parse(search);
    }
    dispatch({
      type: GET_ALL_HISTORY_NO_SIGN_SAGA,
      page: searchObj?.page || 1,
    });
    return () => {
      dispatch({
        type: SET_HISTORY_ADMIN,
        data: [],
        total: 0,
      });
    };
  }, [dispatch, search]);

  return (
    <>
      <div className="content px-4 py-2">
        <span className="font-semibold text-xl">Tổng số lượng đơn hàng: </span>
        <strong className="text-red-500">{quantityHistoryAdmin}</strong>
      </div>

      <div className="content px-4 py-2">
        <h1 className="text-center text-xl font-semibold">Tất cả đơn hàng</h1>
        {historyAdmin?.map((item, index) => (
          <Receipt
            actionName={GET_ALL_HISTORY_NO_SIGN_SAGA}
            page={queryString.parse(search)?.page || 1}
            key={index}
            receipt={item}
          />
        ))}
        <div className="mt-4 flex justify-center">
          <Pagination
            page={Number(queryString.parse(search)?.page) || 1}
            onChange={(event, page) => {
              navigate(`/admin/receipt/noSign?page=${page}`);
            }}
            count={Math.ceil(quantityHistoryAdmin / 5) || 0}
            variant="outlined"
            color="primary"
          />
        </div>
      </div>
    </>
  );
}

export default NoSignReceipt;
