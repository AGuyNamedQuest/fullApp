import React from 'react';

import { createTheme } from '@mui/material/styles';

import SvgIcon from '@mui/material/SvgIcon';

import ErrorOutline from './public/assets/images/_ErrorOutline.svg';
import WarningAmberOutlined from './public/assets/images/_WarningAmberOutlined.svg';
import InfoOutlined from './public/assets/images/_InfoOutlined.svg';
import CheckCircleOutlined from './public/assets/images/_CheckCircleOutlined.svg';
import CheckBoxOutlineBlank from './public/assets/images/_CheckBoxOutlineBlankOutlined.svg';
import IndeterminateCheckBo from './public/assets/images/_IndeterminateCheckBoxFilled.svg';
import CheckBoxFilled from './public/assets/images/_CheckBoxFilled.svg';

const globalTheme: any = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgba(254, 136, 136, 1)',
      light: 'rgba(255, 175, 175, 1)',
      dark: 'rgba(215, 100, 100, 1)',
      contrastText: 'rgba(255, 255, 255, 1)',
    },
    secondary: {
      main: 'rgba(2, 122, 209, 1)',
      light: 'rgba(34, 151, 236, 1)',
      dark: 'rgba(0, 98, 169, 1)',
      contrastText: 'rgba(255, 255, 255, 1)',
    },
    error: {
      main: 'rgba(128, 102, 255, 1)',
      light: 'rgba(178, 162, 255, 1)',
      dark: 'rgba(85, 50, 255, 1)',
      contrastText: 'rgba(255, 255, 255, 1)',
    },
    warning: {
      main: 'rgba(245, 161, 83, 1)',
      light: 'rgba(255, 144, 64, 1)',
      dark: 'rgba(222, 107, 24, 1)',
      contrastText: 'rgba(255, 255, 255, 1)',
    },
    success: {
      main: 'rgba(100, 207, 111, 1)',
      light: 'rgba(54, 209, 70, 1)',
      dark: 'rgba(30, 170, 44, 1)',
      contrastText: 'rgba(255, 255, 255, 1)',
    },
    info: {
      main: 'rgba(3, 195, 255, 1)',
      light: 'rgba(78, 213, 255, 1)',
      dark: 'rgba(0, 156, 205, 1)',
      contrastText: 'rgba(255, 255, 255, 1)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.8)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      focus: 'rgba(0, 0, 0, 0.12)',
    },
    Text: {
      Primary: 'rgba(0, 0, 0, 0.87)',
      Secondary: 'rgba(0, 0, 0, 0.8)',
      Disabled: 'rgba(0, 0, 0, 0.38)',
      'Primary Shades': {
        '4p': 'rgba(0, 0, 0, 0.04)',
        '12p': 'rgba(0, 0, 0, 0.12)',
        '30p': 'rgba(0, 0, 0, 0.3)',
      },
      'Secondary Shades': {
        '4p': 'rgba(0, 0, 0, 0.04)',
        '18p': 'rgba(0, 0, 0, 0.18)',
      },
    },
    Primary: {
      Main: 'rgba(254, 136, 136, 1)',
      Dark: 'rgba(215, 100, 100, 1)',
      Light: 'rgba(255, 175, 175, 1)',
      Contrast: 'rgba(255, 255, 255, 1)',
      Shades: {
        '4p': 'rgba(107, 104, 255, 0.04)',
        '8p': 'rgba(107, 104, 255, 0.08)',
        '12p': 'rgba(107, 104, 255, 0.12)',
        '30p': 'rgba(107, 104, 255, 0.3)',
        '50p': 'rgba(107, 104, 255, 0.5)',
      },
    },
    Secondary: {
      Main: 'rgba(2, 122, 209, 1)',
      Dark: 'rgba(0, 98, 169, 1)',
      Light: 'rgba(34, 151, 236, 1)',
      Contrast: 'rgba(255, 255, 255, 1)',
      Shades: {
        '4p': 'rgba(2, 122, 209, 0.04)',
        '8p': 'rgba(2, 122, 209, 0.08)',
        '12p': 'rgba(2, 122, 209, 0.12)',
        '30p': 'rgba(2, 122, 209, 0.3)',
        '50p': 'rgba(2, 122, 209, 0.5)',
      },
    },
    Action: {
      'Active (54p)': 'rgba(0, 0, 0, 0.54)',
      'Hover (4p)': 'rgba(0, 0, 0, 0.04)',
      'Selected (8p)': 'rgba(0, 0, 0, 0.08)',
      'Disabled (26p)': 'rgba(0, 0, 0, 0.26)',
      'Disabled Background (12p)': 'rgba(0, 0, 0, 0.12)',
      'Focus (12p)': 'rgba(0, 0, 0, 0.12)',
      Shades: {
        '30p': 'rgba(0, 0, 0, 0.3)',
      },
    },
    Error: {
      Main: 'rgba(128, 102, 255, 1)',
      Dark: 'rgba(85, 50, 255, 1)',
      Light: 'rgba(178, 162, 255, 1)',
      Contrast: 'rgba(255, 255, 255, 1)',
      Shades: {
        '4p': 'rgba(128, 102, 255, 0.04)',
        '12p': 'rgba(233, 78, 124, 0.12)',
        '30p': 'rgba(233, 78, 124, 0.3)',
        '50p': 'rgba(233, 78, 124, 0.5)',
        '160p': 'rgba(233, 78, 124, 1)',
        '190p': 'rgba(233, 78, 124, 1)',
      },
    },
    Warning: {
      Main: 'rgba(245, 161, 83, 1)',
      Dark: 'rgba(222, 107, 24, 1)',
      Light: 'rgba(255, 144, 64, 1)',
      Contrast: 'rgba(255, 255, 255, 1)',
      Shades: {
        '4p': 'rgba(245, 161, 83, 0.04)',
        '12p': 'rgba(237, 108, 2, 0.12)',
        '30p': 'rgba(237, 108, 2, 0.3)',
        '50p': 'rgba(237, 108, 2, 0.5)',
        '160p': 'rgba(237, 108, 2, 1)',
        '190p': 'rgba(237, 108, 2, 1)',
      },
    },
    Info: {
      Main: 'rgba(3, 195, 255, 1)',
      Dark: 'rgba(0, 156, 205, 1)',
      Light: 'rgba(78, 213, 255, 1)',
      Contrast: 'rgba(255, 255, 255, 1)',
      Shades: {
        '4p': 'rgba(83, 177, 245, 0.04)',
        '12p': 'rgba(83, 177, 245, 0.12)',
        '30p': 'rgba(83, 177, 245, 0.3)',
        '50p': 'rgba(83, 177, 245, 0.5)',
        '160p': 'rgba(83, 177, 245, 1)',
        '190p': 'rgba(83, 177, 245, 1)',
      },
    },
    Success: {
      Main: 'rgba(100, 207, 111, 1)',
      Dark: 'rgba(30, 170, 44, 1)',
      Light: 'rgba(54, 209, 70, 1)',
      Contrast: 'rgba(255, 255, 255, 1)',
      Shades: {
        '4p': 'rgba(100, 207, 111, 0.04)',
        '12p': 'rgba(100, 207, 111, 0.12)',
        '30p': 'rgba(100, 207, 111, 0.3)',
        '50p': 'rgba(100, 207, 111, 0.5)',
        '160p': 'rgba(100, 207, 111, 1)',
        '190p': 'rgba(100, 207, 111, 1)',
      },
    },
    Background: {
      Paper: 'rgba(255, 255, 255, 1)',
      Default: 'rgba(250, 250, 250, 1)',
    },
    Other: {
      Divider: 'rgba(0, 0, 0, 0.12)',
      'Outlined Border (23p)': 'rgba(0, 0, 0, 0.23)',
      'Backdrop Overlay': 'rgba(0, 0, 0, 0.5)',
      'Filled Input Background': 'rgba(0, 0, 0, 0.06)',
      'Standard Input Line': 'rgba(0, 0, 0, 0.88)',
      Snackbar: 'rgba(50, 50, 50, 1)',
      'Rating Active': 'rgba(255, 180, 0, 1)',
    },
    Common: {
      Black: {
        '100p': 'rgba(0, 0, 0, 1)',
      },
      White: {
        '30p': 'rgba(255, 255, 255, 0.3)',
        '100p': 'rgba(255, 255, 255, 1)',
      },
    },
    Grey: {
      '50': 'rgba(250, 250, 250, 1)',
      '100': 'rgba(245, 245, 245, 1)',
      '200': 'rgba(238, 238, 238, 1)',
      '300': 'rgba(224, 224, 224, 1)',
      '400': 'rgba(189, 189, 189, 1)',
      '500': 'rgba(158, 158, 158, 1)',
      '600': 'rgba(117, 117, 117, 1)',
      '700': 'rgba(97, 97, 97, 1)',
      '800': 'rgba(66, 66, 66, 1)',
      '900': 'rgba(33, 33, 33, 1)',
      A100: 'rgba(213, 213, 213, 1)',
      A200: 'rgba(170, 170, 170, 1)',
      A400: 'rgba(97, 97, 97, 1)',
      A700: 'rgba(48, 48, 48, 1)',
    },
    Indigo: {
      '50': 'rgba(232, 234, 246, 1)',
      '100': 'rgba(197, 202, 233, 1)',
      '200': 'rgba(159, 168, 218, 1)',
      '300': 'rgba(121, 134, 203, 1)',
      '400': 'rgba(92, 107, 192, 1)',
      '500': 'rgba(63, 81, 181, 1)',
      '600': 'rgba(57, 73, 171, 1)',
      '700': 'rgba(48, 63, 159, 1)',
      '800': 'rgba(40, 53, 147, 1)',
      '900': 'rgba(26, 35, 126, 1)',
      A100: 'rgba(140, 158, 255, 1)',
      A200: 'rgba(83, 109, 254, 1)',
      A400: 'rgba(61, 90, 254, 1)',
      A700: 'rgba(48, 79, 254, 1)',
    },
    'Deep Purple': {
      '50': 'rgba(237, 231, 246, 1)',
      '100': 'rgba(209, 196, 233, 1)',
      '200': 'rgba(179, 157, 219, 1)',
      '300': 'rgba(149, 117, 205, 1)',
      '400': 'rgba(126, 87, 194, 1)',
      '500': 'rgba(103, 58, 183, 1)',
      '600': 'rgba(94, 53, 177, 1)',
      '700': 'rgba(81, 45, 168, 1)',
      '800': 'rgba(69, 39, 160, 1)',
      '900': 'rgba(49, 27, 146, 1)',
      A100: 'rgba(179, 136, 255, 1)',
      A200: 'rgba(124, 77, 255, 1)',
      A400: 'rgba(101, 31, 255, 1)',
      A700: 'rgba(98, 0, 234, 1)',
    },
    Amber: {
      '50': 'rgba(255, 248, 225, 1)',
      '300': 'rgba(255, 213, 79, 1)',
      '400': 'rgba(255, 202, 40, 1)',
      '500': 'rgba(255, 193, 7, 1)',
      '600': 'rgba(255, 179, 0, 1)',
      '700': 'rgba(255, 160, 0, 1)',
      '800': 'rgba(255, 143, 0, 1)',
      '900': 'rgba(255, 111, 0, 1)',
      A100: 'rgba(255, 229, 127, 1)',
      A200: 'rgba(255, 215, 64, 1)',
      A400: 'rgba(255, 196, 0, 1)',
      A700: 'rgba(255, 171, 0, 1)',
    },
    Orange: {
      '50': 'rgba(255, 243, 224, 1)',
      '100': 'rgba(255, 224, 178, 1)',
      '200': 'rgba(255, 204, 128, 1)',
      '300': 'rgba(255, 183, 77, 1)',
      '400': 'rgba(255, 167, 38, 1)',
      '500': 'rgba(255, 152, 0, 1)',
      '600': 'rgba(251, 140, 0, 1)',
      '700': 'rgba(245, 124, 0, 1)',
      '800': 'rgba(239, 108, 0, 1)',
      '900': 'rgba(230, 81, 0, 1)',
      A100: 'rgba(255, 209, 128, 1)',
      A200: 'rgba(255, 171, 64, 1)',
      A400: 'rgba(255, 145, 0, 1)',
      A700: 'rgba(255, 109, 0, 1)',
    },
    Pink: {
      '50': 'rgba(252, 228, 236, 1)',
      '100': 'rgba(248, 187, 208, 1)',
      '200': 'rgba(244, 143, 177, 1)',
      '300': 'rgba(240, 98, 146, 1)',
      '400': 'rgba(236, 64, 122, 1)',
      '500': 'rgba(233, 30, 99, 1)',
      '600': 'rgba(216, 27, 96, 1)',
      '700': 'rgba(194, 24, 91, 1)',
      '800': 'rgba(173, 20, 87, 1)',
      '900': 'rgba(136, 14, 79, 1)',
      A100: 'rgba(245, 0, 87, 1)',
      A200: 'rgba(255, 64, 129, 1)',
      A400: 'rgba(245, 0, 87, 1)',
      A700: 'rgba(197, 17, 98, 1)',
    },
    'Deep Orange': {
      '50': 'rgba(251, 233, 231, 1)',
      '100': 'rgba(255, 204, 188, 1)',
      '200': 'rgba(255, 171, 145, 1)',
      '300': 'rgba(255, 138, 101, 1)',
      '400': 'rgba(255, 112, 67, 1)',
      '500': 'rgba(255, 87, 34, 1)',
      '600': 'rgba(244, 81, 30, 1)',
      '700': 'rgba(230, 74, 25, 1)',
      '800': 'rgba(216, 67, 21, 1)',
      '900': 'rgba(191, 54, 12, 1)',
      A100: 'rgba(255, 158, 128, 1)',
      A200: 'rgba(255, 110, 64, 1)',
      A400: 'rgba(255, 61, 0, 1)',
      A700: 'rgba(221, 44, 0, 1)',
    },
    Green: {
      '50': 'rgba(232, 245, 233, 1)',
      '100': 'rgba(200, 230, 201, 1)',
      '200': 'rgba(165, 214, 167, 1)',
      '300': 'rgba(129, 199, 132, 1)',
      '400': 'rgba(102, 187, 106, 1)',
      '500': 'rgba(76, 175, 80, 1)',
      '600': 'rgba(67, 160, 71, 1)',
      '700': 'rgba(56, 142, 60, 1)',
      '800': 'rgba(46, 125, 50, 1)',
      '900': 'rgba(27, 94, 32, 1)',
      A100: 'rgba(185, 246, 202, 1)',
      A200: 'rgba(105, 240, 174, 1)',
      A400: 'rgba(0, 230, 118, 1)',
      A700: 'rgba(0, 200, 83, 1)',
    },
    Red: {
      '50': 'rgba(254, 235, 238, 1)',
      '100': 'rgba(254, 205, 210, 1)',
      '200': 'rgba(239, 154, 154, 1)',
      '300': 'rgba(190, 19, 77, 1)',
      '400': 'rgba(239, 83, 80, 1)',
      '500': 'rgba(244, 67, 54, 1)',
      '600': 'rgba(229, 57, 53, 1)',
      '700': 'rgba(178, 56, 66, 1)',
      '800': 'rgba(198, 40, 40, 1)',
      '900': 'rgba(183, 28, 28, 1)',
      A100: 'rgba(255, 138, 128, 1)',
      A200: 'rgba(255, 82, 82, 1)',
      A400: 'rgba(255, 23, 68, 1)',
      A700: 'rgba(213, 0, 0, 1)',
    },
    'Light Green': {
      '50': 'rgba(241, 248, 233, 1)',
      '100': 'rgba(220, 237, 200, 1)',
      '200': 'rgba(197, 225, 165, 1)',
      '300': 'rgba(174, 213, 129, 1)',
      '400': 'rgba(139, 195, 74, 1)',
      '500': 'rgba(139, 195, 74, 1)',
      '600': 'rgba(124, 179, 66, 1)',
      '700': 'rgba(104, 159, 56, 1)',
      '800': 'rgba(85, 139, 47, 1)',
      '900': 'rgba(51, 105, 30, 1)',
      A100: 'rgba(204, 255, 144, 1)',
      A200: 'rgba(178, 255, 89, 1)',
      A400: 'rgba(118, 255, 3, 1)',
      A700: 'rgba(100, 221, 23, 1)',
    },
    Purple: {
      '50': 'rgba(243, 229, 245, 1)',
      '100': 'rgba(225, 190, 231, 1)',
      '200': 'rgba(206, 147, 216, 1)',
      '300': 'rgba(186, 104, 200, 1)',
      '400': 'rgba(171, 71, 188, 1)',
      '500': 'rgba(156, 39, 176, 1)',
      '600': 'rgba(142, 36, 170, 1)',
      '700': 'rgba(123, 31, 162, 1)',
      '800': 'rgba(106, 27, 154, 1)',
      '900': 'rgba(74, 20, 140, 1)',
      A100: 'rgba(234, 128, 252, 1)',
      A200: 'rgba(224, 64, 251, 1)',
      A400: 'rgba(213, 0, 249, 1)',
      A700: 'rgba(170, 0, 255, 1)',
    },
    Lime: {
      '50': 'rgba(249, 251, 231, 1)',
      '100': 'rgba(240, 244, 195, 1)',
      '200': 'rgba(230, 238, 156, 1)',
      '300': 'rgba(220, 231, 117, 1)',
      '400': 'rgba(212, 225, 87, 1)',
      '500': 'rgba(205, 220, 57, 1)',
      '600': 'rgba(192, 202, 51, 1)',
      '700': 'rgba(175, 180, 43, 1)',
      '800': 'rgba(158, 157, 36, 1)',
      '900': 'rgba(130, 119, 23, 1)',
      A100: 'rgba(244, 255, 129, 1)',
      A200: 'rgba(238, 255, 65, 1)',
      A400: 'rgba(198, 255, 0, 1)',
      A700: 'rgba(174, 234, 0, 1)',
    },
    'Light Blue': {
      '50': 'rgba(225, 245, 254, 1)',
      '100': 'rgba(179, 229, 252, 1)',
      '200': 'rgba(129, 212, 250, 1)',
      '300': 'rgba(79, 195, 247, 1)',
      '400': 'rgba(41, 182, 246, 1)',
      '500': 'rgba(3, 169, 244, 1)',
      '600': 'rgba(3, 155, 229, 1)',
      '700': 'rgba(2, 136, 209, 1)',
      '800': 'rgba(2, 119, 189, 1)',
      '900': 'rgba(1, 87, 155, 1)',
      A100: 'rgba(128, 216, 255, 1)',
      A200: 'rgba(64, 196, 255, 1)',
      A400: 'rgba(0, 176, 255, 1)',
      A700: 'rgba(0, 145, 234, 1)',
    },
    Yellow: {
      '50': 'rgba(255, 253, 231, 1)',
      '100': 'rgba(255, 249, 196, 1)',
      '200': 'rgba(255, 245, 157, 1)',
      '300': 'rgba(255, 241, 118, 1)',
      '400': 'rgba(255, 238, 88, 1)',
      '500': 'rgba(255, 235, 59, 1)',
      '600': 'rgba(253, 216, 53, 1)',
      '700': 'rgba(251, 192, 45, 1)',
      '800': 'rgba(249, 168, 37, 1)',
      '900': 'rgba(245, 127, 23, 1)',
      A100: 'rgba(255, 255, 141, 1)',
      A200: 'rgba(255, 255, 0, 1)',
      A400: 'rgba(255, 234, 0, 1)',
      A700: 'rgba(255, 214, 0, 1)',
    },
    Cyan: {
      '50': 'rgba(224, 247, 250, 1)',
      '100': 'rgba(178, 235, 242, 1)',
      '200': 'rgba(128, 222, 234, 1)',
      '300': 'rgba(77, 208, 225, 1)',
      '400': 'rgba(38, 198, 218, 1)',
      '500': 'rgba(0, 188, 212, 1)',
      '600': 'rgba(0, 172, 193, 1)',
      '700': 'rgba(0, 151, 167, 1)',
      '800': 'rgba(0, 131, 143, 1)',
      '900': 'rgba(0, 96, 100, 1)',
      A100: 'rgba(132, 255, 255, 1)',
      A200: 'rgba(24, 255, 255, 1)',
      A400: 'rgba(0, 229, 255, 1)',
      A700: 'rgba(0, 184, 212, 1)',
    },
    Teal: {
      '50': 'rgba(224, 242, 241, 1)',
      '100': 'rgba(178, 223, 219, 1)',
      '200': 'rgba(128, 203, 196, 1)',
      '300': 'rgba(77, 182, 172, 1)',
      '400': 'rgba(38, 166, 154, 1)',
      '500': 'rgba(0, 150, 136, 1)',
      '600': 'rgba(0, 137, 123, 1)',
      '700': 'rgba(0, 121, 107, 1)',
      '800': 'rgba(0, 105, 92, 1)',
      '900': 'rgba(0, 77, 64, 1)',
      A100: 'rgba(167, 255, 235, 1)',
      A200: 'rgba(100, 255, 218, 1)',
      A400: 'rgba(29, 233, 182, 1)',
      A700: 'rgba(0, 191, 165, 1)',
    },
    Blue: {
      '50': 'rgba(227, 242, 253, 1)',
      '100': 'rgba(187, 222, 251, 1)',
      '200': 'rgba(144, 202, 249, 1)',
      '300': 'rgba(25, 118, 210, 1)',
      '400': 'rgba(66, 165, 245, 1)',
      '500': 'rgba(0, 125, 255, 1)',
      '600': 'rgba(30, 136, 229, 1)',
      '700': 'rgba(0, 87, 178, 1)',
      '800': 'rgba(21, 101, 192, 1)',
      '900': 'rgba(13, 71, 161, 1)',
      A100: 'rgba(130, 177, 255, 1)',
      A200: 'rgba(68, 138, 255, 1)',
      A400: 'rgba(41, 121, 255, 1)',
      A700: 'rgba(41, 98, 255, 1)',
    },
    'Blue Gray': {
      '50': 'rgba(236, 239, 241, 1)',
      '100': 'rgba(207, 216, 220, 1)',
      '200': 'rgba(176, 190, 197, 1)',
      '300': 'rgba(144, 164, 174, 1)',
      '400': 'rgba(120, 144, 156, 1)',
      '500': 'rgba(96, 125, 139, 1)',
      '600': 'rgba(84, 110, 122, 1)',
      '700': 'rgba(69, 90, 100, 1)',
      '800': 'rgba(55, 71, 79, 1)',
      '900': 'rgba(38, 50, 56, 1)',
    },
  },
  typography: {
    Typography: {
      H1: {
        fontStyle: 'normal',
        fontFamily: 'Articulat CF',
        fontWeight: 700,
        fontSize: '86px',
        letterSpacing: '-2.58px',
        textDecoration: 'none',
        lineHeight: '120.00000476837158%',
        textTransform: 'none',
      },
      H2: {
        fontStyle: 'normal',
        fontFamily: 'Articulat CF',
        fontWeight: 400,
        fontSize: '60px',
        letterSpacing: '-3px',
        textDecoration: 'none',
        lineHeight: '58px',
        textTransform: 'none',
      },
      H3: {
        fontStyle: 'normal',
        fontFamily: 'Articulat CF',
        fontWeight: 700,
        fontSize: '48px',
        letterSpacing: '-0.48px',
        textDecoration: 'none',
        textTransform: 'none',
      },
      H4: {
        fontStyle: 'normal',
        fontFamily: 'Visby CF',
        fontWeight: 800,
        fontSize: '34px',
        letterSpacing: '0.34px',
        textDecoration: 'none',
        textTransform: 'none',
      },
      H5: {
        fontStyle: 'normal',
        fontFamily: 'Visby CF',
        fontWeight: 400,
        fontSize: '24px',
        letterSpacing: '0px',
        textDecoration: 'none',
        textTransform: 'none',
      },
      H6: {
        fontStyle: 'normal',
        fontFamily: 'Visby CF',
        fontWeight: 400,
        fontSize: '18px',
        letterSpacing: '5.4px',
        textDecoration: 'none',
        textTransform: 'none',
      },
      'Body 1': {
        fontStyle: 'normal',
        fontFamily: 'Articulat CF',
        fontWeight: 400,
        fontSize: '20px',
        letterSpacing: '0px',
        textDecoration: 'none',
        textTransform: 'none',
      },
      'Body 2': {
        fontStyle: 'normal',
        fontFamily: 'Heebo',
        fontWeight: 400,
        fontSize: '16px',
        letterSpacing: '0px',
        textDecoration: 'none',
        textTransform: 'none',
      },
      'Body 3': {
        fontStyle: 'normal',
        fontFamily: 'Visby CF',
        fontWeight: 600,
        fontSize: '14px',
        letterSpacing: '0px',
        textDecoration: 'none',
        textTransform: 'none',
      },
      'Subtitle 1': {
        fontStyle: 'normal',
        fontFamily: 'Heebo',
        fontWeight: 400,
        fontSize: '16px',
        letterSpacing: '0.024000000953674317px',
        textDecoration: 'none',
        lineHeight: '175%',
        textTransform: 'none',
      },
      'Subtitle 2': {
        fontStyle: 'normal',
        fontFamily: 'Heebo',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '0.014000000208616257px',
        textDecoration: 'none',
        lineHeight: '157.00000524520874%',
        textTransform: 'none',
      },
      Overline: {
        fontStyle: 'normal',
        fontFamily: 'Heebo',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0.12px',
        textDecoration: 'none',
        lineHeight: '266.00000858306885%',
        textTransform: 'uppercase',
      },
      Caption: {
        fontStyle: 'normal',
        fontFamily: 'Heebo',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0.04800000071525574px',
        textDecoration: 'none',
        lineHeight: '165.9999966621399%',
        textTransform: 'none',
      },
    },
    Components: {
      'Alert Title': {
        fontStyle: 'normal',
        fontFamily: 'Heebo',
        fontWeight: 500,
        fontSize: '16px',
        letterSpacing: '0.024000000953674317px',
        textDecoration: 'none',
        lineHeight: '150%',
        textTransform: 'none',
      },
      'Avatar Initials': {
        fontStyle: 'normal',
        fontFamily: 'Heebo',
        fontWeight: 400,
        fontSize: '20px',
        letterSpacing: '0.02800000011920929px',
        textDecoration: 'none',
        lineHeight: '20px',
        textTransform: 'none',
      },
      'Badge Label': {
        fontStyle: 'normal',
        fontFamily: 'Articulat CF',
        fontWeight: 500,
        fontSize: '12px',
        letterSpacing: '0.016800000071525573px',
        textDecoration: 'none',
        lineHeight: '20px',
        textTransform: 'none',
      },
      'Button Large': {
        fontStyle: 'normal',
        fontFamily: 'Articulat CF',
        fontWeight: 700,
        fontSize: '20px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '20px',
        textTransform: 'none',
      },
      'Button Medium': {
        fontStyle: 'normal',
        fontFamily: 'Articulat CF',
        fontWeight: 700,
        fontSize: '16px',
        letterSpacing: '0.06400000095367432px',
        textDecoration: 'none',
        lineHeight: '20px',
        textTransform: 'none',
      },
      'Button Small': {
        fontStyle: 'normal',
        fontFamily: 'Articulat CF',
        fontWeight: 500,
        fontSize: '15px',
        letterSpacing: '0.06900000125169754px',
        textDecoration: 'none',
        lineHeight: '22px',
        textTransform: 'none',
      },
      'Input Label': {
        fontStyle: 'normal',
        fontFamily: 'Articulat CF',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0.06px',
        textDecoration: 'none',
        lineHeight: '12px',
        textTransform: 'none',
      },
      'Helper Text': {
        fontStyle: 'normal',
        fontFamily: 'Articulat CF',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0.04800000071525574px',
        textDecoration: 'none',
        lineHeight: '20px',
        textTransform: 'none',
      },
      'Input Text': {
        fontStyle: 'normal',
        fontFamily: 'Articulat CF',
        fontWeight: 400,
        fontSize: '16px',
        letterSpacing: '0.024000000953674317px',
        textDecoration: 'none',
        lineHeight: '24px',
        textTransform: 'none',
      },
      Chip: {
        fontStyle: 'normal',
        fontFamily: 'Heebo',
        fontWeight: 400,
        fontSize: '13px',
        letterSpacing: '0.020799999535083772px',
        textDecoration: 'none',
        lineHeight: '18px',
        textTransform: 'none',
      },
      Tooltip: {
        fontStyle: 'normal',
        fontFamily: 'Heebo',
        fontWeight: 500,
        fontSize: '12px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '14px',
        textTransform: 'none',
      },
      'Table Header': {
        fontStyle: 'normal',
        fontFamily: 'Heebo',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '0.023800000250339508px',
        textDecoration: 'none',
        lineHeight: '24px',
        textTransform: 'none',
      },
      'Menu Item': {
        fontStyle: 'normal',
        fontFamily: 'Heebo',
        fontWeight: 400,
        fontSize: '16px',
        letterSpacing: '0.024000000953674317px',
        textDecoration: 'none',
        lineHeight: '150%',
        textTransform: 'none',
      },
      'Menu Item Dense': {
        fontStyle: 'normal',
        fontFamily: 'Heebo',
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '0.023800000250339508px',
        textDecoration: 'none',
        lineHeight: '24px',
        textTransform: 'none',
      },
      'List Subheader': {
        fontStyle: 'normal',
        fontFamily: 'Heebo',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '0.014000000208616257px',
        textDecoration: 'none',
        lineHeight: '48px',
        textTransform: 'none',
      },
      'Bottom Navigation Active Label': {
        fontStyle: 'normal',
        fontFamily: 'Heebo',
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '0.056000000834465026px',
        textDecoration: 'none',
        lineHeight: '165.9999966621399%',
        textTransform: 'none',
      },
    },
  },
  customShadows: {
    Elevation: {
      '1': {
        boxShadow:
          '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      '2': {
        boxShadow:
          '0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.2)',
      },
      '3': {
        boxShadow:
          '0px 1px 8px rgba(0, 0, 0, 0.12), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.2)',
      },
      '4': {
        boxShadow:
          '0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px rgba(0, 0, 0, 0.2)',
      },
      '5': {
        boxShadow:
          '0px 1px 14px rgba(0, 0, 0, 0.12), 0px 5px 8px rgba(0, 0, 0, 0.14), 0px 3px 5px rgba(0, 0, 0, 0.2)',
      },
      '6': {
        boxShadow:
          '0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 3px 5px rgba(0, 0, 0, 0.2)',
      },
      '7': {
        boxShadow:
          '0px 2px 16px rgba(0, 0, 0, 0.12), 0px 7px 10px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.2)',
      },
      '8': {
        boxShadow:
          '0px 3px 14px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 5px 5px rgba(0, 0, 0, 0.2)',
      },
      '9': {
        boxShadow:
          '0px 3px 16px rgba(0, 0, 0, 0.12), 0px 9px 12px rgba(0, 0, 0, 0.14), 0px 5px 6px rgba(0, 0, 0, 0.2)',
      },
      '10': {
        boxShadow:
          '0px 4px 18px rgba(0, 0, 0, 0.12), 0px 10px 14px rgba(0, 0, 0, 0.14), 0px 6px 6px rgba(0, 0, 0, 0.2)',
      },
      '11': {
        boxShadow:
          '0px 4px 20px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.14), 0px 6px 7px rgba(0, 0, 0, 0.2)',
      },
      '12': {
        boxShadow:
          '0px 5px 22px rgba(0, 0, 0, 0.12), 0px 12px 17px rgba(0, 0, 0, 0.14), 0px 7px 8px rgba(0, 0, 0, 0.2)',
      },
      '13': {
        boxShadow:
          '0px 5px 24px rgba(0, 0, 0, 0.12), 0px 13px 19px rgba(0, 0, 0, 0.14), 0px 7px 8px rgba(0, 0, 0, 0.2)',
      },
      '14': {
        boxShadow:
          '0px 5px 26px rgba(0, 0, 0, 0.12), 0px 14px 21px rgba(0, 0, 0, 0.14), 0px 7px 9px rgba(0, 0, 0, 0.2)',
      },
      '15': {
        boxShadow:
          '0px 6px 28px rgba(0, 0, 0, 0.12), 0px 15px 22px rgba(0, 0, 0, 0.14), 0px 8px 9px rgba(0, 0, 0, 0.2)',
      },
      '16': {
        boxShadow:
          '0px 6px 30px rgba(0, 0, 0, 0.12), 0px 16px 24px rgba(0, 0, 0, 0.14), 0px 8px 10px rgba(0, 0, 0, 0.2)',
      },
      '17': {
        boxShadow:
          '0px 6px 32px rgba(0, 0, 0, 0.12), 0px 17px 26px rgba(0, 0, 0, 0.14), 0px 8px 11px rgba(0, 0, 0, 0.2)',
      },
      '18': {
        boxShadow:
          '0px 7px 34px rgba(0, 0, 0, 0.12), 0px 18px 28px rgba(0, 0, 0, 0.14), 0px 9px 11px rgba(0, 0, 0, 0.2)',
      },
      '19': {
        boxShadow:
          '0px 7px 36px rgba(0, 0, 0, 0.12), 0px 19px 29px rgba(0, 0, 0, 0.14), 0px 9px 12px rgba(0, 0, 0, 0.2)',
      },
      '20': {
        boxShadow:
          '0px 8px 38px rgba(0, 0, 0, 0.12), 0px 20px 31px rgba(0, 0, 0, 0.14), 0px 10px 13px rgba(0, 0, 0, 0.2)',
      },
      '21': {
        boxShadow:
          '0px 8px 40px rgba(0, 0, 0, 0.12), 0px 21px 33px rgba(0, 0, 0, 0.14), 0px 10px 13px rgba(0, 0, 0, 0.2)',
      },
      '22': {
        boxShadow:
          '0px 8px 42px rgba(0, 0, 0, 0.12), 0px 22px 35px rgba(0, 0, 0, 0.14), 0px 10px 14px rgba(0, 0, 0, 0.2)',
      },
      '23': {
        boxShadow:
          '0px 9px 44px rgba(0, 0, 0, 0.12), 0px 23px 36px rgba(0, 0, 0, 0.14), 0px 11px 14px rgba(0, 0, 0, 0.2)',
      },
      '24': {
        boxShadow:
          '0px 9px 46px rgba(0, 0, 0, 0.12), 0px 24px 38px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2)',
      },
      'Outlined Light': {
        boxShadow: '0px 0px 0px rgba(224, 224, 224, 1)',
      },
      'Outlined Dark': {
        boxShadow: '0px 0px 0px rgba(255, 255, 255, 0.12)',
      },
    },
    Colors: {
      'Shadow Primary': {
        boxShadow: '0px 3px 5px rgba(107, 104, 255, 0.5)',
      },
      'Shadow Secondary': {
        boxShadow: '0px 3px 5px rgba(2, 122, 209, 0.5)',
      },
      'Shadow Warning': {
        boxShadow: '0px 3px 5px rgba(208, 132, 43, 0.5)',
      },
      'Shadow Error': {
        boxShadow: '0px 3px 5px rgba(246, 59, 115, 0.5)',
      },
      'Shadow Info': {
        boxShadow: '0px 3px 5px rgba(60, 111, 242, 0.6)',
      },
      'Shadow Success': {
        boxShadow: '0px 3px 5px rgba(18, 157, 32, 0.6)',
      },
    },
  },
} as any);

