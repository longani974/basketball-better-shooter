import React from "react";

import CountShootHit from "./CountShootHit/CountShootHit";
import ShootOrQuit from "./ShootOrQuit/ShootOrQuit";

import classes from "./ScoreControl.module.css";
import { floorColor } from "../../constants/colors";

const scoreControl = (props) => {
  let panel = <ShootOrQuit trainingDone={props.trainingDone} />;

  if (props.shooting) {
    panel = (
      <CountShootHit
        score={props.score}
        maxScore={props.maxScore}
        addPoint={props.addPoint}
        removePoint={props.removePoint}
        scoreDone={props.scoreDone}
        changeMaxScore={props.changeMaxScore}
      />
    );
  }
  return (
    <div style={{ "--bgColor": floorColor }} className={classes.Container}>
      {panel}
    </div>
  );
};

export default scoreControl;
