import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
export default function TableCT(props) {
  const { columns, rows } = props;

  return (
    <div style={{ height: 320, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={4}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[4]}
      />
    </div>
  );
}
