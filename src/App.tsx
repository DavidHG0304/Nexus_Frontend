import { useState } from "react";

import Sidebar from "./components/layout/Sidebar";

import Header from "./components/layout/Header";

import ReplicaAlertModal
  from "./components/layout/ReplicaAlertModal";

import AccountsPage from "./pages/AccountPage";

import TransactionsPage
  from "./pages/TransactionsPage";

import {
  confirmTransaction
} from "./utils/alerts";

import type {
  ApiResponse
} from "./types";

import {

  consultarCuenta as consultarCuentaAPI,

  depositar as depositarAPI,

  retirar as retirarAPI

} from "./services/api";

function App() {

  const [tab, setTab] =
    useState("accounts");

  const [cuenta, setCuenta] =
    useState("001");

  const [monto, setMonto] =
    useState("");

  const [data, setData] =
    useState<ApiResponse | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [mensaje, setMensaje] =
    useState("");

  const [tipoMensaje, setTipoMensaje] =
    useState("");

  const [
    replicaModalOpen,
    setReplicaModalOpen
  ] = useState(false);

  const [
    replicaModalTitle,
    setReplicaModalTitle
  ] = useState("");

  const [
    replicaModalDescription,
    setReplicaModalDescription
  ] = useState("");

  const [
    replicaModalType,
    setReplicaModalType
  ] = useState<
    "error" |
    "warning" |
    "success"
  >("error");

  const showMessage = (
    text: string,
    type: string
  ) => {

    setTipoMensaje(type);

    setMensaje(text);

    setTimeout(() => {

      setMensaje("");

      setTipoMensaje("");

    }, 3000);

  };

  const showReplicaModal = (

    title: string,

    description: string,

    type: "error" | "warning" | "success"

  ) => {

    setReplicaModalTitle(title);

    setReplicaModalDescription(description);

    setReplicaModalType(type);

    setReplicaModalOpen(true);

  };

  const consultarCuenta = async () => {

    if (!cuenta.trim()) {

      setError(
        "Enter an account number."
      );

      return;

    }

    try {

      setLoading(true);

      setError("");

      const response =
        await consultarCuentaAPI(
          cuenta
        );

      setData(response);

      showMessage(
        "Account loaded successfully",
        "success"
      );

    } catch (err) {

      setError(

        err instanceof Error
          ? err.message
          : "Unexpected error"

      );

      showReplicaModal(

        "Replica Connection Error",

        "Unable to retrieve account information from the replica set.",

        "warning"

      );

    } finally {

      setLoading(false);

    }

  };

  const depositar = async () => {

    if (

      !monto.trim() ||

      isNaN(Number(monto)) ||

      Number(monto) <= 0

    ) {

      showMessage(
        "Enter a valid amount.",
        "error"
      );

      return;

    }

    const result =
      await confirmTransaction(

        "Confirm Deposit",

        `Do you want to deposit $${monto}?`

      );

    if (!result.isConfirmed) {

      return;

    }

    try {

      const response =
        await depositarAPI(

          cuenta,

          Number(monto)

        );

      showMessage(

        response.message ||

        "Deposit completed successfully",

        "success"

      );

      setMonto("");

      consultarCuenta();

    } catch {

      showReplicaModal(

        "Primary Node Unreachable",

        "The replica set is currently reconnecting. Please wait a moment and try again.",

        "error"

      );

    }

  };

  const retirar = async () => {

    if (

      !monto.trim() ||

      isNaN(Number(monto)) ||

      Number(monto) <= 0

    ) {

      showMessage(
        "Enter a valid amount.",
        "error"
      );

      return;

    }

    const result =
      await confirmTransaction(

        "Confirm Withdrawal",

        `Do you want to withdraw $${monto}?`

      );

    if (!result.isConfirmed) {

      return;

    }

    try {

      const response =
        await retirarAPI(

          cuenta,

          Number(monto)

        );

      showMessage(

        response.message ||

        "Withdrawal completed successfully",

        "success"

      );

      setMonto("");

      consultarCuenta();

    } catch {

      showMessage(
        "Transaction failed",
        "error"
      );

      showReplicaModal(

        "High Latency Detected",

        "The transaction could not be completed because the primary replica node is unavailable.",

        "warning"

      );

    }

  };

  return (

    <div
      className="
      flex
      min-h-screen
      bg-[#07111f]
      text-slate-100
      "
    >

      <Sidebar
        tab={tab}
        setTab={setTab}
      />

      <main
        className="
        flex-1
        px-4
        py-4
        sm:px-6
        lg:px-8
        "
      >

        <Header
          tab={tab}
        />

        {
          tab === "accounts" ? (

            <AccountsPage

              cuenta={cuenta}

              setCuenta={setCuenta}

              consultarCuenta={consultarCuenta}

              loading={loading}

              error={error}

              data={data}

            />

          ) : (

            <TransactionsPage

              cuenta={cuenta}

              monto={monto}

              setMonto={setMonto}

              depositar={depositar}

              retirar={retirar}

              mensaje={mensaje}

              tipoMensaje={tipoMensaje}

              data={data}

            />

          )
        }

      </main>

      <ReplicaAlertModal

        isOpen={replicaModalOpen}

        title={replicaModalTitle}

        description={
          replicaModalDescription
        }

        type={replicaModalType}

        onClose={() =>
          setReplicaModalOpen(false)
        }

      />

    </div>

  );

}

export default App;