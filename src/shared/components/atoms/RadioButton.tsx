import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {responsiveWidth} from '@shared/utils/Pixel';
import {FC} from 'react';
import Text from './Text';
import {typography} from '@shared/style';

type Props = {
  size?: number;
  selected: boolean;
  label: string;
  onPress: () => void;
};

const RadioButton: FC<Props> = ({
  size = 16,
  selected = false,
  label = '',
  onPress = () => {},
}) => {
  const SIZE = responsiveWidth(size);

  return (
    <TouchableOpacity
      style={styles.layout}
      onPress={onPress}
      activeOpacity={0.8}>
      <View
        style={{
          width: SIZE,
          height: SIZE,
          borderRadius: SIZE,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: 'tomato',
        }}>
        <View
          style={{
            width: SIZE / 2,
            height: SIZE / 2,
            borderRadius: SIZE / 2,
            backgroundColor: selected ? 'tomato' : 'white',
          }}
        />
      </View>
      <Text
        label={label}
        textStyle={{fontWeight: typography.fontWeights.normal}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: responsiveWidth(8),
  },
});

export default RadioButton;
