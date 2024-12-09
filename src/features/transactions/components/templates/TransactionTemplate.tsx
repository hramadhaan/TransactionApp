import {FC, ReactNode} from 'react';
import {Navbar} from '../organisms';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  children: ReactNode;
};

const TransactionTemplate: FC<Props> = ({children}) => {
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        marginTop: Math.round(top),
      }}>
      <Navbar />
      <View style={{flex: 1}}>{children}</View>
    </View>
  );
};

export default TransactionTemplate;
