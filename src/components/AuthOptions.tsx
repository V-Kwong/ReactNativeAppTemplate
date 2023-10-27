import {useCallback, useEffect, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

import {selectGlobalStyles} from '../data/stylesSlice';
import {KEYBOARD_AVOIDING_BEHAVIOUR, SCREEN_WIDTH} from '../utils/styles';
import {
  appleSignIn,
  googleSignIn,
  isValidPassword,
  registerUser,
  signInUser,
} from '../utils/auth';

import AppText from '../components/AppText';
import TextInput from '../components/TextInput';
import {Button, Divider} from 'react-native-paper';

export const AUTH_MODE = {
  REGISTER: 'REGISTER',
  SIGN_IN: 'SIGN_IN',
};

const PASSWORD_INPUT = {
  secureTextEntry: true,
};

type Props = {
  mode: string;
};

export default function AuthOptions({mode}: Props) {
  const globalStyles = useSelector(selectGlobalStyles);

  const [keyboardOpen, setKeyboardOpen] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardOpen(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardOpen(false),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  let title = '';
  let socialLoginPrefix = '';

  if (mode === AUTH_MODE.REGISTER) {
    title = 'Register';
    socialLoginPrefix = 'Continue';
  } else if (mode === AUTH_MODE.SIGN_IN) {
    title = 'Sign In';
    socialLoginPrefix = 'Sign in';
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onCTA = useCallback(() => {
    if (mode === AUTH_MODE.REGISTER) {
      return registerUser(email, password);
    } else if (mode === AUTH_MODE.SIGN_IN) {
      return signInUser(email, password);
    }
  }, [email, password]);

  const onGoogleSignIn = useCallback(() => {
    return googleSignIn();
  }, []);

  const onAppleSignIn = useCallback(() => {
    return appleSignIn();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={KEYBOARD_AVOIDING_BEHAVIOUR}
      style={localStyles.container}>
      <ScrollView
        style={localStyles.container}
        contentContainerStyle={localStyles.scrollContentContainer}>
        <View style={localStyles.logoContainer}>
          <AppText style={globalStyles.component_title}>App Logo Here</AppText>
        </View>

        <View style={localStyles.registerContainer}>
          {!keyboardOpen && (
            <>
              <AppText style={localStyles.title}>{title}</AppText>
              <AppText style={globalStyles.component_text}>
                subtext here if needed{'\n'}
              </AppText>
            </>
          )}
          <View style={localStyles.socialButtonContainers}>
            <Button
              style={localStyles.button}
              mode="contained"
              onPress={onGoogleSignIn}>
              {socialLoginPrefix} with Google
            </Button>
            <Button
              style={localStyles.button}
              mode="contained"
              onPress={onAppleSignIn}>
              {socialLoginPrefix} with Apple
            </Button>
          </View>
          <View style={localStyles.dividerContainer}>
            <Divider style={localStyles.divider} />
            <AppText style={globalStyles.component_title}>or</AppText>
            <Divider style={localStyles.divider} />
          </View>
          <View style={localStyles.textInputContainer}>
            <TextInput
              style={localStyles.textInput}
              placeholder="Email"
              onChangeText={setEmail}
            />
            <TextInput
              style={localStyles.textInput}
              placeholder="Password"
              onChangeText={setPassword}
              otherTextInputProps={PASSWORD_INPUT}
            />
          </View>
          <Button
            style={localStyles.button}
            mode="contained"
            disabled={!isValidPassword(password)}
            onPress={onCTA}>
            {title}
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContentContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logoContainer: {
    paddingTop: 10,
    paddingBottom: 30,
  },
  registerContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  socialButtonContainers: {
    marginVertical: 20,
  },
  dividerContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    flex: 1,
    height: 1,
    marginTop: 3.5,
    marginHorizontal: 10,
  },
  textInputContainer: {
    marginTop: 20,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  textInput: {
    marginBottom: 15,
    width: SCREEN_WIDTH * 0.8,
    textAlign: 'center',
  },
  button: {
    width: '80%',
    alignSelf: 'center',
    marginVertical: 10,
  },
});
