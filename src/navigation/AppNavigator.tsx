import React from 'react';
import {StatusBar, View} from 'react-native';
import {DefaultTheme, PaperProvider, configureFonts} from 'react-native-paper';
import {
  DefaultTheme as NavigatorDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import {navigationRef} from './RootNavigation';
import {selectStyles} from '../data/stylesSlice';
import {Colors, SCREEN_OPTIONS} from '../utils/styles';

import RegisterScreen from '../screens/unauthenticated/RegisterScreen';
import SignInScreen from '../screens/unauthenticated/SignInScreen';

const fontConfig: any = {
  default: {
    regular: {
      fontFamily: 'Lato-Regular',
    },
    medium: {
      fontFamily: 'Lato-Bold',
    },
    light: {
      fontFamily: 'Lato-Light',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
    },
  },
};

const navTheme = {
  ...NavigatorDefaultTheme,
  colors: {
    ...NavigatorDefaultTheme.colors,
    background: 'transparent',
  },
};

const ParentStack = createStackNavigator();

export default function AppNavigator() {
  const {darkMode, globalStyles} = useSelector(selectStyles);

  const theme: any = {
    ...DefaultTheme,
    // roundness: 2,
    dark: darkMode,
    fonts: configureFonts(fontConfig),
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.primary_orange,
      accent: Colors.primary_orange,
      text: globalStyles.text.color as string,
      placeholder: globalStyles.inactive_text.color as string,
      error: globalStyles.error_text.color as string,
      background: 'transparent',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <View style={globalStyles.container}>
        <StatusBar
          barStyle={darkMode ? 'light-content' : 'dark-content'}
          backgroundColor={globalStyles.container.backgroundColor}
          translucent
        />
        <NavigationContainer ref={navigationRef} theme={navTheme}>
          <ParentStack.Navigator screenOptions={SCREEN_OPTIONS}>
            <ParentStack.Screen name="Register" component={RegisterScreen} />
            <ParentStack.Screen name="SignIn" component={SignInScreen} />
          </ParentStack.Navigator>
        </NavigationContainer>
      </View>
    </PaperProvider>
  );
}
