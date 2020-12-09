import React from "react";

import classes from "./ChooseSpot.module.css";
import { whiteTransparent } from "../../../../constants/colors";

const chooseSpot = () => {
  return (
    <div style={{ "--bgColor": whiteTransparent }} className={classes.Container}>
      Tap a Court Spot
      <br/>Above to Start
      <br/>your Training session
    </div>
  );
};

export default chooseSpot;
