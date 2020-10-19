import React from "react";

import AroundRim from "./AroundRim/AroundRim";
import Mid from "./Mid/Mid";
import Long from "./Long/Long";
import Three from "./Three/Three";
import Floor from "./Floor/Floor";
import Basket from "./Basket/Basket";
import Lines from "./Lines/Lines";

const court = (props) => {
  let width = 0;
  window.innerWidth < window.innerHeight
    ? (width = 100)
    : (width = 100 * (152 / 220));

  return (
    <>
      <div
        style={{
          width: width + "%",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="svg1524"
          version="1.1"
          viewBox="0 0 98.954165 80.433344"
          height="100%"
          width="100%"
        >
          <defs id="defs1518" />
          <g id="layer1">
            <Floor
              totalGoodShoots={props.totalGoodShoots}
              totalShoots={props.totalShoots}
            />
            <AroundRim
              areaChoosed={props.areaChoosed}
              isSelected={props.isSelected}
              spotShootsData={props.spotShootsData}
            />
            <Mid
              areaChoosed={props.areaChoosed}
              isSelected={props.isSelected}
              spotShootsData={props.spotShootsData}
            />
            <Long
              areaChoosed={props.areaChoosed}
              isSelected={props.isSelected}
              spotShootsData={props.spotShootsData}
            />
            <Three
              areaChoosed={props.areaChoosed}
              isSelected={props.isSelected}
              spotShootsData={props.spotShootsData}
            />
            <Lines />
            <Basket />
          </g>
        </svg>
      </div>
    </>
  );
};

export default court;
