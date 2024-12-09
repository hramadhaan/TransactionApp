import {ScrollView, StyleSheet, View} from 'react-native';
import {Icon, Text} from '@shared/components/atoms';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@features/transactions/types/navigation';
import {FC} from 'react';
import {colors, typography} from '@shared/style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  responseHeight,
  responsiveWidth,
  scaledFontSize,
} from '@shared/utils/Pixel';
import {ButtonWithIcon, ButtonWithText} from '@shared/components/molecules';
import formatToRupiah from '@shared/utils/formatToRupiah';
import {formatDate} from '@shared/utils/Date';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'DetailTransactionPage'
> & {};

const DetailTransactionPage: FC<Props> = ({route, navigation}) => {
  const {top} = useSafeAreaInsets();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: Math.round(top),
      }}>
      {/* ID Transaksi */}
      <View
        style={{
          paddingHorizontal: responsiveWidth(16),
          paddingVertical: responseHeight(12),
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: responsiveWidth(2),
          elevation: 4,
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.1,
          shadowRadius: 1,
        }}>
        <Text
          label="Id Transaksi:"
          textStyle={{
            textTransform: 'uppercase',
            fontWeight: typography.fontWeights.bold,
          }}
        />
        <Text
          label={`#${route.params.transaction.id}`}
          textStyle={{
            textTransform: 'uppercase',
            fontWeight: typography.fontWeights.bold,
          }}
        />
        <ButtonWithIcon
          iconName="content-copy"
          onPress={() => {}}
          style={{backgroundColor: 'transparent', padding: 4}}
        />
      </View>
      <View
        style={{
          paddingHorizontal: responsiveWidth(16),
          paddingVertical: responseHeight(12),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          columnGap: responsiveWidth(6),
          elevation: 4,
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.1,
          shadowRadius: 1,
        }}>
        <Text
          label="Detail Transaksi"
          textStyle={{
            textTransform: 'uppercase',
            fontWeight: typography.fontWeights.bold,
          }}
        />
        <ButtonWithText
          label="Tutup"
          onPress={() => navigation.goBack()}
          buttonStyle={{backgroundColor: 'transparent', padding: undefined}}
          textStyle={{
            color: 'tomato',
            textTransform: 'uppercase',
            fontWeight: typography.fontWeights.bold,
          }}
        />
      </View>
      <View
        style={{
          marginTop: responseHeight(12),
          paddingHorizontal: responsiveWidth(16),
          backgroundColor: 'white',
          padding: 16,
          elevation: 4,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.1,
          shadowRadius: 1,
        }}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', columnGap: 4}}>
          <Text
            label={route.params.transaction.sender_bank}
            textStyle={styles.bold}
          />
          <Icon name={'chevron-right'} size={20} />
          <Text
            label={route.params.transaction.beneficiary_bank}
            textStyle={styles.bold}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: responseHeight(12),
          }}>
          <View style={{flex: 0.7, rowGap: responseHeight(4)}}>
            <Text
              label={route.params.transaction.beneficiary_name}
              textStyle={styles.bold}
            />
            <Text
              label={route.params.transaction.account_number}
              textStyle={styles.regular}
            />
          </View>
          <View style={{rowGap: responseHeight(4)}}>
            <Text label="Nominal" textStyle={styles.bold} />
            <Text
              label={formatToRupiah(route.params.transaction.amount)}
              textStyle={(styles.regular, {textTransform: 'capitalize'})}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: responseHeight(12),
          }}>
          <View style={{flex: 0.7, rowGap: responseHeight(4)}}>
            <Text label="Berita Transfer" textStyle={styles.bold} />
            <Text
              label={route.params.transaction.remark}
              textStyle={(styles.regular, {textTransform: 'capitalize'})}
            />
          </View>
          <View style={{rowGap: responseHeight(4)}}>
            <Text label="Kode Unik" textStyle={styles.bold} />
            <Text
              label={route.params.transaction.unique_code.toString()}
              textStyle={(styles.regular, {textTransform: 'capitalize'})}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: responseHeight(12),
          }}>
          <View style={{flex: 0.7, rowGap: responseHeight(4)}}>
            <Text label="Waktu Dibuat" textStyle={styles.bold} />
            <Text
              label={formatDate(route.params.transaction.created_at)}
              textStyle={(styles.regular, {textTransform: 'capitalize'})}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bold: {
    textTransform: 'uppercase',
    fontWeight: typography.fontWeights.bold,
    fontSize: scaledFontSize(16),
  },
  regular: {
    textTransform: 'uppercase',
    fontWeight: typography.fontWeights.normal,
    fontSize: scaledFontSize(16),
  },
});

DetailTransactionPage.whyDidYouRender = true;

export default DetailTransactionPage;
