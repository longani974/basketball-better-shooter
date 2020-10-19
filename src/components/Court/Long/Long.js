import React from "react";

import LeftBaseline from "./LeftBaseline/LeftBaseline";
import LeftWing from "./LeftWing/LeftWing";
import Straight from "./Straight/Straight";
import RightWing from "./RightWing/RightWing";
import RightBaseline from "./RightBaseline/RightBaseline";
import { longColor, successColor } from "../../../constants/colors";

const long = (props) => {
  return (
    <>
      <LeftBaseline
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={longColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
      />
      <LeftWing
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={longColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
      />
      <Straight
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={longColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
      />
      <RightWing
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={longColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
      />
      <RightBaseline
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={longColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
      />
    </>
  );
};

export default long;
