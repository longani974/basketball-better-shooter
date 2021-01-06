import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Court from '../Court/Court';
import ScoreControl from '../ScoreControl/ScoreControl';
import Modal from '../UI/Modal/Modal';
import CountShootHit from '../ScoreControl/CountShootHit/CountShootHit';

import * as actions from '../../store/actions/scoreControl';

const ShootingScreen = (props) => {
    const [shooting, setShooting] = useState(false);
    const [isAreaSelected, setIsAreaSelected] = useState([
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
    ]);
    const [localStorageData, setLocalStorageData] = useState([]);

    const onInitDatas = props.onInitDatas;
    // store in a const beacause if I put props.onInitDatas in useState
    // I got an infinite loop when I define an dependency
    // If the dependency if an empty array it work but EsLint give a warning
    useEffect(() => {
        if (props.token) {
            // If statment so we wait token != null and error doesn't appear in the consol
            // We receive the datas from the backend
            onInitDatas(props.token);
        }
    }, [onInitDatas, props.token]);

    const shootingAreaHandler = (area) => {
        setIsAreaSelected((prevIsAreaSelected) => {
            const arrIsSelected = [...prevIsAreaSelected];
            for (let i = 0; i < arrIsSelected.length; i++) {
                if (arrIsSelected[i]) return; // prevent clicking on another spot
            }
            arrIsSelected[area] = true;
            return arrIsSelected;
        });
        setShooting(true);
    };

    const finishShootingHandler = () => {
        const areaArr = [...isAreaSelected];

        let spotIndex;

        for (let i = 0; i < areaArr.length; i++) {
            if (areaArr[i]) {
                spotIndex = i;
            }
        }

        let data = [...localStorageData];
        if (localStorage.getItem('shootData') && !localStorageData.length) {
            const extractData = JSON.parse(localStorage.getItem('shootData'));
            for (let i = 0; i < extractData.data.length; i++) {
                data.push(extractData.data[i]);
            }
        }
        data.push({
            id: Date.now(),
            spot: spotIndex,
            goodShoots: props.score,
            nbOfShoots: props.maxScore,
        });

        localStorage.setItem(
            'shootData',
            JSON.stringify({
                data,
            })
        );
        props.onSendDatas(
            JSON.parse(localStorage.getItem('shootData')).data,
            cleanDatas,
            props.token
        );
        props.onResetScore();

        setIsAreaSelected((prevIsAreaSelected) => {
            const arrIsSelected = [...prevIsAreaSelected];
            const newArr = arrIsSelected.map((zone) => (zone = false));

            return newArr;
        });

        setShooting(false);

        setLocalStorageData([...data]);
    };

    const cleanDatas = () => {
        setLocalStorageData([]);
    };

    const shootsDatas = [];
    props.spotShootsData.forEach((d) => shootsDatas.push([...d]));
    let totalShootsLocalStorage = 0;
    let totalGoodShootsLocalStorage = 0;

    if (localStorage.getItem('shootData')) {
        const extractData = [
            ...JSON.parse(localStorage.getItem('shootData')).data,
        ];

        for (let i = 0; i < extractData.length; i++) {
            shootsDatas[extractData[i].spot][0] =
                shootsDatas[extractData[i].spot][0] + extractData[i].goodShoots;
            shootsDatas[extractData[i].spot][1] =
                shootsDatas[extractData[i].spot][1] + extractData[i].nbOfShoots;

            totalGoodShootsLocalStorage =
                totalGoodShootsLocalStorage + extractData[i].goodShoots;
            totalShootsLocalStorage =
                totalShootsLocalStorage + extractData[i].nbOfShoots;
        }
    }

    return (
        <>
            <Modal isShooting={shooting}>
                <CountShootHit
                    score={props.score}
                    maxScore={props.maxScore}
                    addPoint={props.onIncrementScore}
                    removePoint={props.onDecrementScore}
                    scoreDone={finishShootingHandler}
                />
            </Modal>
            <Court
                areaChoosed={shootingAreaHandler}
                isSelected={isAreaSelected}
                totalGoodShoots={
                    props.totalGoodShoots + totalGoodShootsLocalStorage
                }
                totalShoots={props.totalShoots + totalShootsLocalStorage}
                spotShootsData={shootsDatas}
            />
            <ScoreControl
                shootsDatas={shootsDatas}
                shooting={shooting}
                score={props.score}
                maxScore={props.maxScore}
                addPoint={props.onIncrementScore}
                removePoint={props.onDecrementScore}
                scoreDone={finishShootingHandler}
                trainingDone={() =>
                    props.onSendDatas(
                        [...JSON.parse(localStorage.getItem('shootData')).data],
                        cleanDatas,
                        props.token
                    )
                }
            />
        </>
    );
};

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
        onInitDatas: (token) => dispatch(actions.initDatas(token)),
        onSendDatas: (localStorageData, clean, token) =>
            dispatch(actions.sendDatas(localStorageData, clean, token)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShootingScreen);
