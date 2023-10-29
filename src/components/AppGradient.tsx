import React, {PureComponent, ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {deg} from 'react-native-linear-gradient-degree';
import {connect} from 'react-redux';

import {RootState} from '../data/reduxStore';
import {Colors, hexToRGBA} from '../utils/styles';

interface AppGradientProps {
  darkMode: boolean;
  containerStyle: ViewStyle;
  style: ViewStyle;
  small: boolean;
  disabled: boolean;
  disabledColour: string;
  children: ReactNode;
}

class AppGradient extends PureComponent<AppGradientProps> {
  render() {
    const {darkMode, containerStyle, style, small, disabled, disabledColour} =
      this.props;

    // https://stackoverflow.com/questions/46712528/convert-css-gradient-to-expos-linear-gradient

    // background: linear-gradient(130.86deg, #FE5A48 -36.09%, #FDD600 137.32%, #FDD600 137.32%), #FFE001;
    // linear-gradient(129.79deg, #FE5A48 -152.89%, #FE5A48 -15.31%, rgba(255, 255, 255, 0) 175.81%), #FFE001;

    let colours = small
      ? [Colors.primary_red, Colors.primary_yellow]
      : [
          hexToRGBA(Colors.primary_red, 0.5),
          hexToRGBA(Colors.primary_red, 0.4),
          hexToRGBA(Colors.primary_red, 0.25),
        ];

    if (disabled) {
      if (disabledColour) {
        colours = [disabledColour, disabledColour];
      } else {
        colours = darkMode
          ? [Colors.dark_mode.inactive, Colors.dark_mode.inactive]
          : [Colors.light_mode.inactive, Colors.light_mode.inactive];
      }
    }

    if (small) {
      return (
        <LinearGradient
          style={style}
          colors={colours}
          locations={[-0.3647, 1.3766]}
          {...deg(127.62)}>
          {this.props.children}
        </LinearGradient>
      );
    }

    return (
      <View
        style={[
          {
            backgroundColor: Colors.primary_yellow,
          },
          containerStyle,
        ]}>
        <LinearGradient style={style} colors={colours} {...deg(160.79)}>
          {this.props.children}
        </LinearGradient>
      </View>
    );
  }
}

const mapState = (state: RootState) => ({
  darkMode: state.styles.darkMode,
});

export default connect(mapState, null)(AppGradient);
