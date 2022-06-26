import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Paper from "@mui/material/Paper";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardEditCustom from "../../../../components/Admin/CardEditCustom";
import PaginateCT from "../../../../components/Pagination/PaginateCT";
import SkeletonList from "../../../../components/Skeleton/SkeletonList";
import { OPEN_DRAWER_HOC } from "../../../../redux/reducers/types/mainType";
import { GET_TABLET_SAGA } from "../../../../redux/sagas/types/main";
import AppBarCT from "../global/AppBarCT";
import FormAddTablet from "./FormAddTablet";
function Tablet(props) {
  const { loadingSkeleton } = useSelector((state) => state.global);
  const { tablet } = useSelector((state) => state.product);
  const { totalQuantity } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_TABLET_SAGA,
    });
    return () => {
      // Solve case when search data not enough when component unmount
      dispatch({
        type: GET_TABLET_SAGA,
      });
    };
  }, [dispatch]);
  const renderCardList = () => {
    return tablet?.map((product, index) => (
      <CardEditCustom key={index} product={product} category={"tablet"} />
    ));
  };
  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: "#eaeff1" }}>
        <Paper sx={{ maxWidth: 1000, margin: "auto", overflow: "hidden" }}>
          <AppBarCT />
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto">
              {!loadingSkeleton && (
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 sm:-m-4 -mx-4 -mb-10 -mt-4">
                  {renderCardList()}
                </div>
              )}
              {loadingSkeleton && <SkeletonList />}
            </div>
          </section>
          <PaginateCT
            length={Math.ceil(
              totalQuantity[0]?.tablet ? totalQuantity[0].tablet / 10 : 0
            )}
            actionName={GET_TABLET_SAGA}
          />
          <div
            className="fixed bottom-4 right-4"
            onClick={() => {
              dispatch({
                type: OPEN_DRAWER_HOC,
                ComponentContent: <FormAddTablet />,
              });
            }}
          >
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </div>
        </Paper>
      </Box>
    </Box>
  );
}

export default Tablet;
