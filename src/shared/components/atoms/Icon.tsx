import MaterialDesignIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FC} from 'react';
import {scaledFontSize} from '@shared/utils/Pixel';

type Props = {
  name: any;
  size?: number;
  color?: string;
};
const Icon: FC<Props> = ({name = '', size = 20, color = 'gray'}) => {
  return (
    <MaterialDesignIcon
      color={color}
      name={name}
      size={scaledFontSize(size)}
      selectionColor={color}
    />
  );
};

export default Icon;
