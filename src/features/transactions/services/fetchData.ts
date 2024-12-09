import {Transaction} from '@shared/types/global';
import instance from '@shared/utils/ApiClient';
import {TransactionResponse} from '@features/transactions/types/response';

function fetchData(): Promise<Transaction[]> {
  return new Promise((resolve, reject) => {
    instance
      .get<TransactionResponse>('/frontend-test')
      .then(response => {
        resolve(Object.values(response.data));
      })
      .catch(err => reject(err));
  });
}

export default fetchData;
