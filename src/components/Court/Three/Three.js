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
        activeSpot={props.activeSpot}
      />
      <LeftWing
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={threeColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
        activeSpot={props.activeSpot}
      />
      <Straight
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={threeColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
        activeSpot={props.activeSpot}
      />
      <RightCorner
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={threeColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
        activeSpot={props.activeSpot}
      />
      <RightWing
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={threeColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
        activeSpot={props.activeSpot}
      />
    </>
  );
};

export default three;
