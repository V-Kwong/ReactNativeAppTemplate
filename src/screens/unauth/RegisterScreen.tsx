import {useCallback} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

import {navigate} from '../../navigation/RootNavigation';
import {selectGlobalStyles} from '../../data/stylesSlice';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SHORTER_MOBILE_SCREEN_SIZE,
} from '../../utils/styles';

import AppText from '../../components/AppText';
import AuthOptions, {AUTH_MODE} from '../../components/AuthOptions';

export default function RegisterScreen() {
  const globalStyles = useSelector(selectGlobalStyles);

  const navigateToSignIn = useCallback(() => {
    navigate('SignIn');
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      <TouchableOpacity
        style={localStyles.signInButton}
        onPress={navigateToSignIn}>
        <AppText style={localStyles.signInText}>Sign In</AppText>
      </TouchableOpacity>
      <AuthOptions mode={AUTH_MODE.REGISTER} />
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signInButton: {
    height: 56,
    width: 100,
    padding: 5,
    marginRight: 10,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'flex-end',

    position: 'absolute',
    top:
      SCREEN_HEIGHT <= SHORTER_MOBILE_SCREEN_SIZE
        ? SCREEN_HEIGHT * 0.02
        : SCREEN_HEIGHT * 0.05,
    right: SCREEN_WIDTH * 0.01,
    zIndex: 1,
  },
  signInText: {
    fontSize: 18,
  },
});
