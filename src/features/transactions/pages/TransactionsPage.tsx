
import Loader from "../../../shared/components/ui/Loader";
import { useBeneficiaries } from "../../beneficiaries/hooks/useBeneficiaries";
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
    , loading: dashboardLoading,
  } = useDashboard();

  const {
    beneficiaries
    , loading: beneficiariesLoading
  } = useBeneficiaries();

  const transactions =
    useTransactions({

      onTransferSuccess:
        async () => {

          await fetchDashboard();

        }

    });

  if (dashboardLoading || beneficiariesLoading) {

    return <Loader />;

  }

  return (



    <div
      className="
        grid
        gap-5
        xl:grid-cols-[1.15fr_0.55fr]
      "
    >

      <TransactionForm

        beneficiaries={
          beneficiaries
        }

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