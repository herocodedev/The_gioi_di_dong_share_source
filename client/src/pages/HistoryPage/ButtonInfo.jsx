import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import * as React from "react";
function ButtonInfo(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { name, address, gender } = props;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        size="small"
        onClick={handleClick}
      >
        <span className="text-[10px]">Thông tin đơn hàng</span>
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="py-2 px-4">
          <p className="capitalize">
            <span className="font-bold  text-sm text-struncate">
              Họ tên người nhận:
            </span>
            {name?.length > 30 ? name.slice(0, 29) + "..." : name}
          </p>
          <p className="capitalize">
            <span className="font-bold text-sm text-struncate">Địa chỉ:</span>
            {address?.length > 30 ? address.slice(0, 29) + "..." : address}
          </p>
          <p className="capitalize">
            <span className="font-bold text-sm text-struncate">Giới tính:</span>
            {gender === "male" ? "Nam" : "Nữ"}
          </p>
        </div>
      </Popover>
    </div>
  );
}

export default ButtonInfo;
