import {FC, Fragment} from 'react';
import TransactionList from '@features/transactions/components/organisms/TransactionList';
import TransactionProvider from '@features/transactions/providers/TransactionProviders';
import TransactionTemplate from '@features/transactions/components/templates/TransactionTemplate';

type Props = {};

const AllTransactionPage: FC<Props> = () => {
  return (
    <Fragment>
      <TransactionProvider>
        <TransactionTemplate>
          <TransactionList />
        </TransactionTemplate>
      </TransactionProvider>
    </Fragment>
  );
};

export default AllTransactionPage;
