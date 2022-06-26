import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";

export default function PaginateCT(props) {
  const dispatch = useDispatch();
  const { length, actionName, queryParam, category } = props;

  return (
    <Stack spacing={2} className="my-4 flex justify-center items-center">
      <Pagination
        onChange={(e, page) => {
          let newQueryParam = "";
          if (queryParam) {
            newQueryParam = queryParam + `&page=${page}`;
          }

          dispatch({
            type: actionName,
            page,
            queryParam: newQueryParam,
            category,
          });
        }}
        count={length || 0}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
}
