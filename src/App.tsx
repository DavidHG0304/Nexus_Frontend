import { useState } from "react";

import Sidebar from "./shared/components/layout/Sidebar";
import Header from "./shared/components/layout/Header";
import ReplicaAlertModal from "./shared/components/layout/ReplicaAlertModal";

import AccountsPage from "./features/accounts/pages/AccountPage";
import TransactionsPage from "./features/transactions/pages/TransactionsPage";

import { useAccount } from "./features/accounts/hooks/useAccount";
import { useTransactions } from "./features/transactions/hooks/useTransactions";

function App() {

  const [tab, setTab] = useState("accounts");

  const account = useAccount();

  const transactions = useTransactions({
    cuenta: account.cuenta,
    onTransactionSuccess: async () => {
      await account.consultarCuenta();
    }
  });

  return (
    <div className="flex min-h-screen bg-[#07111f] text-slate-100">

      <Sidebar
        tab={tab}
        setTab={setTab}
      />

      <main className="flex-1 px-4 py-4 sm:px-6 lg:px-8">

        <Header tab={tab} setTab={setTab} />

        {tab === "accounts" ? (

          <AccountsPage
            cuenta={account.cuenta}
            setCuenta={account.setCuenta}
            consultarCuenta={account.consultarCuenta}
            data={account.data}
          />

        ) : (

          <TransactionsPage
            cuenta={account.cuenta}
            monto={transactions.monto}
            setMonto={transactions.setMonto}
            depositar={transactions.depositar}
            retirar={transactions.retirar}
            mensaje={transactions.mensaje}
            tipoMensaje={transactions.tipoMensaje}
            data={account.data}
          />

        )}

      </main>

{/*       <ReplicaAlertModal
        isOpen={true}
        title="Replica Node Unreachable"
        description="The replica node is currently unreachable. Transactions may not be processed until the connection is restored."
        type="error"
        onClose={() => { }}
      /> */}

    </div>
  );
}

export default App;