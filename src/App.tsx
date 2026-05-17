import { useState } from "react";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

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

    try {

      const response =
        await depositarAPI(
          cuenta,
          Number(monto)
        );

      setTipoMensaje("success");

      setMensaje(
        response.message ||
        "Depósito realizado"
      );

      setMonto("");

      consultarCuenta();

    } catch {

      setTipoMensaje("error");

      setMensaje(
        "Error al realizar depósito"
      );

    }

  };

  const retirar = async () => {

    try {

      const response =
        await retirarAPI(
          cuenta,
          Number(monto)
        );

      setTipoMensaje("success");

      setMensaje(
        response.message ||
        "Retiro realizado"
      );

      setMonto("");

      consultarCuenta();

    } catch {

      setTipoMensaje("error");

      setMensaje(
        "Error al realizar retiro"
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