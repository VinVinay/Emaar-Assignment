import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as d3 from 'd3';
import {G, Path} from "react-native-svg";

/*
 * A component which has logic to create Radial
 */

  export default  class Radial extends Component {
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        innerRadius: PropTypes.number,
        outerRadius: PropTypes.number,
        startAngle: PropTypes.number,
        endAngle: PropTypes.number,
        transform: PropTypes.string
    };

    render() {
        const arc = d3.arc()
            .innerRadius(this.props.innerRadius)
            .outerRadius(this.props.outerRadius)
            .startAngle(this.props.startAngle)
            .endAngle(this.props.endAngle);

        return (
            <G transform={this.props.transform}>
                <Path d={arc()} {...this.props}/>
            </G>   
        );
    }
}