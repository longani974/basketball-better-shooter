import React from "react";

import LeftBaseline from "./LeftBaseline/LeftBaseline";
import Straight from "./Straight/Straight";
import RightBaseline from "./RightBaseline/RightBaseline";

import { midColor, successColor } from "../../../constants/colors";

const mid = (props) => {
  return (
    <>
      <LeftBaseline
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={midColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
      />
      <Straight
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={midColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
      />
      <RightBaseline
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={midColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
      />
    </>
  );
};

export default mid;
