import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

import {selectGlobalStyles} from '../../data/stylesSlice';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SHORTER_MOBILE_SCREEN_SIZE,
} from '../../utils/styles';

import AuthOptions, {AUTH_MODE} from '../../components/AuthOptions';

export default function SignInScreen() {
  const globalStyles = useSelector(selectGlobalStyles);

  return (
    <SafeAreaView style={globalStyles.container}>
      <AuthOptions mode={AUTH_MODE.SIGN_IN} />
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
