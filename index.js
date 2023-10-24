/**
 * @format
 */

import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';

import {name as appName} from './app.json';
import reduxStore from './src/data/reduxStore';

import App from './App';

const Root = () => (
  <ReduxProvider store={reduxStore}>
    <App />
  </ReduxProvider>
);

AppRegistry.registerComponent(appName, () => Root);
