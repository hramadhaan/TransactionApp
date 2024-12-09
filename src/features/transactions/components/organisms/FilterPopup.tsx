import {View} from 'react-native';
import {FC, useState} from 'react';
import {responseHeight, responsiveWidth} from '../../../../shared/utils/Pixel';
import RadioButtonGroup from '../../../../shared/components/molecules/RadioButtonGroup';
import {SORT_DATA} from '../../constants/filter';
import useTransactionContext from '../../hooks/useTransactionContext';
import {ButtonWithModal} from '../molecules';

type Props = {};

const FilterPopup: FC<Props> = () => {
  const {onHandleFilter, filter} = useTransactionContext();
  const [visible, setIsVisible] = useState<boolean>(false);
  return (
    <ButtonWithModal
      onDismiss={() => setIsVisible(false)}
      onPress={() => setIsVisible(true)}
      visible={visible}
      title="Urutkan">
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '90%',
            minHeight: responseHeight(100),
            borderRadius: 12,
            backgroundColor: 'white',
            paddingHorizontal: responsiveWidth(18),
            paddingVertical: responseHeight(22),
          }}>
          <RadioButtonGroup
            data={SORT_DATA}
            value={filter.sort}
            onChange={value => {
              onHandleFilter('sort', value);
              setTimeout(() => {
                setIsVisible(false);
              }, 150);
            }}
          />
        </View>
      </View>
    </ButtonWithModal>
  );
};

export default FilterPopup;
