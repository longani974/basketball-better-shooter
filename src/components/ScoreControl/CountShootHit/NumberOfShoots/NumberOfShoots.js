import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../../../UI/Button/Button";
import * as actions from "../../../../store/actions/scoreControl";

import classes from "./NumberOfShoots.module.css";

class numberOfShoots extends Component {
  // state = {
  //   nbOfShoots: 10,
  // };

  handleChange = (event) => {
    const val = event.target.value;
    // this.setState({
    //   nbOfShoots: val >= 1 ? val : "",
    // });
    this.props.onChange(val);
  };

  // incrementShoots = () => {
  //   const shoots = this.state.nbOfShoots;
  //   this.setState({
  //     nbOfShoots: shoots + 1,
  //   });
  // };

  // decrementShoots = () => {
  //   const shoots = this.state.nbOfShoots;
  //   this.setState({
  //     nbOfShoots: shoots - 1 > 1 ? shoots - 1 : 1,
  //   });
  // };

  clickHandler = (nb) => {
    if (!this.props.nbOfShoots) return;
    this.props.showPanel();
    // this.props.changeMaxScore(nb);
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
            value={this.props.nbOfShoots}
            onChange={this.handleChange}
          ></input>
          <div className={classes.AdjustScoreBtn}>
            <Button btnType="Increment" clicked={this.props.onIncrementShoots}>
              +
            </Button>
            <Button btnType="Decrement" clicked={this.props.onDecrementShoots}>
              -
            </Button>
          </div>
          <Button
            btnType="Done"
            clicked={() => this.clickHandler(this.props.nbOfShoots)}
          >
            Validate
          </Button>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nbOfShoots: state.maxScore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementShoots: () => dispatch(actions.incrementNbOfShoots()),
    onDecrementShoots: () => dispatch(actions.decrementNbOfShoots()),
    onChange: (nb) => dispatch(actions.handleChange(nb)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(numberOfShoots);
