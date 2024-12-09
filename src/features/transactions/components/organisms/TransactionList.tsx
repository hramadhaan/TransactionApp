import {FlatList, View} from 'react-native';
import useTransactionContext from '@features/transactions/hooks/useTransactionContext';
import ItemTransaction from '@features/transactions/components/molecules/ItemTransaction';
import {responseHeight, scaledFontSize} from '@shared/utils/Pixel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from '@shared/components/atoms';
import {typography} from '@shared/style';
import {FC} from 'react';

type Props = {};

const TransactionList: FC<Props> = () => {
  const {transactions} = useTransactionContext();
  const {bottom} = useSafeAreaInsets();
  return (
    <View style={{flex: 1, width: '100%'}}>
      <FlatList
        keyExtractor={(_item, index) => `item-${index}`}
        data={transactions}
        renderItem={({item}) => <ItemTransaction item={item} />}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: Math.round(bottom),
        }}
        ItemSeparatorComponent={() => (
          <View style={{height: responseHeight(12)}} />
        )}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                label="Belum ada transaksi"
                textStyle={{
                  fontSize: scaledFontSize(16),
                  fontWeight: typography.fontWeights.bold,
                  color: 'tomato',
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

// TransactionList.whyDidYouRender = true

export default TransactionList;
