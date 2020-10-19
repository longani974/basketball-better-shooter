import React, { Component } from "react";

import Button from "../../../UI/Button/Button";

import classes from "./NumberOfShoots.module.css";

class numberOfShoots extends Component {
  state = {
    nbOfShoots: 10,
  };

  handleChange = (event) => {
    const val = event.target.value;
    this.setState({
      nbOfShoots: val >= 1 ? val : "",
    });
  };

  incrementShoots = () => {
    const shoots = this.state.nbOfShoots;
    this.setState({
      nbOfShoots: shoots + 1,
    });
  };

  decrementShoots = () => {
    const shoots = this.state.nbOfShoots;
    this.setState({
      nbOfShoots: shoots - 1 > 1 ? shoots - 1 : 1,
    });
  };

  clickHandler = (nb) => {
    if (!this.state.nbOfShoots) return;
    this.props.showPanel();
    this.props.changeMaxScore(nb);
  };

  render() {
    return (
      <div>
        <label>
          <p className={classes.Title}>
            Choose how many shoots you want to take:
          </p>
          <input
            className={classes.Label}
            type="number"
            value={this.state.nbOfShoots}
            onChange={this.handleChange}
          ></input>
          <div className={classes.AdjustScoreBtn}>
            <Button btnType="Increment" clicked={this.incrementShoots}>
              +
            </Button>
            <Button btnType="Decrement" clicked={this.decrementShoots}>
              -
            </Button>
          </div>
          <Button
            btnType="Done"
            clicked={() => this.clickHandler(this.state.nbOfShoots)}
          >
            Validate
          </Button>
        </label>
      </div>
    );
  }
}

export default numberOfShoots;
