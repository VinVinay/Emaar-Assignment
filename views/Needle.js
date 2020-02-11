import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Circle, G, Path} from "react-native-svg";

/*
 * A component which has logic to create Needle
 */

  export default class Needle extends Component {
    static propTypes = {
        percent: PropTypes.number,
        length: PropTypes.number,
        radius: PropTypes.number,
        transform: PropTypes.string
    };

    percentToDeg = (perc) => {
        return perc * 360;
    };
    
    percentToRad = (perc) => {
        return this.degToRad(this.percentToDeg(perc));
    };

    degToRad = (deg) => {
        return deg * Math.PI / 180;
    };

    getNeedlePath = () => {
        const thetaRad = this.percentToRad(this.props.percent) / 2;

        const centerX = 0;
        const centerY = 30;

        const topX = centerX - this.props.length * Math.cos(thetaRad);
        const topY = centerY - this.props.length * Math.sin(thetaRad);

        const leftX = centerX - this.props.radius * Math.cos(thetaRad - Math.PI / 2);
        const leftY = centerY - this.props.radius * Math.sin(thetaRad - Math.PI / 2);

        const rightX = centerX - this.props.radius * Math.cos(thetaRad + Math.PI / 2);
        const rightY = centerY - this.props.radius * Math.sin(thetaRad + Math.PI / 2);
        return `M ${leftX} ${leftY} L ${topX} ${topY} L ${rightX} ${rightY}`;
    };

    render() {
        const path = this.getNeedlePath();
         
        return  (<G transform={this.props.transform}  >
                <Path d={path} stroke="#404855" fill="#404855" />
                <Circle  stroke="#8392A9" fill="#8392A9"  cx="4" cy="0"  r={this.props.radius + 5}/>
            </G>);
    }
}