import React from 'react';
import {StatusBar, View} from 'react-native';
import {DefaultTheme, PaperProvider} from 'react-native-paper';
import {
  DefaultTheme as NavigatorDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef} from './RootNavigation';

import getGlobalStyles, {Colors} from '../utils/styles';

import RegisterScreen from '../screens/unauth/RegisterScreen';
import SignInScreen from '../screens/unauth/SignInScreen';

const navTheme = {
  ...NavigatorDefaultTheme,
  colors: {
    ...NavigatorDefaultTheme.colors,
    background: 'transparent',
  },
};

const SCREEN_OPTIONS = {headerShown: false};

const ParentStack = createStackNavigator();

export default function AppNavigator() {
  const darkMode = false;
  const globalStyles = getGlobalStyles(false);

  const theme = {
    ...DefaultTheme,
    // roundness: 2,
    dark: darkMode,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.primary_orange,
      accent: Colors.primary_orange,
      text: globalStyles.text.color,
      placeholder: globalStyles.inactive_text.color,
      error: globalStyles.error_text.color,
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
