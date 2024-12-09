import {FC, ReactNode, useCallback, useEffect, useMemo, useState} from 'react';
import {TransactionContext} from '@features/transactions/context/TransactionContext';
import {Transaction} from '@shared/types/global';
import fetchDataTransaction from '@features/transactions/services/fetchData';
import {ActivityIndicator, View} from 'react-native';
import {SORT_DATA} from '@features/transactions/constants/filter';

type Props = {
  children: ReactNode;
};

const TransactionProvider: FC<Props> = ({children}) => {
  const [filter, setFilter] = useState<{sort: string; search: string}>({
    sort: SORT_DATA[0].value,
    search: '',
  });
  const [tempData, setTempData] = useState<Transaction[]>([]);
  const [data, setData] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const applyFilterAndSort = useCallback(() => {
    let transactions = [...tempData];

    if (filter.search) {
      transactions = transactions.filter(item => {
        return (
          item.beneficiary_name
            .toLowerCase()
            .includes(filter.search.toLowerCase()) ||
          item.beneficiary_bank
            .toLowerCase()
            .includes(filter.search.toLowerCase()) ||
          item.sender_bank
            .toLowerCase()
            .includes(filter.search.toLowerCase()) ||
          item.amount.toString().includes(filter.search.toLowerCase())
        );
      });
    }

    if (filter.sort) {
      switch (filter.sort) {
        case 'nama-a-z':
          transactions.sort((a, b) =>
            a.beneficiary_name.localeCompare(b.beneficiary_name),
          );
          break;
        case 'nama-z-a':
          transactions = transactions.sort((a, b) =>
            b.beneficiary_name.localeCompare(a.beneficiary_name),
          );
          break;
        case 'tanggal-terbaru':
          transactions = transactions.sort(
            (a, b) =>
              new Date(b.created_at.replace(' ', 'T')).getTime() -
              new Date(a.created_at.replace(' ', 'T')).getTime(),
          );
          break;
        case 'tanggal-terlama':
          transactions = transactions.sort(
            (a, b) =>
              new Date(a.created_at.replace(' ', 'T')).getTime() -
              new Date(b.created_at.replace(' ', 'T')).getTime(),
          );
          break;
        default:
          break;
      }
    }

    setData(transactions);
  }, [tempData, filter]);

  const onHandleFilter = useCallback(
    (type: string, value: string) => {
      setFilter(prevState => {
        return {
          ...prevState,
          [type]: value,
        };
      });
    },
    [filter, tempData],
  );

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetchDataTransaction();
      setTempData(response);
      setData(response);
    } catch (err) {
      console.log('Error: ', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (filter.sort || filter.search) {
      applyFilterAndSort();
    }
  }, [filter, tempData]);

  const value = useMemo<{
    transactions: Transaction[];
    onHandleFilter: (type: string, value: string) => void;
    filter: {
      search: string;
      sort: string;
    };
  }>(
    () => ({
      transactions: data,
      onHandleFilter,
      filter: {
        search: filter.search,
        sort: filter.sort,
      },
    }),
    [data],
  );

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator color={'tomato'} />
      </View>
    );
  }

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};

TransactionProvider.whyDidYouRender = true;

export default TransactionProvider;
