import React, {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaskedView from '@react-native-masked-view/masked-view';
import {useSelector} from 'react-redux';

import {selectGlobalStyles} from '../data/stylesSlice';
import AppGradient from './AppGradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alert: {
    position: 'absolute',
    top: 7,
    right: 2,
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});

interface AppIconProps {
  containerSize?: number;
  containerStyle?: ViewStyle;
  iconPack?: string;
  name: string;
  style?: ViewStyle;
  size?: number;
  gradient?: boolean;
  color: string;
  extraContent: ReactNode;
}

export function AppIcon({
  containerSize,
  containerStyle,
  iconPack,
  name,
  style,
  size = 24,
  gradient,
  color,
  extraContent,
}: AppIconProps) {
  const globalStyles = useSelector(selectGlobalStyles);

  return (
    <MaskedView
      style={[{height: containerSize, width: containerSize}, containerStyle]}
      maskElement={
        <View style={styles.container}>
          {iconPack === 'fontAwesome' ? (
            <FontAwesomeIcons
              name={name}
              style={[globalStyles.text, style]}
              size={size}
              color={color}
            />
          ) : (
            <MaterialCommunityIcons
              name={name}
              style={[globalStyles.text, style]}
              size={size}
              color={color}
            />
          )}
          {extraContent}
        </View>
      }>
      {gradient ? (
        <AppGradient small style={styles.container} />
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: color,
          }}
        />
      )}
      {extraContent}
    </MaskedView>
  );
}

interface TouchableOpacityIconWrapperProps {
  style?: ViewStyle;
  onPress: () => void;
  onLongPress: () => void;
  children: ReactNode;
}

function TouchableOpacityIconWrapper({
  style,
  onPress,
  onLongPress,
  children,
}: TouchableOpacityIconWrapperProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={[styles.iconWrapper, style]}>
      {children}
    </TouchableOpacity>
  );
}

interface TabBarIconProps {
  onPress: () => void;
  onLongPress?: () => void;
  name: string;
  iconStyle?: ViewStyle;
  size?: number;
  focused: boolean;
  alert?: boolean;
}

export function TabBarIcon({
  onPress,
  onLongPress,
  name,
  iconStyle,
  size = 34,
  focused,
  alert,
}: TabBarIconProps) {
  const globalStyles = useSelector(selectGlobalStyles);

  return (
    <TouchableOpacityIconWrapper onPress={onPress} onLongPress={onLongPress}>
      <AppIcon
        containerSize={48}
        name={name}
        style={iconStyle}
        size={size}
        gradient={focused}
        color={globalStyles.inactive.backgroundColor as string}
        extraContent={
          alert ? <AppGradient small style={styles.alert} /> : undefined
        }
      />
    </TouchableOpacityIconWrapper>
  );
}
