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
        activeSpot={props.activeSpot}
      />
      <LeftWing
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={longColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
        activeSpot={props.activeSpot}
      />
      <Straight
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={longColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
        activeSpot={props.activeSpot}
      />
      <RightWing
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={longColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
        activeSpot={props.activeSpot}
      />
      <RightBaseline
        areaChoosed={props.areaChoosed}
        isSelected={props.isSelected}
        color={longColor}
        selectedColor={successColor}
        spotShootsData={props.spotShootsData}
        activeSpot={props.activeSpot}
      />
    </>
  );
};

export default long;
