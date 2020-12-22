import React from "react";

import ShootOrQuit from "./ShootOrQuit/ShootOrQuit";

import classes from "./ScoreControl.module.css";
import { floorColor } from "../../constants/colors";

const scoreControl = (props) => {
    let panel = (
        <ShootOrQuit
            trainingDone={props.trainingDone}
            shootsDatas={props.shootsDatas}
        />
    );

    return (
        <div style={{ "--bgColor": floorColor }} className={classes.Container}>
            {panel}
        </div>
    );
};

export default scoreControl;
