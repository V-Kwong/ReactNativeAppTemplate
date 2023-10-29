import React, {useCallback} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, Dimensions, View} from 'react-native';
import {useSelector} from 'react-redux';

import {
  DEFAULT_SAFE_AREA_BOTTOM_PADDING,
  getFooterGradientBackground,
} from '../utils/styles';
import {selectStyles} from '../data/stylesSlice';

import {TabBarIcon} from './Icons';

var {height, width} = Dimensions.get('window');

interface TabBarNavigatorProps {
  state: any;
  navigation: any;
}

export default function TabBarNavigator({
  state,
  navigation,
}: TabBarNavigatorProps) {
  const {darkMode, globalStyles} = useSelector(selectStyles);
  const insets = useSafeAreaInsets();

  const footerGradientBackground = getFooterGradientBackground(darkMode);

  const renderTabBarIcon = useCallback((route: any, index: number) => {
    const isFocused = state.index === index;
    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    };

    let icon = <></>;

    switch (route.name) {
      // case 'Home':
      // break;
      default:
        icon = <TabBarIcon onPress={onPress} name="home" focused={isFocused} />;
      // break;
    }

    return <View key={route.name}>{icon}</View>;
  }, []);

  const renderTabBarIcons = useCallback(
    () => state.routes.map(renderTabBarIcon),
    [state, renderTabBarIcon],
  );

  return (
    <LinearGradient
      colors={footerGradientBackground}
      style={localStyles.linearGradientContainer}>
      <View
        style={[
          globalStyles.component_1,
          localStyles.tabBar,
          {
            marginBottom: Math.max(
              insets.bottom,
              DEFAULT_SAFE_AREA_BOTTOM_PADDING,
            ),
          },
        ]}>
        {renderTabBarIcons()}
      </View>
    </LinearGradient>
  );
}

const localStyles = StyleSheet.create({
  linearGradientContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    bottom: 0,
  },
  tabBar: {
    height: 60,
    width: width * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 0,
  },
});
