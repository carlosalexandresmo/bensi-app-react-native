import {Platform, PixelRatio, StyleSheet, Dimensions} from 'react-native';

// Get pixel ratio
let pixelRatio = PixelRatio.get();
if (Platform.OS === 'web') {
  pixelRatio = 1;
}

// Screen height
let height = Dimensions.get('screen').height;
let width = Dimensions.get('screen').width;

const Style = {
  primaryColor: '#CC2D2C',
  secundaryColor: '#FFFFFE',
  greenColor: '#C0CC6F',
  purpleColor: '#9081CC',
  begeColor: '#EFD7AC',
  grayColor: '#7C7C7C',
  iceColor: '#6BB3D7',
  blackColor: '#1A1919',
  confirmationColor: '#32AD61',
};

Style.styles = StyleSheet.create({
  // Default
  page: {
    width: width,
    height: height,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rowCenter: {
    flex: 1,
    alignItems: 'center',
  },
  rowHorizontal: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  w100: {width: '100%'},
  paddingPage: {paddingHorizontal: 35},
  paddingPageSm: {paddingHorizontal: 25},
  boxDefault: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 35,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  logoDefault: {width: 200},
  logoSmall: {width: 150},
  logoXSmall: {width: 100},
  focusedButton: {opacity: 0.8},
  focusedText: {transform: [{scale: 1.1}]},
  bottom: {
    position: 'absolute',
    width: '100%',
    bottom: 150,
  },
  screenHeight: {height: height},
  screenWidth: {width: width},
  none: {display: 'none'},
  //Background Color
  bgPrimary: {backgroundColor: Style.primaryColor},
  bgBlack: {backgroundColor: Style.blackColor},
  bgIce: {backgroundColor: Style.iceColor},
  bgWhite: {backgroundColor: Style.secundaryColor},
  bgGreen: {backgroundColor: Style.greenColor},
  bgGray: {backgroundColor: Style.grayColor},
  bgRedOpacity: {backgroundColor: 'rgba(204, 45, 44, 0.1)'},
  bgGrayOpacity: {backgroundColor: 'rgba(201, 201, 201, 0.1)'},
  bgBlueOpacity: {backgroundColor: 'rgba(107, 179, 215, 0.1)'},
  bgPurpleOpacity: {backgroundColor: 'rgba(144, 129, 204, 0.1)'},
  // Font color
  fontPrimary: {color: Style.primaryColor},
  fontIce: {color: Style.iceColor},
  fontGray: {color: Style.grayColor},
  fontBlack: {color: Style.blackColor},
  fontWhite: {color: Style.secundaryColor},
  fontGreen: {color: Style.greenColor},
  fontDarkGreen: {color: Style.confirmationColor},
  // Font Size
  h1: {fontSize: 50},
  h2: {fontSize: 40},
  h3: {fontSize: 30},
  h4: {fontSize: 23},
  h5: {fontSize: 18},
  h6: {fontSize: 14},
  text: {fontSize: 16},
  // Font Family
  fontRegular: {fontFamily: 'Jost-Regular'},
  fontSemiBold: {fontFamily: 'Jost-SemiBold'},
  fontBold: {fontFamily: 'Jost-Bold'},
  fontMedium: {fontFamily: 'Jost-Medium'},
  // Font Positions
  textCenter: {textAlign: 'center'},
  textStart: {textAlign: 'left'},
  textEnd: {textAlign: 'right'},
  // Font Decorarion
  underline: {textDecorationLine: 'underline'},
  uppercase: {textTransform: 'uppercase'},
  // Paddings
  pt1: {paddingTop: 10},
  pt2: {paddingTop: 20},
  pt3: {paddingTop: 30},
  pt4: {paddingTop: 40},
  pt5: {paddingTop: 50},
  pt6: {paddingTop: 60},
  pt7: {paddingTop: 70},
  pt8: {paddingTop: 80},

  ps1: {paddingStart: 10},
  ps2: {paddingStart: 20},
  ps3: {paddingStart: 30},
  ps4: {paddingStart: 40},
  ps5: {paddingStart: 50},
  ps6: {paddingStart: 60},
  ps7: {paddingStart: 70},
  ps8: {paddingStart: 80},

  pe1: {paddingEnd: 10},
  pe2: {paddingEnd: 20},
  pe3: {paddingEnd: 30},
  pe4: {paddingEnd: 40},
  pe5: {paddingEnd: 50},
  pe6: {paddingEnd: 60},
  pe7: {paddingEnd: 70},
  pe8: {paddingEnd: 80},
  // Margins
  mt1: {marginTop: 10},
  mt2: {marginTop: 20},
  mt3: {marginTop: 30},
  mt4: {marginTop: 40},
  mt5: {marginTop: 50},
  mt6: {marginTop: 60},
  mt7: {marginTop: 70},
  mt8: {marginTop: 80},
  mt9: {marginTop: 90},
  mt10: {marginTop: 100},

  mb1: {marginBottom: 10},
  mb2: {marginBottom: 20},
  mb3: {marginBottom: 30},
  mb4: {marginBottom: 40},
  mb5: {marginBottom: 50},
  mb6: {marginBottom: 60},
  mb7: {marginBottom: 70},
  mb8: {marginBottom: 80},

  ms1: {marginStart: 10},
  ms2: {marginStart: 20},
  ms3: {marginStart: 30},
  ms4: {marginStart: 40},
  ms5: {marginStart: 50},
  ms6: {marginStart: 60},
  ms7: {marginStart: 70},
  ms8: {marginStart: 80},

  me1: {marginEnd: 10},
  me2: {marginEnd: 20},
  me3: {marginEnd: 30},
  me4: {marginEnd: 40},
  me5: {marginEnd: 50},
  me6: {marginEnd: 60},
  me7: {marginEnd: 70},
  me8: {marginEnd: 80},
  // Inputs
  inputs: {
    height: 70,
    width: '100%',
    borderWidth: 2,
    borderColor: Style.grayColor,
    borderRadius: 20,
    fontFamily: 'Jost-SemiBold',
    fontSize: 16,
    paddingStart: 20,
    marginBottom: 20,
  },
  // Buttons
  buttonPrimary: {
    height: 65,
    backgroundColor: Style.primaryColor,
    borderRadius: 20,
  },
});

export default Style;
