import React, {PureComponent, RefObject} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {TextInput as PaperTextInput, HelperText} from 'react-native-paper';
import {connect} from 'react-redux';

import {RootState} from '../data/reduxStore';
import {Colors, GlobalStyles} from '../utils/styles';

interface TextInputProps {
  globalStyles: GlobalStyles;
  darkMode: boolean;
  style?: ViewStyle;
  disabled: boolean;
  error: boolean;
  value: string;
  multiline: boolean;
  defaultValue?: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  requiredField: boolean;
  characterLimit: number;
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
  keyboardType: string;
  forwardedRef: RefObject<typeof PaperTextInput> | null;
  hasIcons: boolean;
  otherTextInputProps: any;
}

interface TextInputState {
  value: string;
}

class TextInput extends PureComponent<TextInputProps, TextInputState> {
  constructor(props: TextInputProps) {
    super(props);
    this.state = {
      value: props.defaultValue ? props.defaultValue : '',
    };
  }

  onChangeText = (text: string) => {
    this.setState({value: text});
    this.props.onChangeText(text);
  };

  render() {
    const {
      globalStyles,
      darkMode,
      forwardedRef,
      style,
      disabled,
      error,
      value,
      multiline,
      placeholder,
      requiredField,
      characterLimit,
      leftComponent,
      rightComponent,
      otherTextInputProps,
      hasIcons,
      keyboardType,
    } = this.props;

    const errorBool = value
      ? requiredField
        ? value.trim().length == 0 || value.length > characterLimit
        : value.length > characterLimit
      : requiredField
      ? this.state.value.trim().length == 0 ||
        this.state.value.length > characterLimit
      : this.state.value.length > characterLimit;
    const characterLimitColour =
      error || errorBool
        ? globalStyles.error.backgroundColor
        : Colors.primary_orange;

    const rightIcon = rightComponent ? rightComponent : null;

    return (
      <View>
        <PaperTextInput
          ref={forwardedRef}
          style={[
            styles.container,
            globalStyles.text,
            globalStyles.component_title,
            style,
            !multiline && {height: 40},
          ]}
          disabled={disabled}
          multiline={multiline}
          underlineColor={Colors.primary_orange}
          placeholder={placeholder}
          placeholderTextColor={globalStyles.inactive_text.color}
          value={value ? value : this.state.value}
          onChangeText={this.onChangeText}
          error={error || errorBool}
          left={leftComponent}
          right={rightIcon}
          textColor={darkMode ? Colors.dark_mode.text : Colors.light_mode.text}
          keyboardType={keyboardType}
          returnKeyType="done"
          {...otherTextInputProps}
        />
        {characterLimit && (
          <View style={styles.characterLimitContainer}>
            <HelperText
              type="info"
              style={{
                color: characterLimitColour,
                fontWeight: 'bold',
              }}>
              {value ? value.length : this.state.value.length}
              {' / '}
              {characterLimit}{' '}
              {hasIcons ? '' : error || errorBool ? '⚠️' : '✅'}
            </HelperText>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxHeight: 60,
    marginVertical: 5,
    backgroundColor: 'transparent',
  },
  characterLimitContainer: {
    alignItems: 'flex-end',
    marginTop: 5,
  },
});

const mapState = (state: RootState) => ({
  globalStyles: state.styles.globalStyles,
  darkMode: state.styles.darkMode,
});

export default connect(mapState, null)(TextInput);
