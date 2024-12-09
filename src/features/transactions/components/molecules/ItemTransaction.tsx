import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  responseHeight,
  responsiveWidth,
  scaledFontSize,
} from '@shared/utils/Pixel';
import {Transaction} from '@shared/types/global';
import {FC, useMemo} from 'react';
import {Icon, Text} from '@shared/components/atoms';
import {typography} from '@shared/style';
import formatToRupiah from '@shared/utils/formatToRupiah';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@features/transactions/types/navigation';
import { ButtonWithText } from '@shared/components/molecules';

type Props = {
  item: Transaction;
};

const ItemTransaction: FC<Props> = ({item}) => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'AllTransactionPage'>
    >();
    const status = useMemo(() => {
      if (item.status.toLowerCase() === 'pending') {
        return 'Pengecekan'
      } else if (item.status.toLowerCase() === 'success') {
        return 'Berhasil'
      }
      return 'Gagal'
    }, [])
    const statusColor = useMemo(() => {
      if (item.status.toLowerCase() === 'pending') {
        return 'tomato'
      } else if (item.status.toLowerCase() === 'success') {
        return 'green'
      }
      return 'red'
    }, [])
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate('DetailTransactionPage', {transaction: item});
      }}>
      {/* Garis Kiri */}
      <View
        style={{
          width: responsiveWidth(4),
          height: '100%',
          backgroundColor:
            item.status.toLowerCase() === 'pending' ? 'tomato' : 'green',
        }}
      />
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: responsiveWidth(12)}}>
        <View
          style={{
            padding: 12,
            flexDirection: 'column',
            rowGap: responseHeight(8),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              label={item.sender_bank}
              textStyle={{
                fontSize: scaledFontSize(typography.fontSizes.large),
                textTransform: 'uppercase',
                fontWeight: typography.fontWeights.bold,
              }}
            />
            <Icon name="chevron-right" />
            <Text
              label={item.beneficiary_bank}
              textStyle={{
                fontSize: scaledFontSize(typography.fontSizes.large),
                textTransform: 'uppercase',
                fontWeight: typography.fontWeights.bold,
              }}
            />
          </View>
          <Text
            label={item.beneficiary_name}
            textStyle={{
              fontWeight: typography.fontWeights.bold,
              fontSize: scaledFontSize(typography.fontSizes.medium),
            }}
          />
          <View
            style={{flexDirection: 'row', alignItems: 'center', columnGap: 2}}>
            <Text label={formatToRupiah(Number(item.amount + item.fee))} />
          </View>
        </View>
        <ButtonWithText label={status} onPress={() => {}} disabled buttonStyle={{ padding: 8, backgroundColor: statusColor}} textStyle={{ color: 'white', fontWeight: typography.fontWeights.bold }} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderRadius: 8,
    backgroundColor: 'white',
    rowGap: 6,
  },
});

export default ItemTransaction;
