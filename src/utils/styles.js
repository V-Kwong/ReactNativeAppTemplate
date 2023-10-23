import {Dimensions, Platform, StyleSheet} from 'react-native';

export function hexToRGBA(h, a = 1) {
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (h.length == 4) {
    r = '0x' + h[1] + h[1];
    g = '0x' + h[2] + h[2];
    b = '0x' + h[3] + h[3];

    // 6 digits
  } else if (h.length == 7) {
    r = '0x' + h[1] + h[2];
    g = '0x' + h[3] + h[4];
    b = '0x' + h[5] + h[6];
  }

  return 'rgba(' + +r + ',' + +g + ',' + +b + ',' + +a + ')';
}

export const Colors = {
  primary_yellow: '#FDD600',
  primary_orange: '#FF821B',
  primary_red: '#FE5A48',

  entry_slice_colors: [
    '#FE5A48',
    '#FF821B',
    '#FDD600',
    '#B4E167',
    '#44D3D1',
    '#597CB3',
    '#C48DE2',
    '#624784',
  ],

  light_mode: {
    text: '#000000',

    background: '#FAFAFA',
    component_0: '#EFEFEF',
    component_1: '#E8E8E8',

    header_gradient_top: hexToRGBA('#FAFAFA', 1),
    header_gradient_bottom: hexToRGBA('#FAFAFA', 0.95),

    footer_gradient_top: hexToRGBA('#FAFAFA', 0),
    footer_gradient_bottom: hexToRGBA('#FAFAFA', 1),

    dialog_overlay: 'rgba(0, 0, 0, 0.6)',

    secondary: '#313131',

    inactive: '#BDBDBD',
    inactive_text: '#616161',
    success: '#66BB6A',
    success_text: '#2E7D32',
    error: '#E53935',
    error_text: '#D32F2F',
  },

  dark_mode: {
    text: '#ffffff',

    background: '#212121',
    component_0: '#313131',
    component_1: '#393939',

    header_gradient_top: hexToRGBA('#212121', 1),
    header_gradient_bottom: hexToRGBA('#212121', 0.95),

    footer_gradient_top: hexToRGBA('#212121', 0),
    footer_gradient_bottom: hexToRGBA('#212121', 1),

    dialog_overlay: 'rgba(0, 0, 0, 0.6)',

    secondary: '#BDBDBD',

    inactive: '#818181',
    success: '#56b95b',
    error: '#ff2f2f',
  },
};

export const getFooterGradientBackground = darkMode =>
  darkMode
    ? [
        Colors.dark_mode.footer_gradient_top,
        Colors.dark_mode.footer_gradient_bottom,
      ]
    : [
        Colors.light_mode.footer_gradient_top,
        Colors.light_mode.footer_gradient_bottom,
      ];

export default function getGlobalStyles(darkMode) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkMode
        ? Colors.dark_mode.background
        : Colors.light_mode.background,
    },

    containerBackground: {
      backgroundColor: darkMode
        ? Colors.dark_mode.background
        : Colors.light_mode.background,
    },

    component_0: {
      backgroundColor: darkMode
        ? Colors.dark_mode.component_0
        : Colors.light_mode.component_0,
    },

    component_1: {
      backgroundColor: darkMode
        ? Colors.dark_mode.component_1
        : Colors.light_mode.component_1,
    },

    inactive: {
      backgroundColor: darkMode
        ? Colors.dark_mode.inactive
        : Colors.light_mode.inactive,
    },

    primary_button: {
      backgroundColor: darkMode
        ? Colors.dark_mode.secondary
        : Colors.light_mode.secondary,
    },

    secondary_button: {
      backgroundColor: darkMode ? '#515151' : Colors.light_mode.inactive,
    },

    pieChartInactiveSlice: {
      fill: darkMode
        ? Colors.dark_mode.secondary
        : Colors.light_mode.inactive_text,
    },

    success: {
      backgroundColor: darkMode
        ? Colors.dark_mode.success
        : Colors.light_mode.success,
    },

    error: {
      backgroundColor: darkMode
        ? Colors.dark_mode.error
        : Colors.light_mode.error,
    },

    text: {
      color: darkMode ? Colors.dark_mode.text : Colors.light_mode.text,
      fontFamily: 'Lato-Regular',
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    inactive_text: {
      color: darkMode
        ? Colors.dark_mode.inactive
        : Colors.light_mode.inactive_text,
    },

    screen_title: {
      fontFamily: 'Alata-Regular',
      fontSize: 35,
      lineHeight: 36,
    },
    screen_subtitle: {
      fontFamily: 'Lato-Regular',
      fontSize: 23,
      lineHeight: 28,
    },
    component_title: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      lineHeight: 22,
    },
    component_text: {
      fontFamily: 'Lato-Regular',
      fontSize: 15,
      lineHeight: 19,
    },
    component_text_spaced: {
      fontFamily: 'Lato-Regular',
      fontSize: 15,
      lineHeight: 25,
    },
    caption_text: {
      fontSize: 12,
      lineHeight: 15,
    },
    primary_button_cta_text: {
      color: Colors.light_mode.text,
      fontFamily: 'Lato-Bold',
      fontSize: 16,
      lineHeight: 20,
      textTransform: 'uppercase',
    },
    primary_button_text: {
      color: Colors.light_mode.text,
      fontFamily: 'Lato-Bold',
      fontSize: 14,
      lineHeight: 18,
    },
    secondary_button_text: {
      fontFamily: 'Lato-Regular',
      fontSize: 14,
      lineHeight: 18,
    },
    bold_text: {
      fontWeight: 'bold',
    },
    error_text: {
      color: darkMode ? Colors.dark_mode.error : Colors.light_mode.error_text,
    },
    success_text: {
      color: darkMode
        ? Colors.dark_mode.success
        : Colors.light_mode.success_text,
    },
  });
}

// other component values

const {height, width} = Dimensions.get('window');

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;

export const SAFE_AREA_VIEW_EDGE_TOP = ['top', 'right', 'left'];

export const getTabBarMargin = insets =>
  Math.max(insets.bottom, DEFAULT_SAFE_AREA_BOTTOM_PADDING) +
  BOTTOM_NAVBAR_MARGIN;

// use this when you want any list of elements to to go past the safe area bottom margin
// we could use -getTabBarMargin, but a constant can prevent possible unnecessary re-renders and suffices
export const LIST_UNDER_TAB_BAR_MARGIN = -100;

export const KEYBOARD_AVOIDING_BEHAVIOUR =
  Platform.OS === 'ios' ? 'padding' : '';

export const KEYBOARD_AVOIDING_BEHAVIOUR_POSITION =
  Platform.OS === 'ios' ? 'position' : '';

export const SHORTER_MOBILE_SCREEN_SIZE = 825;

// Collpasible Header Values
/* https://blog.coinbase.com/coinbases-animated-tabbar-in-react-native-4b3fdd4473e */
export const HEADER_SIZING = {
  header: height * 0.25,
  navbar: 75,
};
// we provide this bc ios allows overscrolling but android doesn't
// so on ios because of pull to refresh / rubberbaanding we set scroll pos to negtaive header pos
// on android we set to 0 and makeup header height diff with contentinset padding
export const HEADER_OFFSET = Platform.OS === 'ios' ? -HEADER_SIZING.header : 0;

// Bottom Tab Bar Values
export const DEFAULT_SAFE_AREA_BOTTOM_PADDING = 15;
export const BOTTOM_NAVBAR_MARGIN = 70;
