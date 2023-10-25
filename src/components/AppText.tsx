import React, {PureComponent} from 'react';
import {TextProps, Text} from 'react-native';
import {connect} from 'react-redux';

import {RootState} from '../data/reduxStore';
import {GlobalStyles} from '../utils/styles';

interface AppTextProps {
  globalStyles: GlobalStyles;
  style?: TextProps['style'];
  numberOfLines?: number;
  selectable?: boolean;
  children: React.ReactNode;
}

class AppText extends PureComponent<AppTextProps> {
  render() {
    const {globalStyles, style, numberOfLines, selectable, children} =
      this.props;

    return (
      <Text
        style={[globalStyles.text, style]}
        numberOfLines={numberOfLines}
        selectable={selectable}>
        {children}
      </Text>
    );
  }
}

const mapState = (state: RootState) => ({
  globalStyles: state.styles.globalStyles,
});

export default connect(mapState, null)(AppText);
