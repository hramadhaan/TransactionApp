import {FC} from 'react';
import {StyleSheet, Text as TextRN} from 'react-native';
import {scaledFontSize} from '@shared/utils/Pixel';
import {typography} from '@shared/style';
import {TextProps} from '@shared/types/global';

const Text: FC<TextProps> = props => {
  return <TextRN style={[styles.label, props.textStyle]}>{props.label}</TextRN>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: scaledFontSize(typography.fontSizes.medium),
    fontWeight: typography.fontWeights.normal,
  },
});

export default Text;
