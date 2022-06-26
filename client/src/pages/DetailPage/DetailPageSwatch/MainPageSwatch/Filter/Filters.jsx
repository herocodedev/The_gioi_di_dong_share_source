import { Badge, Button, CircularProgress } from "@mui/material";
import ButtonPopover from "../../../../../components/Button/ButtonPopover";
import FilterButton from "../../../../../components/Filters/FilterButton";
import { filterPriceSwatch } from "../../../global/dataFilter";
import AllFilter from "./AllFillter/AllFilter";

function Filters(props) {
  const { filterBrand, loadingFilter, filterProducts, filters, category } =
    props;
  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 z-20 py-2 gap-2 sticky top-0 bg-white shadow-md px-2 rounded-md">
      <div className="m-auto">
        {loadingFilter ? (
          <Button variant="outlined" color="primary">
            <CircularProgress size={20} color="inherit" />
          </Button>
        ) : (
          <Badge badgeContent={filters.length} color="secondary">
            <ButtonPopover
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              }
              name={"Bộ lọc"}
              Component={
                <AllFilter
                  category={category}
                  filterProducts={filterProducts}
                  filters={filters}
                  filterBrand={filterBrand}
                />
              }
            />
          </Badge>
        )}
      </div>
      <div className="m-auto">
        <ButtonPopover
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          }
          name={"Hãng"}
          Component={
            <FilterButton
              category={category}
              filters={filters}
              data={filterBrand}
            />
          }
        />
      </div>

      <div className="m-auto">
        <ButtonPopover
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          }
          name={"Giá"}
          Component={
            <FilterButton
              category={category}
              filters={filters}
              data={filterPriceSwatch.filters}
            />
          }
        />
      </div>
    </div>
  );
}

export default Filters;
