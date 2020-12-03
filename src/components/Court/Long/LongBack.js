import React from "react";

import LeftBaselineBack from "./LeftBaseline/LeftBaselineBack";
import LeftWingBack from "./LeftWing/LeftWingBack";
import StraightBack from "./Straight/StraightBack";
import RightWingBack from "./RightWing/RightWingBack";
import RightBaselineBack from "./RightBaseline/RightBaselineBack";
import { longColor} from "../../../constants/colors";

const longBack = (props) => {
  return (
    <>
      <LeftBaselineBack
        color={longColor}
        isSelected={props.isSelected}
        selectColor={props.selectColor}
      />
      <LeftWingBack
        color={longColor}
        isSelected={props.isSelected}
        selectColor={props.selectColor}
      />
      <StraightBack
        color={longColor}
        isSelected={props.isSelected}
        selectColor={props.selectColor}
      />
      <RightWingBack
        color={longColor}
        isSelected={props.isSelected}
        selectColor={props.selectColor}
      />
      <RightBaselineBack
        color={longColor}
        isSelected={props.isSelected}
        selectColor={props.selectColor}
      />
    </>
  );
};

export default longBack;
