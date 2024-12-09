import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const pixelRatioStatic = PixelRatio.get();
const fontScale = PixelRatio.getFontScale();

export const responsiveWidth = (size: number) =>
  PixelRatio.roundToNearestPixel(size * (width / 375));

export const responseHeight = (size: number) =>
  PixelRatio.roundToNearestPixel(size * (height / 667));

export const responsiveFontSize = (size: number) =>
  PixelRatio.roundToNearestPixel(size * (width / pixelRatioStatic));

export const scaledFontSize = (size: number) =>
  PixelRatio.roundToNearestPixel(size * fontScale);
