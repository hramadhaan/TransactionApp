import {FC} from 'react';
import {StyleSheet, TextInput as TextInputRN} from 'react-native';
import {TextInputProps} from '@shared/types/global';

const TextInput: FC<TextInputProps> = ({
  style,
  placeholder = '',
  value,
  onChangeText,
}) => {
  return (
    <TextInputRN
      autoCapitalize="none"
      autoComplete="off"
      autoCorrect={false}
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 4,
  },
});

export default TextInput;
