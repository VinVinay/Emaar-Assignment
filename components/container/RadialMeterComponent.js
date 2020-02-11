


import React, { Component } from 'react';
import { View } from 'react-native';

import SupportGuage from '../presentational/SupportGuage';

/*
 * A Container which hold both radialMeter components
 */
export default class RadialMeterComponent extends Component {
   
    render() {
      const sectionsProps = [
              { fill: '#C0B63B', stroke: '#C0B63B' },
              { fill: '#99D96B', stroke: '#99D96B' },
              { fill: '#367B44', stroke: '#367B44' }
          ];

      const meterCovered = 0.55;
      
        
      return  ( <View style={{backgroundColor: "#181B20"}}>
                      <SupportGuage width={400} height={1000} 
                              sections={sectionsProps} meterCovered={meterCovered}/>
              </View>);
    }
  }