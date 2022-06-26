import Drawer from "@mui/material/Drawer";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HIDE_DRAWER_HOC } from "../../redux/reducers/types/mainType";

export default function DrawerApp() {
  const dispatch = useDispatch();
  const { open, ComponentContent } = useSelector((state) => state.drawerHOC);

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={() => {
              dispatch({
                type: HIDE_DRAWER_HOC,
              });
            }}
          >
            {ComponentContent}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
