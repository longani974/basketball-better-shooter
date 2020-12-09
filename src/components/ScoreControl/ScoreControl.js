import React from "react";

import CountShootHit from "./CountShootHit/CountShootHit";
import ShootOrQuit from "./ShootOrQuit/ShootOrQuit";

import classes from "./ScoreControl.module.css";
import { floorColor } from "../../constants/colors";
//import backImage from "../../assets/img/back.svg"

const scoreControl = (props) => {
  let panel = <ShootOrQuit trainingDone={props.trainingDone} shootsDatas={props.shootsDatas}/>;

  if (props.shooting) {
    panel = (
      <CountShootHit
        score={props.score}
        maxScore={props.maxScore}
        addPoint={props.addPoint}
        removePoint={props.removePoint}
        scoreDone={props.scoreDone}
      />
    );
  }
  return (
    <div style={{ "--bgColor": floorColor }} className={classes.Container}>
      {/* <img src={backImage} alt="" className={classes.BackImage}/> */}
      {panel}
    </div>
  );
};

export default scoreControl;
