import React from "react";

import classes from "./ChooseSpot.module.css";
import { floorColor } from "../../../../constants/colors";

const chooseSpot = () => {
  return (
    <div style={{ "--bgColor": floorColor }} className={classes.Container}>
      <span>
        ^
      </span>
      <span>Tap On Spot</span>
    </div>
  );
};

export default chooseSpot;
