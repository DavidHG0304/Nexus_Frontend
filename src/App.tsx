import { useState } from "react";
import {
  PrivacyProvider
} from "./shared/context/PrivacyContext";

import { AnimatePresence, motion } from "framer-motion";

import Sidebar from "./shared/components/layout/Sidebar";
import Header from "./shared/components/layout/Header";

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
    <PrivacyProvider>
      <div className="flex min-h-screen bg-[#07111f] text-slate-100">

        <Sidebar
          tab={tab}
          setTab={setTab}
        />

        <main className="flex-1 px-4 py-4 sm:px-6 lg:px-8">

          <Header
            tab={tab}
            setTab={setTab}
          />

          <AnimatePresence mode="wait">

            <motion.div
              key={tab}
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -10
              }}
              transition={{
                duration: 0.2
              }}
            >

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

            </motion.div>

          </AnimatePresence>

        </main>
      </div>
    </PrivacyProvider>
  );
}

export default App;