import React from 'react';

import classes from './Score.module.css';

const score = (props) => {
    return (
        // ' notranslate' so the div can not be translate (if translate is active the score display stay at 0)
        <div className={classes.Score + ' notranslate'}>
            {props.currentScore} / {props.maxScore}
        </div>
    );
};

export default score;
