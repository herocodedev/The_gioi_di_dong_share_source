import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import React, { useState } from "react";

function ButtonPopover(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { name, Component, icon } = props;
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
      <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
        <div className="text-gray-600 flex items-center gap-2 font-semibold">
          {icon}
          <span className="text-[11px]">
            {name.length > 6 ? name.slice(0, 4) + "..." : name}
          </span>
        </div>
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
        {Component}
      </Popover>
    </div>
  );
}

export default ButtonPopover;
