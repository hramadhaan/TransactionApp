import {FC} from 'react';
import {View} from 'react-native';
import RadioButton from '@shared/components/atoms/RadioButton';

type RadioButtonData = {
  value: string;
  label: string;
};

type Props = {
  data: RadioButtonData[];
  onChange: (value: string) => void;
  value: string;
};

const RadioButtonGroup: FC<Props> = ({
  data = [],
  onChange = (value: string) => {},
  value = '',
}) => {
  return (
    <View
      style={{flexDirection: 'column', alignItems: 'flex-start', rowGap: 16}}>
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          return (
            <RadioButton
              onPress={() => onChange(item.value)}
              key={`radio-${index}`}
              label={item.label}
              selected={value === item.value}
            />
          );
        })}
    </View>
  );
};

export default RadioButtonGroup;
