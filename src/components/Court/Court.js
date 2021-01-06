import React from 'react';

import AroundRim from './AroundRim/AroundRim';
import AroundRimBack from './AroundRim/AroundRimBack';
import Mid from './Mid/Mid';
import MidBack from './Mid/MidBack';
import Long from './Long/Long';
import LongBack from './Long/LongBack';
import Three from './Three/Three';
import ThreeBack from './Three/ThreeBack';
import Floor from './Floor/Floor';
import Basket from './Basket/Basket';
import Lines from './Lines/Lines';

import { successColor } from '../../constants/colors';

const court = (props) => {
    let width = 0;
    window.innerWidth < window.innerHeight
        ? (width = 100)
        : (width = 100 * (152 / 220));

    const selectedSpot = (isSelected) => (isSelected ? 0.5 : 0);

    const selectColor = (isSelected, color) => {
        return isSelected ? successColor : color;
    };
    console.log('rendering court');

    return (
        <>
            <div
                style={{
                    width: width + '%',
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="svg1524"
                    version="1.1"
                    viewBox="0 0 98.954165 80.433344"
                    height="100%"
                    width="100%"
                >
                    <defs id="defs1518" />
                    <g id="layer1">
                        <Floor
                            totalGoodShoots={props.totalGoodShoots}
                            totalShoots={props.totalShoots}
                        />
                        <AroundRimBack
                            isSelected={props.isSelected}
                            selectColor={selectColor}
                        />
                        <MidBack
                            isSelected={props.isSelected}
                            selectColor={selectColor}
                        />
                        <LongBack
                            isSelected={props.isSelected}
                            selectColor={selectColor}
                        />
                        <ThreeBack
                            isSelected={props.isSelected}
                            selectColor={selectColor}
                        />
                        <Lines />
                        <Basket />
                        <AroundRim
                            areaChoosed={props.areaChoosed}
                            spotShootsData={props.spotShootsData}
                            activeSpot={selectedSpot}
                        />
                        <Mid
                            areaChoosed={props.areaChoosed}
                            spotShootsData={props.spotShootsData}
                            activeSpot={selectedSpot}
                        />
                        <Long
                            areaChoosed={props.areaChoosed}
                            spotShootsData={props.spotShootsData}
                            activeSpot={selectedSpot}
                        />
                        <Three
                            areaChoosed={props.areaChoosed}
                            spotShootsData={props.spotShootsData}
                            activeSpot={selectedSpot}
                        />
                    </g>
                </svg>
            </div>
        </>
    );
};

export default court;
