import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Svg from "react-native-svg";

import Radial from '../../views/Radial';
import Needle from'../../views/Needle';

/*
 * A component which hold both radial and needle components
 */

  export default  class SupportGuage extends Component {
    static propTypes = {
        guageData: PropTypes.array,
        width: PropTypes.number,
        height: PropTypes.number,
        sections: PropTypes.array,
        meterCovered:PropTypes.number,
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

    renderSections = () => {
        const margin = { left: 50, right: 50, top: 400, bottom: 100 };

        const width = Math.round(this.props.width - (margin.left + margin.right));
        const height = Math.round(this.props.height - (margin.top + margin.bottom));

        const radius = Math.min(this.props.width, this.props.height) / 2;
        const sectionPerc = 1 / this.props.sections.length / 2;

        let totalPercent = 0.75;
        const chartInset = 10;

        return this.props.sections.map((sectionProps, index) => {
            const arcStartRad = this.percentToRad(totalPercent);
            const arcEndRad = arcStartRad + this.percentToRad(sectionPerc);
            totalPercent += sectionPerc;

            const transform = `translate(${this.props.width / 4}, ${height / 2})`;

            return (
                <Radial
                    key={index + '_radial'}
                    transform={transform}
                    {...sectionProps}
                    width={width}
                    height={height}
                    innerRadius={150}
                    outerRadius={radius - chartInset}
                    startAngle={arcStartRad}
                    endAngle={arcEndRad}
                />);
        });
    };

    render() {

        const needleTransform = () => {
            return `translate(${(this.props.width) / 2}, ${(this.props.height) / 2})`;
        };

        return (
                <Svg width={this.props.width} height={this.props.height}  >
                    {
                        this.renderSections()
                    }
                    <Needle percent={this.props.meterCovered} length={ 200 } radius={ 15 } transform={needleTransform()}/>
                </Svg>
        );
    }
}