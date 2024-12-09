import {createContext} from 'react';
import {Transaction} from '@shared/types/global';
import {SORT_DATA} from '../constants/filter';

type Props = {
  transactions: Transaction[];
  filter: {
    search: string;
    sort: string;
  };
  onHandleFilter: (type: string, value: string) => void;
};

export const TransactionContext = createContext<Props>({
  transactions: [],
  filter: {
    search: '',
    sort: SORT_DATA[0].value,
  },
  onHandleFilter: (type: string, value: string) => {},
});
