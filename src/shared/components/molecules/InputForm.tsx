import {FC, ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInputProps} from '@shared/types/global';
import {TextInput} from '@shared/components/atoms';

type Props = TextInputProps & {
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
};

const InputForm: FC<Props> = ({
  leadingIcon,
  trailingIcon,
  value,
  onChangeText,
  placeholder,
  style,
}) => {
  return (
    <View style={styles.container}>
      {leadingIcon ? leadingIcon : null}
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={style}
        value={value}
      />
      {trailingIcon ? trailingIcon : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 4,
  },
});

export default InputForm;
