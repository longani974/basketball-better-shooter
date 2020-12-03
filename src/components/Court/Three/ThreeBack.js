import React from "react";

import LeftCornerBack from "./LeftCorner/LeftCornerBack";
import LeftWingBack from "./LeftWing/LeftWingBack";
import StraightBack from "./Straight/StaightBack";
import RightWingBack from "./RightWing/RightWingBack";
import RightCornerBack from "./RightCorner/RightCornerBack";
import { threeColor } from "../../../constants/colors";

const three = (props) => {
  return (
    <>
      <LeftCornerBack
        color={threeColor}
        isSelected={props.isSelected}
        selectColor={props.selectColor}
      />
      <LeftWingBack
        color={threeColor}
        isSelected={props.isSelected}
        selectColor={props.selectColor}
      />
      <StraightBack
        color={threeColor}
        isSelected={props.isSelected}
        selectColor={props.selectColor}
      />
      <RightCornerBack
        color={threeColor}
        isSelected={props.isSelected}
        selectColor={props.selectColor}
      />
      <RightWingBack
        color={threeColor}
        isSelected={props.isSelected}
        selectColor={props.selectColor}
      />
    </>
  );
};

export default three;
