import { useState } from "react";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import { confirmTransaction } from "./utils/alerts";
import AccountsPage from "./pages/AccountPage";
import TransactionsPage from "./pages/TransactionsPage";

import type { ApiResponse } from "./types";

import {
  consultarCuenta as consultarCuentaAPI,
  depositar as depositarAPI,
  retirar as retirarAPI
} from "./services/api";

function App() {

  const [tab, setTab] = useState("accounts");

  const [cuenta, setCuenta] = useState("001");

  const [monto, setMonto] = useState("");

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

  const showMessage = (
    text: string,
    type: string
  ) => {

    setTipoMensaje(type);

    setMensaje(text);

    setTimeout(() => {

      setMensaje("");

    }, 3000);

  };

  const consultarCuenta = async () => {

    if (!cuenta.trim()) {

      setError("Escribe un número de cuenta.");

      return;

    }

    try {

      setLoading(true);

      setError("");

      const response =
        await consultarCuentaAPI(cuenta);

      setData(response);

    } catch (err) {

      setError(
        err instanceof Error
          ? err.message
          : "Error inesperado"
      );

    } finally {

      setLoading(false);

    }

  };

  const depositar = async () => {

    if (!monto.trim() || isNaN(Number(monto)) || Number(monto) <= 0) {

      showMessage(
        "Ingresa un monto válido.",
        "error"
      );

      return;

    }

    const result =
      await confirmTransaction(
        "Confirmar depósito",
        `¿Deseas depositar $${monto}?`
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
        "Depósito realizado",
        "success"
      );

      setMonto("");

      consultarCuenta();

    } catch {

      showMessage(
        "Error al realizar depósito",
        "error"
      );

    }

  };

  const retirar = async () => {

    if (!monto.trim() || isNaN(Number(monto)) || Number(monto) <= 0) {

      showMessage(
        "Ingresa un monto válido.",
        "error"
      );

      return;

    }

    const result =
      await confirmTransaction(
        "Confirmar retiro",
        `¿Deseas retirar $${monto}?`
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
        "Retiro realizado",
        "success"
      );

      setMonto("");

      consultarCuenta();

    } catch {

      showMessage(
        "Error al realizar retiro",
        "error"
      );

    }

  };

  return (

    <div className="flex min-h-screen bg-[#07111f] text-slate-100">

      <Sidebar
        tab={tab}
        setTab={setTab}
      />

      <main className="flex-1 px-4 py-4 sm:px-6 lg:px-8">

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

    </div>

  );

}

export default App;