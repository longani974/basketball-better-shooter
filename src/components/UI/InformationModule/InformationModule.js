import React from "react";

import classes from "./InformationModule.module.css";
import { whiteTransparent } from "../../../constants/colors";

const informationModule = (props) => {
  return (
    <div style={{ "--bgColor": whiteTransparent }} className={classes.Container}>
      {props.children}
    </div>
  );
};

export default informationModule;