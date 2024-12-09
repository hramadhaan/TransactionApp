import {FC, ReactNode} from 'react';
import {
  StyleSheet,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import {Button, Text} from '@shared/components/atoms';

type Props = {
  label: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
  disabled?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
};
const ButtonWithText: FC<Props> = ({
  label = '',
  onPress,
  buttonStyle,
  textStyle,
  disabled = false,
  leadingIcon,
  trailingIcon,
}) => {
  return (
    <Button
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, buttonStyle]}>
      {leadingIcon ? leadingIcon : null}
      <Text label={label} textStyle={textStyle} />
      {trailingIcon ? trailingIcon : null}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
  },
});

export default ButtonWithText;
