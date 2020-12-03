import React from "react";

import LeftBaselineBack from "./LeftBaseline/LeftBaselineBack";
import StraightBack from "./Straight/StraightBack";
import RightBaselineBack from "./RightBaseline/RightBaselineBack";

import { midColor } from "../../../constants/colors";

const midBack = (props) => {
  return (
    <>
      <LeftBaselineBack
        color={midColor}
        isSelected={props.isSelected}
        selectColor={props.selectColor}
      />
      <StraightBack
        color={midColor}
        isSelected={props.isSelected}
        selectColor={props.selectColor}
      />
      <RightBaselineBack
        color={midColor}
        isSelected={props.isSelected}
        selectColor={props.selectColor}
      />
    </>
  );
};

export default midBack;