const questTheme = createTheme(
  {
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiAlert: {
        defaultProps: {
          iconMapping: {
            error: <SvgIcon component={ErrorOutline} />,
            warning: <SvgIcon component={WarningAmberOutlined} />,
            info: <SvgIcon component={InfoOutlined} />,
            success: <SvgIcon component={CheckCircleOutlined} />,
          },
        },
        styleOverrides: {
          filledError: {
            backgroundColor: globalTheme.palette['Error']['Main'],
            borderRadius: `4px`,
          },
          filledWarning: {
            backgroundColor: globalTheme.palette['Warning']['Main'],
            borderRadius: `4px`,
          },
          filledInfo: {
            backgroundColor: globalTheme.palette['Info']['Main'],
            borderRadius: `4px`,
          },
          filledSuccess: {
            backgroundColor: globalTheme.palette['Success']['Main'],
            borderRadius: `4px`,
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          circular: {},
          rounded: {
            borderRadius: `4px`,
          },
          square: {},
          colorDefault: {
            color: globalTheme.palette['Background']['Paper'],
            fontStyle:
              globalTheme.typography['Components']['Avatar Initials'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Avatar Initials']
                .fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Avatar Initials']
                .fontWeight,
            fontSize:
              globalTheme.typography['Components']['Avatar Initials'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Avatar Initials']
                .letterSpacing,
            textDecoration:
              globalTheme.typography['Components']['Avatar Initials']
                .textDecoration,
            lineHeight:
              globalTheme.typography['Components']['Avatar Initials']
                .lineHeight,
            textTransform:
              globalTheme.typography['Components']['Avatar Initials']
                .textTransform,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          containedSizeLarge: {
            fontStyle:
              globalTheme.typography['Components']['Button Large'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Button Large'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Button Large'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Button Large'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Button Large']
                .letterSpacing,
            textDecoration:
              globalTheme.typography['Components']['Button Large']
                .textDecoration,
            lineHeight:
              globalTheme.typography['Components']['Button Large'].lineHeight,
            textTransform:
              globalTheme.typography['Components']['Button Large']
                .textTransform,
            padding: `8px 22px`,
            borderRadius: `4px`,
            height: `36px`,
          },
          containedSizeMedium: {
            fontStyle:
              globalTheme.typography['Components']['Button Medium'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Button Medium'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Button Medium'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Button Medium'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Button Medium']
                .letterSpacing,
            textDecoration:
              globalTheme.typography['Components']['Button Medium']
                .textDecoration,
            lineHeight:
              globalTheme.typography['Components']['Button Medium'].lineHeight,
            textTransform:
              globalTheme.typography['Components']['Button Medium']
                .textTransform,
            padding: `6px 16px`,
            borderRadius: `4px`,
            height: `32px`,
          },
          containedSizeSmall: {
            fontStyle:
              globalTheme.typography['Components']['Button Small'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Button Small'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Button Small'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Button Small'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Button Small']
                .letterSpacing,
            textDecoration:
              globalTheme.typography['Components']['Button Small']
                .textDecoration,
            lineHeight:
              globalTheme.typography['Components']['Button Small'].lineHeight,
            textTransform:
              globalTheme.typography['Components']['Button Small']
                .textTransform,
            padding: `4px 14px`,
            borderRadius: `4px`,
            height: `30px`,
          },
          containedPrimary: {
            backgroundColor: globalTheme.palette['Primary']['Main'],
            boxShadow:
              globalTheme.customShadows['Colors']['Shadow Primary'].boxShadow,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Primary']['Dark'],
              boxShadow:
                globalTheme.customShadows['Colors']['Shadow Primary'].boxShadow,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor:
                globalTheme.palette['Action']['Disabled Background (12p)'],
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          containedSecondary: {
            backgroundColor: globalTheme.palette['Secondary']['Main'],
            boxShadow:
              globalTheme.customShadows['Colors']['Shadow Secondary'].boxShadow,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Secondary']['Dark'],
              boxShadow:
                globalTheme.customShadows['Colors']['Shadow Secondary']
                  .boxShadow,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor:
                globalTheme.palette['Action']['Disabled Background (12p)'],
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          containedError: {
            backgroundColor: globalTheme.palette['Error']['Main'],
            boxShadow:
              globalTheme.customShadows['Colors']['Shadow Error'].boxShadow,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Error']['Dark'],
              boxShadow:
                globalTheme.customShadows['Colors']['Shadow Error'].boxShadow,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor:
                globalTheme.palette['Action']['Disabled Background (12p)'],
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          containedSuccess: {
            backgroundColor: globalTheme.palette['Success']['Main'],
            boxShadow:
              globalTheme.customShadows['Colors']['Shadow Success'].boxShadow,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Success']['Dark'],
              boxShadow:
                globalTheme.customShadows['Colors']['Shadow Success'].boxShadow,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor:
                globalTheme.palette['Action']['Disabled Background (12p)'],
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          containedInfo: {
            backgroundColor: globalTheme.palette['Info']['Main'],
            boxShadow:
              globalTheme.customShadows['Colors']['Shadow Info'].boxShadow,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Info']['Dark'],
              boxShadow:
                globalTheme.customShadows['Colors']['Shadow Info'].boxShadow,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor:
                globalTheme.palette['Action']['Disabled Background (12p)'],
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          containedWarning: {
            backgroundColor: globalTheme.palette['Warning']['Main'],
            boxShadow:
              globalTheme.customShadows['Colors']['Shadow Warning'].boxShadow,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Warning']['Dark'],
              boxShadow:
                globalTheme.customShadows['Colors']['Shadow Warning'].boxShadow,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor:
                globalTheme.palette['Action']['Disabled Background (12p)'],
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          textSizeMedium: {
            fontStyle:
              globalTheme.typography['Components']['Button Medium'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Button Medium'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Button Medium'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Button Medium'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Button Medium']
                .letterSpacing,
            textDecoration:
              globalTheme.typography['Components']['Button Medium']
                .textDecoration,
            lineHeight:
              globalTheme.typography['Components']['Button Medium'].lineHeight,
            textTransform:
              globalTheme.typography['Components']['Button Medium']
                .textTransform,
            padding: `6px 8px`,
            borderRadius: `4px`,
            height: `32px`,
          },
          textSizeLarge: {
            fontStyle:
              globalTheme.typography['Components']['Button Large'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Button Large'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Button Large'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Button Large'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Button Large']
                .letterSpacing,
            textDecoration:
              globalTheme.typography['Components']['Button Large']
                .textDecoration,
            lineHeight:
              globalTheme.typography['Components']['Button Large'].lineHeight,
            textTransform:
              globalTheme.typography['Components']['Button Large']
                .textTransform,
            padding: `8px 11px`,
            borderRadius: `4px`,
            height: `36px`,
          },
          textSizeSmall: {
            fontStyle:
              globalTheme.typography['Components']['Button Small'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Button Small'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Button Small'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Button Small'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Button Small']
                .letterSpacing,
            textDecoration:
              globalTheme.typography['Components']['Button Small']
                .textDecoration,
            lineHeight:
              globalTheme.typography['Components']['Button Small'].lineHeight,
            textTransform:
              globalTheme.typography['Components']['Button Small']
                .textTransform,
            padding: `4px 8px`,
            borderRadius: `4px`,
            height: `30px`,
          },
          textPrimary: {
            color: `rgba(254, 136, 136, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Primary']['Shades']['4p'],
              color: `rgba(254, 136, 136, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          textSecondary: {
            color: `rgba(2, 122, 209, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Secondary']['Shades']['4p'],
              color: `rgba(2, 122, 209, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          textError: {
            color: `rgba(128, 102, 255, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Error']['Shades']['4p'],
              color: `rgba(128, 102, 255, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          textSuccess: {
            color: `rgba(100, 207, 111, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Success']['Shades']['4p'],
              color: `rgba(100, 207, 111, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          textInfo: {
            color: `rgba(3, 195, 255, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Info']['Shades']['4p'],
              color: `rgba(3, 195, 255, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          textWarning: {
            color: `rgba(245, 161, 83, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Warning']['Shades']['4p'],
              color: `rgba(245, 161, 83, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          outlinedSizeLarge: {
            fontStyle:
              globalTheme.typography['Components']['Button Large'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Button Large'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Button Large'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Button Large'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Button Large']
                .letterSpacing,
            textDecoration:
              globalTheme.typography['Components']['Button Large']
                .textDecoration,
            lineHeight:
              globalTheme.typography['Components']['Button Large'].lineHeight,
            textTransform:
              globalTheme.typography['Components']['Button Large']
                .textTransform,
            padding: `8px 22px`,
            borderRadius: `8px`,
            height: `52px`,
          },
          outlinedSizeMedium: {
            fontStyle:
              globalTheme.typography['Components']['Button Medium'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Button Medium'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Button Medium'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Button Medium'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Button Medium']
                .letterSpacing,
            textDecoration:
              globalTheme.typography['Components']['Button Medium']
                .textDecoration,
            lineHeight:
              globalTheme.typography['Components']['Button Medium'].lineHeight,
            textTransform:
              globalTheme.typography['Components']['Button Medium']
                .textTransform,
            padding: `6px 16px`,
            borderRadius: `8px`,
            height: `44px`,
          },
          outlinedSizeSmall: {
            fontStyle:
              globalTheme.typography['Components']['Button Small'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Button Small'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Button Small'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Button Small'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Button Small']
                .letterSpacing,
            textDecoration:
              globalTheme.typography['Components']['Button Small']
                .textDecoration,
            lineHeight:
              globalTheme.typography['Components']['Button Small'].lineHeight,
            textTransform:
              globalTheme.typography['Components']['Button Small']
                .textTransform,
            padding: `4px 14px`,
            borderRadius: `8px`,
            height: `30px`,
          },
          outlinedPrimary: {
            border: `3px solid rgba(254, 136, 136, 1)`,
            boxSizing: `border-box`,
            color: `rgba(0, 0, 0, 0.87)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Primary']['Shades']['4p'],
              border: `3px solid rgba(255, 175, 175, 1)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.87)`,
            },
            '&:disabled': {
              border: `3px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          outlinedSecondary: {
            border: `3px solid rgba(2, 122, 209, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(0, 0, 0, 0.87)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Secondary']['Shades']['4p'],
              border: `3px solid rgba(2, 122, 209, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.87)`,
            },
            '&:disabled': {
              border: `3px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          outlinedError: {
            border: `3px solid rgba(128, 102, 255, 1)`,
            boxSizing: `border-box`,
            color: `rgba(0, 0, 0, 0.87)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Error']['Shades']['4p'],
              border: `3px solid rgba(178, 162, 255, 1)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.87)`,
            },
            '&:disabled': {
              border: `3px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          outlinedSuccess: {
            border: `3px solid rgba(100, 207, 111, 1)`,
            boxSizing: `border-box`,
            color: `rgba(0, 0, 0, 0.87)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Success']['Shades']['4p'],
              border: `3px solid rgba(54, 209, 70, 1)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.87)`,
            },
            '&:disabled': {
              border: `3px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          outlinedInfo: {
            border: `3px solid rgba(3, 195, 255, 1)`,
            boxSizing: `border-box`,
            color: `rgba(0, 0, 0, 0.87)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Info']['Shades']['4p'],
              border: `3px solid rgba(78, 213, 255, 1)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.87)`,
            },
            '&:disabled': {
              border: `3px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          outlinedWarning: {
            border: `3px solid rgba(237, 108, 2, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(0, 0, 0, 0.87)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Warning']['Shades']['4p'],
              border: `3px solid rgba(237, 108, 2, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.87)`,
            },
            '&:disabled': {
              border: `3px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
        },
      },
      MuiCheckbox: {
        defaultProps: {
          icon: <SvgIcon component={CheckBoxOutlineBlank} />,
          indeterminateIcon: <SvgIcon component={IndeterminateCheckBo} />,
          checkedIcon: <SvgIcon component={CheckBoxFilled} />,
        },
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: globalTheme.palette['Primary']['Shades']['4p'],
              borderRadius: `19px`,
            },
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          label: {
            color: globalTheme.palette['Text']['Primary'],
            fontStyle: globalTheme.typography['Typography']['Body 2'].fontStyle,
            fontFamily:
              globalTheme.typography['Typography']['Body 2'].fontFamily,
            fontWeight:
              globalTheme.typography['Typography']['Body 2'].fontWeight,
            fontSize: globalTheme.typography['Typography']['Body 2'].fontSize,
            letterSpacing:
              globalTheme.typography['Typography']['Body 2'].letterSpacing,
            textDecoration:
              globalTheme.typography['Typography']['Body 2'].textDecoration,
            lineHeight:
              globalTheme.typography['Typography']['Body 2'].lineHeight,
            textTransform:
              globalTheme.typography['Typography']['Body 2'].textTransform,
            '&.Mui-disabled': {
              color: globalTheme.palette['Action']['Disabled (26p)'],
              fontStyle:
                globalTheme.typography['Typography']['Body 2'].fontStyle,
              fontFamily:
                globalTheme.typography['Typography']['Body 2'].fontFamily,
              fontWeight:
                globalTheme.typography['Typography']['Body 2'].fontWeight,
              fontSize: globalTheme.typography['Typography']['Body 2'].fontSize,
              letterSpacing:
                globalTheme.typography['Typography']['Body 2'].letterSpacing,
              textDecoration:
                globalTheme.typography['Typography']['Body 2'].textDecoration,
              lineHeight:
                globalTheme.typography['Typography']['Body 2'].lineHeight,
              textTransform:
                globalTheme.typography['Typography']['Body 2'].textTransform,
            },
          },
          root: {
            marginLeft: '0px',
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          root: {
            borderRadius: `4px`,
            boxShadow: globalTheme.customShadows['Elevation']['24'].boxShadow,
            padding: `8px 24px`,
          },
          paper: {
            backgroundColor: globalTheme.palette['Background']['Paper'],
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            width: `24px`,
            height: `24px`,
          },
          fontSizeLarge: {
            width: `35px`,
            height: `35px`,
          },
          fontSizeSmall: {
            width: `20px`,
            height: `20px`,
          },
          fontSizeInherit: {
            width: `16px`,
            height: `16px`,
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            '&.MuiRadio-colorPrimary': {
              color: `rgba(0, 0, 0, 0.8)`,
              '&.Mui-checked': {
                color: `rgba(254, 136, 136, 1)`,
              },
              '&:hover': {
                backgroundColor: `rgba(107, 104, 255, 0.04)`,
              },
            },
            '&.MuiRadio-colorSecondary': {
              color: `rgba(0, 0, 0, 0.8)`,
              '&.Mui-checked': {
                color: `rgba(2, 122, 209, 1)`,
              },
              '&:hover': {
                backgroundColor: `rgba(2, 122, 209, 0.04)`,
              },
            },
            '&.MuiRadio-colorError': {
              color: `rgba(0, 0, 0, 0.8)`,
              '&.Mui-checked': {
                color: `rgba(128, 102, 255, 1)`,
              },
              '&:hover': {
                backgroundColor: `rgba(128, 102, 255, 0.04)`,
              },
            },
            '&.MuiRadio-colorWarning': {
              color: `rgba(0, 0, 0, 0.8)`,
              '&.Mui-checked': {
                color: `rgba(245, 161, 83, 1)`,
              },
              '&:hover': {
                backgroundColor: `rgba(245, 161, 83, 0.04)`,
              },
            },
            '&.MuiRadio-colorSuccess': {
              color: `rgba(0, 0, 0, 0.8)`,
              '&.Mui-checked': {
                color: `rgba(100, 207, 111, 1)`,
              },
              '&:hover': {
                backgroundColor: `rgba(100, 207, 111, 0.04)`,
              },
            },
            '&.MuiRadio-colorInfo': {
              color: `rgba(0, 0, 0, 0.8)`,
              '&.Mui-checked': {
                color: `rgba(3, 195, 255, 1)`,
              },
              '&:hover': {
                backgroundColor: `rgba(83, 177, 245, 0.04)`,
              },
            },
            '&.Mui-disabled': {
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            '&.MuiSwitch-colorPrimary': {
              color: 'rgba(250, 250, 250, 1)',
              borderRadius: `100px`,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&.Mui-checked': {
                color: 'rgba(254, 136, 136, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(107, 104, 255, 0.04)',
                },
              },
            },
            '&.MuiSwitch-colorSecondary': {
              color: 'rgba(250, 250, 250, 1)',
              borderRadius: `100px`,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&.Mui-checked': {
                color: 'rgba(2, 122, 209, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(2, 122, 209, 0.04)',
                },
              },
            },
            '&.MuiSwitch-colorError': {
              color: 'rgba(250, 250, 250, 1)',
              borderRadius: `100px`,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&.Mui-checked': {
                color: 'rgba(128, 102, 255, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(128, 102, 255, 0.04)',
                },
              },
            },
            '&.MuiSwitch-colorWarning': {
              color: 'rgba(250, 250, 250, 1)',
              borderRadius: `100px`,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&.Mui-checked': {
                color: 'rgba(245, 161, 83, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(245, 161, 83, 0.04)',
                },
              },
            },
            '&.MuiSwitch-colorSuccess': {
              color: 'rgba(250, 250, 250, 1)',
              borderRadius: `100px`,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&.Mui-checked': {
                color: 'rgba(100, 207, 111, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(100, 207, 111, 0.04)',
                },
              },
            },
            '&.MuiSwitch-colorInfo': {
              color: 'rgba(250, 250, 250, 1)',
              borderRadius: `100px`,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&.Mui-checked': {
                color: 'rgba(3, 195, 255, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(83, 177, 245, 0.04)',
                },
              },
            },
          },
          track: {
            '.MuiSwitch-colorPrimary + &': {
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            '.Mui-checked.MuiSwitch-colorPrimary.Mui-checked + &': {
              backgroundColor: 'rgba(254, 136, 136, 1)',
            },
            '.MuiSwitch-colorSecondary + &': {
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            '.Mui-checked.MuiSwitch-colorSecondary.Mui-checked + &': {
              backgroundColor: 'rgba(2, 122, 209, 1)',
            },
            '.MuiSwitch-colorError + &': {
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            '.Mui-checked.MuiSwitch-colorError.Mui-checked + &': {
              backgroundColor: 'rgba(128, 102, 255, 1)',
            },
            '.MuiSwitch-colorWarning + &': {
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            '.Mui-checked.MuiSwitch-colorWarning.Mui-checked + &': {
              backgroundColor: 'rgba(245, 161, 83, 1)',
            },
            '.MuiSwitch-colorSuccess + &': {
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            '.Mui-checked.MuiSwitch-colorSuccess.Mui-checked + &': {
              backgroundColor: 'rgba(100, 207, 111, 1)',
            },
            '.MuiSwitch-colorInfo + &': {
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            '.Mui-checked.MuiSwitch-colorInfo.Mui-checked + &': {
              backgroundColor: 'rgba(3, 195, 255, 1)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {},
          sizeSmall: {},
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            color: globalTheme.palette['Text']['Primary'],
            fontStyle:
              globalTheme.typography['Components']['Input Text'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Input Text'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Input Text'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Input Text'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Input Text'].letterSpacing,
            textDecoration:
              globalTheme.typography['Components']['Input Text'].textDecoration,
            lineHeight:
              globalTheme.typography['Components']['Input Text'].lineHeight,
            textTransform:
              globalTheme.typography['Components']['Input Text'].textTransform,
          },
          sizeSmall: {
            color: globalTheme.palette['Text']['Primary'],
            fontStyle:
              globalTheme.typography['Components']['Input Text'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Input Text'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Input Text'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Input Text'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Input Text'].letterSpacing,
            textDecoration:
              globalTheme.typography['Components']['Input Text'].textDecoration,
            lineHeight:
              globalTheme.typography['Components']['Input Text'].lineHeight,
            textTransform:
              globalTheme.typography['Components']['Input Text'].textTransform,
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            color: globalTheme.palette['Text']['Secondary'],
            fontStyle:
              globalTheme.typography['Components']['Helper Text'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Helper Text'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Helper Text'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Helper Text'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Helper Text'].letterSpacing,
            textDecoration:
              globalTheme.typography['Components']['Helper Text']
                .textDecoration,
            lineHeight:
              globalTheme.typography['Components']['Helper Text'].lineHeight,
            textTransform:
              globalTheme.typography['Components']['Helper Text'].textTransform,
            '&.MuiError': {
              color: globalTheme.palette['Error']['Main'],
              fontStyle:
                globalTheme.typography['Components']['Helper Text'].fontStyle,
              fontFamily:
                globalTheme.typography['Components']['Helper Text'].fontFamily,
              fontWeight:
                globalTheme.typography['Components']['Helper Text'].fontWeight,
              fontSize:
                globalTheme.typography['Components']['Helper Text'].fontSize,
              letterSpacing:
                globalTheme.typography['Components']['Helper Text']
                  .letterSpacing,
              textDecoration:
                globalTheme.typography['Components']['Helper Text']
                  .textDecoration,
              lineHeight:
                globalTheme.typography['Components']['Helper Text'].lineHeight,
              textTransform:
                globalTheme.typography['Components']['Helper Text']
                  .textTransform,
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: globalTheme.palette['Text']['Secondary'],
            fontStyle:
              globalTheme.typography['Components']['Input Text'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Input Text'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Input Text'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Input Text'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Input Text'].letterSpacing,
            textDecoration:
              globalTheme.typography['Components']['Input Text'].textDecoration,
            lineHeight:
              globalTheme.typography['Components']['Input Text'].lineHeight,
            textTransform:
              globalTheme.typography['Components']['Input Text'].textTransform,
          },
          sizeSmall: {
            color: globalTheme.palette['Text']['Secondary'],
            fontStyle:
              globalTheme.typography['Components']['Input Text'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Input Text'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Input Text'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Input Text'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Input Text'].letterSpacing,
            textDecoration:
              globalTheme.typography['Components']['Input Text'].textDecoration,
            lineHeight:
              globalTheme.typography['Components']['Input Text'].lineHeight,
            textTransform:
              globalTheme.typography['Components']['Input Text'].textTransform,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: globalTheme.palette['Text']['Primary'],
            fontStyle:
              globalTheme.typography['Components']['Input Text'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Input Text'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Input Text'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Input Text'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Input Text'].letterSpacing,
            textDecoration:
              globalTheme.typography['Components']['Input Text'].textDecoration,
            lineHeight:
              globalTheme.typography['Components']['Input Text'].lineHeight,
            textTransform:
              globalTheme.typography['Components']['Input Text'].textTransform,
          },
          sizeSmall: {
            color: globalTheme.palette['Text']['Primary'],
            fontStyle:
              globalTheme.typography['Components']['Input Text'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Input Text'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Input Text'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Input Text'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Input Text'].letterSpacing,
            textDecoration:
              globalTheme.typography['Components']['Input Text'].textDecoration,
            lineHeight:
              globalTheme.typography['Components']['Input Text'].lineHeight,
            textTransform:
              globalTheme.typography['Components']['Input Text'].textTransform,
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: `rgba(44, 44, 44, 0.95)`,
            borderRadius: `6px`,
            color: globalTheme.palette['Common']['White']['100p'],
            fontStyle:
              globalTheme.typography['Components']['Tooltip'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Tooltip'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Tooltip'].fontWeight,
            fontSize: globalTheme.typography['Components']['Tooltip'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Tooltip'].letterSpacing,
            textDecoration:
              globalTheme.typography['Components']['Tooltip'].textDecoration,
            lineHeight:
              globalTheme.typography['Components']['Tooltip'].lineHeight,
            textTransform:
              globalTheme.typography['Components']['Tooltip'].textTransform,
          },
          arrow: {
            color: `rgba(44, 44, 44, 0.95)`,
          },
        },
      },
    },
  },
  globalTheme
);

export default questTheme;
