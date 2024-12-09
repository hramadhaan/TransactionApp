import {Transaction} from '@shared/types/global';

export type RootStackParamList = {
  AllTransactionPage: undefined;
  DetailTransactionPage: {transaction: Transaction};
};
