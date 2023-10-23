import React, {PureComponent} from 'react';
import {Text} from 'react-native';
// import {connect} from 'react-redux';

import getGlobalStyles from '../utils/styles';

export default class AppText extends PureComponent {
  render() {
    // const {globalStyles, style, unselectable} = this.props;
    const globalStyles = getGlobalStyles(false);

    const {style, numberOfLines, selectable, children} = this.props;

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

// const mapState = state => ({
//   globalStyles: state.styles.globalStyles,
// });

// export default connect(mapState, null)(AppText);
