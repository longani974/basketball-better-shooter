import React from "react";

import LeftCorner from "./LeftCorner/LeftCorner";
import LeftWing from "./LeftWing/LeftWing";
import Straight from "./Straight/Staight";
import RightWing from "./RightWing/RightWing";
import RightCorner from "./RightCorner/RightCorner";
import { threeColor, successColor } from "../../../constants/colors";

const three = (props) => {
  return (
    <>
      <LeftCorner
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={threeColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
      />
      <LeftWing
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={threeColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
      />
      <Straight
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={threeColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
      />
      <RightCorner
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={threeColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
      />
      <RightWing
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={threeColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
      />
    </>
  );
};

export default three;
