import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

import {selectGlobalStyles} from '../data/stylesSlice';
import {
  SAFE_AREA_VIEW_EDGE_TOP,
  SCREEN_OPTIONS,
  getTabBarMargin,
} from '../utils/styles';

import HomeScreen from '../screens/authenticated/HomeScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  const globalStyles = useSelector(selectGlobalStyles);

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={globalStyles.container}
      edges={SAFE_AREA_VIEW_EDGE_TOP}>
      <Tab.Navigator
        backBehavior="history"
        screenOptions={SCREEN_OPTIONS}
        // tabBar={getTabBar}
        sceneContainerStyle={{
          paddingBottom: getTabBarMargin(insets),
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Home2" component={HomeScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
