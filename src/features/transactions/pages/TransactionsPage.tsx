
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

    return (

      <div className="grid gap-5 xl:grid-cols-[1.15fr_0.55fr] animate-pulse">

        {/* LEFT PANEL SKELETON */}
        <div className="rounded-[30px] border border-white/5 bg-[#091423] p-5 space-y-6">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="h-3 w-32 rounded bg-white/5" />
              <div className="h-6 w-48 rounded bg-white/5" />
              <div className="mt-2 h-4 w-72 rounded bg-white/5" />
            </div>
            <div className="h-14 w-14 rounded-2xl bg-white/5" />
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <div className="h-3 w-28 rounded bg-white/5" />
              <div className="h-12 w-full rounded-full bg-white/3" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div className="h-3 w-32 rounded bg-white/5" />
                <div className="h-3 w-24 rounded bg-white/5" />
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 w-full rounded-2xl bg-white/3" />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 w-20 rounded bg-white/5" />
              <div className="h-12 w-full rounded-full bg-white/3" />
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-6 w-16 rounded-full bg-white/3" />
              ))}
            </div>
            <div className="space-y-2">
              <div className="h-3 w-24 rounded bg-white/5" />
              <div className="h-24 w-full rounded-2xl bg-white/3" />
            </div>
            <div className="h-11 w-36 rounded-full bg-white/5" />
          </div>
        </div>

        {/* RIGHT PANEL SKELETON */}
        <div className="rounded-[28px] border border-white/5 bg-[#0b1524] p-5 space-y-6">
          <div className="h-5 w-40 rounded bg-white/5" />
          <div className="h-28 w-full rounded-2xl bg-cyan-400/10" />
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="h-20 w-full rounded-2xl bg-white/3" />
            ))}
          </div>
        </div>

      </div>

    );

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