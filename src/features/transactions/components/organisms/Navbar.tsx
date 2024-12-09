import {FC} from 'react';
import {View} from 'react-native';
import {InputForm} from '@shared/components/molecules';
import {Icon} from '@shared/components/atoms';
import {FilterPopup} from '@features/transactions/components/organisms';
import useTransactionContext from '@features/transactions/hooks/useTransactionContext';
import debounce from '@shared/utils/debounce';
import { responsiveWidth } from '@shared/utils/Pixel';

type Props = {};

const Navbar: FC<Props> = () => {
  const {onHandleFilter} = useTransactionContext();
  const handleSearch = debounce((text: string) => {
    onHandleFilter('search', text);
  }, 550);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 16,
        paddingHorizontal: 4,
        borderRadius: 4,
        columnGap: responsiveWidth(12),
      }}>
      <View style={{flex: 2, backgroundColor: 'white'}}>
        <InputForm
          onChangeText={handleSearch}
          leadingIcon={<Icon name={'magnify'} size={20} color="tomato" />}
          placeholder="Cari nama, bank, atau nominal"
        />
      </View>
      <FilterPopup />
    </View>
  );
};

export default Navbar;
