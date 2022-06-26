import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Toolbar } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardEditSimple from "../../../components/Admin/CardEditSimple";
import PaginateCT from "../../../components/Pagination/PaginateCT";
import Search from "./Search";

function ListProduct(props) {
  const dispatch = useDispatch();
  const { setFieldValue, totalPro, content, category, rootName } = props;
  const actionName = "GET_" + category.toUpperCase() + "_SAGA";
  const products = useSelector((state) => state.product);
  const [showSearch, setShowSearch] = useState(false);
  const renderCard = () => {
    return products[category]?.map((x, y) => (
      <CardEditSimple
        setFieldValue={setFieldValue}
        rootName={rootName}
        key={y}
        data={x}
        category={category}
      />
    ));
  };

  return (
    <div className="min-w-[500px]">
      <div className="">
        <h3 className="my-2 ">
          <ArrowRightIcon />
          <span className="inline-block w-[100px]">{content}</span>
          <Button
            onClick={() => {
              dispatch({
                type: actionName,
                page: 1,
              });
              setShowSearch(true);
            }}
            size="normal"
            variant="outlined"
            color="primary"
          >
            <span className="text-[12px]">Xem tất cả</span>
          </Button>
        </h3>
        {/* Search */}
        {(showSearch || products[category]?.length > 0) && (
          <Toolbar className="shadow-md rounded-sm mb-2">
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <SearchIcon color="inherit" sx={{ display: "block" }} />
              </Grid>
              <Search category={category} type={category?.toUpperCase()} />
            </Grid>
          </Toolbar>
        )}
        {/* Search */}
        <div className="grid grid-cols-4 gap-2">{renderCard()}</div>

        <PaginateCT length={Math.ceil(totalPro / 10)} actionName={actionName} />
      </div>
    </div>
  );
}

export default ListProduct;
