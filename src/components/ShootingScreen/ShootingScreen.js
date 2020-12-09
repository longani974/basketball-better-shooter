import React, { Component } from "react";
import { connect } from "react-redux";

import Court from "../Court/Court";
import ScoreControl from "../ScoreControl/ScoreControl";
import * as actions from "../../store/actions/scoreControl";

class ShootingScreen extends Component {
  state = {
    shooting: false,
    isAreaSelected: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    localStorageData: [],
  };

  componentDidMount() {
    // We receive the datas from the backend
    this.props.onInitDatas();
  }

  shootingAreaHandler = (area) => {
    this.setState((prevState) => {
      const arrIsSelected = [...prevState.isAreaSelected];
      arrIsSelected[area] = true;
      return { isAreaSelected: arrIsSelected, shooting: true };
    });
  };

  finishShootingHandler = () => {
    const areaArr = this.state.isAreaSelected;

    let spotIndex;

    for (let i = 0; i < areaArr.length; i++) {
      if (areaArr[i]) {
        spotIndex = i;
      }
    }

    let data = [...this.state.localStorageData];
    if (
      localStorage.getItem("shootData") &&
      !this.state.localStorageData.length
    ) {
      const extractData = JSON.parse(localStorage.getItem("shootData"));
      for (let i = 0; i < extractData.data.length; i++) {
        data.push(extractData.data[i]);
      }
    }
    data.push({
      id: Date.now(),
      spot: spotIndex,
      goodShoots: this.props.score,
      nbOfShoots: this.props.maxScore,
    });

    localStorage.setItem(
      "shootData",
      JSON.stringify({
        data,
      })
    );
    this.props.onSendDatas(JSON.parse(localStorage.getItem("shootData")).data, this.cleanDatas)
    this.props.onResetScore();
    this.setState((prevState) => {
      const arrIsSelected = [...prevState.isAreaSelected];
      const newArr = arrIsSelected.map((zone) => (zone = false));
      return {
        isAreaSelected: newArr,
        shooting: false,
        // score: 0,
        localStorageData: [...data],
      };
    });
  };

  cleanDatas = () => {
    this.setState({
      localStorageData: [],
    });
  };

  render() {

    const shootsDatas = []
    this.props.spotShootsData.forEach(d => shootsDatas.push([...d]))
    let totalShootsLocalStorage = 0
    let totalGoodShootsLocalStorage = 0

    
    if(localStorage.getItem("shootData")){
      const extractData = [...JSON.parse(localStorage.getItem("shootData")).data];

      for(let i = 0 ; i < extractData.length ; i++){
        shootsDatas[extractData[i].spot][0] = shootsDatas[extractData[i].spot][0] + extractData[i].goodShoots
        shootsDatas[extractData[i].spot][1] = shootsDatas[extractData[i].spot][1] + extractData[i].goodShoots

        //console.log(extractData[i])
        totalGoodShootsLocalStorage = totalGoodShootsLocalStorage + extractData[i].goodShoots
        totalShootsLocalStorage = totalShootsLocalStorage + extractData[i].nbOfShoots
      }
      //console.log(shootsDatas, this.props.spotShootsData)
    }



    return (
      <>
        <Court
          areaChoosed={this.shootingAreaHandler}
          isSelected={this.state.isAreaSelected}
          totalGoodShoots={this.props.totalGoodShoots + totalGoodShootsLocalStorage}
          totalShoots={this.props.totalShoots + totalShootsLocalStorage}
          spotShootsData={shootsDatas}
        />
        <ScoreControl
          shootsDatas={shootsDatas}
          shooting={this.state.shooting}
          score={this.props.score}
          maxScore={this.props.maxScore}
          addPoint={this.props.onIncrementScore}
          removePoint={this.props.onDecrementScore}
          scoreDone={this.finishShootingHandler}
          trainingDone={() =>
            this.props.onSendDatas([...JSON.parse(localStorage.getItem("shootData")).data], this.cleanDatas)
          }
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.score,
    maxScore: state.maxScore,
    totalGoodShoots: state.totalGoodShoots,
    totalShoots: state.totalShoots,
    spotShootsData: state.spotShootsData,
    localStorageData: state.localStorageData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementScore: () => dispatch(actions.incrementScore()),
    onDecrementScore: () => dispatch(actions.decrementScore()),
    onResetScore: () => dispatch(actions.resetScore()),
    onInitDatas: () => dispatch(actions.initDatas()),
    onSendDatas: (localStorageData, clean) =>
      dispatch(actions.sendDatas(localStorageData, clean)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShootingScreen);
