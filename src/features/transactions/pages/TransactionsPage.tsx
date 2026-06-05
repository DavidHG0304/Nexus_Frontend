import { useDashboard } from "../../dashboard/hook/useDashboard";
import TransactionForm from "../components/TransactionForm";

import TransactionSidePanel from "../components/TransactionSidePanel";

import {
  useTransactions
} from "../hooks/useTransactions";

function TransactionsPage() {

  const {
    data,
    fetchDashboard
  } = useDashboard();

  const transactions =
    useTransactions({

      onTransferSuccess:
        async () => {

          await fetchDashboard();

        }

    });

  return (

    <div
      className="
        grid
        gap-5
        xl:grid-cols-[1.15fr_0.55fr]
      "
    >

      <TransactionForm

        toAccount={
          transactions.toAccount
        }

        setToAccount={
          transactions.setToAccount
        }

        amount={
          transactions.amount
        }

        setAmount={
          transactions.setAmount
        }

        description={
          transactions.description
        }

        setDescription={
          transactions.setDescription
        }

        transferir={
          transactions.transferir
        }

        message={
          transactions.message
        }

        messageType={
          transactions.messageType
        }

      />

      <TransactionSidePanel
        data={data}
      />

    </div>

  );

}

export default TransactionsPage;