import {FC} from 'react';
import {StyleSheet, type StyleProp, type ViewStyle} from 'react-native';
import {colors} from '@shared/style';
import {Button, Icon} from '@shared/components/atoms';

type Props = {
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  iconName: string;
  iconColor?: string;
};

const ButtonWithIcon: FC<Props> = ({
  onPress = () => {},
  disabled = false,
  style,
  iconName,
  iconColor = 'tomato',
}) => {
  return (
    <Button
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, style]}>
      <Icon name={iconName} size={20} color={iconColor} />
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 4,
  },
});

export default ButtonWithIcon;
