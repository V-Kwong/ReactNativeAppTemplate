/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar, StyleSheet} from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';

export default function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={localStyles.container}>
      <SafeAreaProvider style={localStyles.container}>
        <AppNavigator />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
