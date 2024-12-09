import {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ButtonProps} from '@shared/types/global';
import {colors} from '@shared/style';

const Button: FC<ButtonProps> = ({
  children,
  onPress = () => {},
  disabled = false,
  style,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.button, style]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    backgroundColor: colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 4,
  },
});

export default Button;
