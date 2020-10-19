import React, { Component } from "react";

import Button from "../../UI/Button/Button";
import Score from "../Score/Score";
import NumberOfShoots from "./NumberOfShoots/NumberOfShoots";

import classes from "./CountShootHIt.module.css";

class countShootHit extends Component {
  state = {
    showPanel: false,
  };

  showPanelHandler = () => {
    this.setState({
      showPanel: !this.state.showPanel,
    });
  };

  render() {
    if (this.state.showPanel) {
      return (
        <>
          <div className={classes.Background}></div>
          <div className={classes.Position}>
            <div className={classes.AdjustScoreBtn}>
              <Button btnType="Increment" clicked={this.props.addPoint}>
                +
              </Button>
              <Button btnType="Decrement" clicked={this.props.removePoint}>
                -
              </Button>
            </div>
            <Score
              currentScore={this.props.score}
              maxScore={this.props.maxScore}
            />
            <Button btnType="Done" clicked={this.props.scoreDone}>
              Done
            </Button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={classes.Background}></div>
          <div className={classes.Position}>
            <NumberOfShoots
              showPanel={this.showPanelHandler}
              changeMaxScore={this.props.changeMaxScore}
            />
          </div>
        </>
      );
    }
  }
}

export default countShootHit;
