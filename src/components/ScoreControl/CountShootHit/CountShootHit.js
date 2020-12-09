import React, { Component } from "react";

import Button from "../../UI/Button/Button";
import Score from "../Score/Score";
import NumberOfShoots from "./NumberOfShoots/NumberOfShoots";
import InformationModule from '../../UI/InformationModule/InformationModule'
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
        <div>
            <InformationModule>
            How many shots
            <br/>have you scored?
            <Score
              currentScore={this.props.score}
              maxScore={this.props.maxScore}
            />
          </InformationModule>
          <div>
              <Button btnType="Increment" clicked={this.props.addPoint}>
                +
              </Button>
              <Button btnType="Decrement" clicked={this.props.removePoint}>
                -
              </Button>
            <Button btnType="Done" clicked={this.props.scoreDone}>
              Done
            </Button>
        </div>
        </div>
      );
    } else {
      return (
        <>
            <NumberOfShoots
              showPanel={this.showPanelHandler}
              changeMaxScore={this.props.changeMaxScore}
            />
        </>
      );
    }
  }
}

export default countShootHit;
