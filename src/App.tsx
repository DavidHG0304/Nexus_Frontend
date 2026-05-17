import React, { useMemo, useState } from "react";
import {
  Bell,
  LayoutDashboard,
  Search,
  Settings,
  ShieldCheck,
  CreditCard,
  Landmark,
  LineChart,
  LifeBuoy,
  LogOut,
  ArrowRightLeft,
  Wallet,
  UserCircle2,
  PlusCircle,
  Eye,
} from "lucide-react";

type Transaction = {
  type: string;
  amount: number;
  description: string;
  status: string;
  fromAccount?: string | null;
  toAccount?: string | null;
  date?: string;
};

type ApiResponse = {
  account: {
    accountNumber: string;
    accountType: string;
    balance: number;
    currency: string;
    clientId: {
      name: string;
      email?: string;
    };
  };
  transactions: Transaction[];
};

const menuItems = [
  {
    icon: CreditCard,
    label: "accounts"
  },
  {
    icon: ArrowRightLeft,
    label: "transactions"
  },
  {
    icon: LineChart,
    label: "analytics"
  },
  {
    icon: LifeBuoy,
    label: "support"
  }
];

function App() {

  const [tab, setTab] = useState("accounts");

  const [cuenta, setCuenta] = useState("001");
  const [monto, setMonto] = useState("");

  const [data, setData] = useState<ApiResponse | null>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const consultarCuenta = async () => {

    if (!cuenta.trim()) {

      setError("Escribe un número de cuenta.");

      return;

    }

    try {

      setLoading(true);

      setError("");

      const response = await fetch(
        `http://localhost:3000/api/accounts/${cuenta.trim()}`
      );

      if (!response.ok) {

        throw new Error("No se pudo consultar la cuenta.");

      }

      const json: ApiResponse = await response.json();

      setData(json);

    } catch (err) {

      setError(
        err instanceof Error
          ? err.message
          : "Error inesperado."
      );

    } finally {

      setLoading(false);

    }

  };

  const depositar = async () => {

    try {

      const response = await fetch(
        "http://localhost:3000/api/transactions/deposito",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            accountNumber: cuenta,
            amount: Number(monto), 
            branch: "CDMX"
          })
        }
      );

      const result = await response.json();

      if (!response.ok) {

        setTipoMensaje("error");

        setMensaje(result.message);

        return;

      }

      setTipoMensaje("success");

      setMensaje("Depósito realizado correctamente");

      consultarCuenta();

    } catch (error) {

      setTipoMensaje("error");

      setMensaje("Error de conexión");

    }

  };

  const retirar = async () => {

    try {

      const response = await fetch(
        "http://localhost:3000/api/transactions/retiro",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            accountNumber: cuenta,
            amount: Number(monto),
            branch: "CDMX"
          })
        }
      );

      const result = await response.json();

      if (!response.ok) {

        setTipoMensaje("error");

        setMensaje(result.message);

        return;

      }

      setTipoMensaje("success");

      setMensaje("Retiro realizado correctamente");

      consultarCuenta();

    } catch (error) {

      setTipoMensaje("error");

      setMensaje("Error de conexión");

    }

  };

  const balance = data?.account.balance ?? 0;

  const stats = useMemo(
    () => [
      {
        label: "Saldo actual",
        value: `$${balance.toLocaleString("es-MX")}`,
        icon: Wallet
      },
      {
        label: "Movimientos",
        value: `${data?.transactions.length ?? 0}`,
        icon: ArrowRightLeft
      },
      {
        label: "Moneda",
        value: data?.account.currency ?? "MXN",
        icon: Landmark
      }
    ],
    [balance, data]
  );

  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100">

      <div className="flex min-h-screen">

        <aside className="hidden w-72 border-r border-white/5 bg-[#0b1524] px-5 py-6 lg:flex lg:flex-col">

          <div className="mb-10 flex items-center gap-3">

            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-400/20">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div>
              <h1 className="text-lg font-semibold tracking-tight text-cyan-300">
                Nexus Finance
              </h1>
              <p className="text-xs text-slate-500">
                Institutional
              </p>
            </div>

          </div>

          <nav className="space-y-2">

            {menuItems.map((item) => {

              const Icon = item.icon;

              return (

                <button
                  key={item.label}
                  onClick={() => setTab(item.label)}
                  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm capitalize transition ${
                    tab === item.label
                      ? "bg-white/8 text-white ring-1 ring-white/10"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>

              );

            })}

          </nav>

          <div className="mt-auto space-y-3">

            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/15 transition hover:bg-cyan-300">
              <PlusCircle className="h-4 w-4" />
              New Transaction
            </button>

            <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white">
              <LogOut className="h-4 w-4" />
              Logout
            </button>

          </div>

        </aside>

        <main className="flex-1 px-4 py-4 sm:px-6 lg:px-8">

          <header className="mb-6 flex flex-col gap-4 rounded-[28px] border border-white/5 bg-[#0b1524]/80 px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur xl:flex-row xl:items-center xl:justify-between">

            <div>
              <p className="text-sm text-cyan-300/80">
                Banco Nexus
              </p>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl capitalize">
                {tab}
              </h2>
            </div>

            <div className="flex items-center gap-3">

              <div className="hidden items-center gap-2 rounded-full border border-white/5 bg-black/20 px-4 py-2 text-sm text-slate-500 md:flex">
                <Search className="h-4 w-4" />
                Search accounts...
              </div>

              <button className="grid h-11 w-11 place-items-center rounded-full bg-white/5 text-slate-300 hover:bg-white/10">
                <Bell className="h-4 w-4" />
              </button>

              <button className="grid h-11 w-11 place-items-center rounded-full bg-white/5 text-slate-300 hover:bg-white/10">
                <Settings className="h-4 w-4" />
              </button>

              <div className="grid h-11 w-11 place-items-center rounded-full bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-400/20">
                <UserCircle2 className="h-5 w-5" />
              </div>

            </div>

          </header>

          {
            tab === "accounts" && (

              <div className="grid gap-5 xl:grid-cols-[1.05fr_1.3fr]">

                <section className="space-y-5">

                  <div className="rounded-[28px] border border-white/5 bg-[#0b1524] p-5 shadow-2xl shadow-black/20">

                    <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Número de cuenta
                    </label>

                    <div className="flex flex-col gap-3 sm:flex-row">

                      <input
                        type="text"
                        value={cuenta}
                        onChange={(e) => setCuenta(e.target.value)}
                        placeholder="Ej. 001"
                        className="h-14 flex-1 rounded-2xl border border-white/5 bg-[#07111f] px-4 text-sm text-white outline-none ring-0 placeholder:text-slate-600 focus:border-cyan-400/40"
                      />

                      <button
                        onClick={consultarCuenta}
                        disabled={loading}
                        className="h-14 rounded-2xl bg-cyan-400 px-6 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/15 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {loading ? "Consultando..." : "Consultar"}
                      </button>

                    </div>

                    {error && (
                      <p className="mt-3 text-sm text-red-300">
                        {error}
                      </p>
                    )}

                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">

                    {stats.map((item) => {

                      const Icon = item.icon;

                      return (

                        <div
                          key={item.label}
                          className="rounded-[24px] border border-white/5 bg-[#0b1524] p-5 shadow-2xl shadow-black/20"
                        >

                          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-cyan-300">
                            <Icon className="h-4 w-4" />
                          </div>

                          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                            {item.label}
                          </p>

                          <p className="mt-2 text-2xl font-semibold text-white">
                            {item.value}
                          </p>

                        </div>

                      );

                    })}

                  </div>

                  <div className="rounded-[28px] border border-white/5 bg-[#0b1524] p-5 shadow-2xl shadow-black/20">

                    <div className="mb-5 flex items-center justify-between">

                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                          Saldo actual
                        </p>
                        <h3 className="text-xl font-semibold text-white">
                          Resumen de cuenta
                        </h3>
                      </div>

                      <button className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-cyan-300">
                        <Eye className="h-4 w-4" />
                      </button>

                    </div>

                    {
                      data ? (

                        <>

                          <div className="rounded-[26px] bg-gradient-to-br from-cyan-400 to-cyan-500 p-5 text-slate-950 shadow-lg shadow-cyan-500/10">

                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-900/70">
                              Saldo disponible
                            </p>

                            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                              ${data.account.balance.toLocaleString("es-MX")}
                            </h1>

                            <p className="mt-2 text-sm text-slate-900/70">
                              Actualizado hace unos minutos
                            </p>

                          </div>

                          <div className="mt-5 grid gap-4 sm:grid-cols-2">

                            <div className="rounded-2xl bg-white/5 p-4">
                              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                                Cliente
                              </p>
                              <p className="mt-2 text-lg font-semibold text-white">
                                {data.account.clientId.name}
                              </p>
                            </div>

                            <div className="rounded-2xl bg-white/5 p-4">
                              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                                Cuenta
                              </p>
                              <p className="mt-2 text-lg font-semibold text-white">
                                {data.account.accountNumber}
                              </p>
                            </div>

                            <div className="rounded-2xl bg-white/5 p-4">
                              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                                Tipo
                              </p>
                              <p className="mt-2 text-lg font-semibold text-white">
                                {data.account.accountType}
                              </p>
                            </div>

                            <div className="rounded-2xl bg-white/5 p-4">
                              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                                Moneda
                              </p>
                              <p className="mt-2 text-lg font-semibold text-white">
                                {data.account.currency}
                              </p>
                            </div>

                          </div>

                        </>

                      ) : (

                        <div className="rounded-[26px] border border-dashed border-white/10 bg-white/3 p-6 text-center text-sm text-slate-500">
                          Consulta una cuenta para ver saldo, cliente y movimientos.
                        </div>

                      )
                    }

                  </div>

                </section>

                <section className="rounded-[28px] border border-white/5 bg-[#0b1524] p-5 shadow-2xl shadow-black/20">

                  <div className="mb-5 flex items-center justify-between">

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        Movimientos recientes
                      </p>
                      <h3 className="text-xl font-semibold text-white">
                        Últimas transacciones
                      </h3>
                    </div>

                  </div>

                  <div className="space-y-4 max-h-[650px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-cyan-400/20 scrollbar-track-transparent">

                    {
                      data?.transactions?.length ? (

                        data.transactions.map((transaction, index) => {

                          const isIncome =
                            transaction.type.toLowerCase().includes("deposit") ||
                            transaction.type.toLowerCase().includes("transfer");

                          return (

                            <article
                              key={index}
                              className="flex items-center justify-between gap-4 rounded-[22px] border border-white/5 bg-[#07111f] p-4 transition hover:bg-[#081423]"
                            >

                              <div className="flex items-start gap-3">

                                <div className={`mt-1 grid h-11 w-11 place-items-center rounded-2xl ${
                                  isIncome
                                    ? "bg-cyan-400/15 text-cyan-300"
                                    : "bg-rose-400/15 text-rose-300"
                                }`}>
                                  <ArrowRightLeft className="h-4 w-4" />
                                </div>

                                <div>
                                  <h4 className="font-semibold text-white">
                                    {transaction.type}
                                  </h4>

                                  <p className="mt-1 text-sm text-slate-400">
                                    {transaction.description}
                                  </p>
                                </div>

                              </div>

                              <div className="text-right">

                                <p className={`text-lg font-semibold ${
                                  isIncome
                                    ? "text-cyan-300"
                                    : "text-rose-300"
                                }`}>
                                  {isIncome ? "+" : "-"}$
                                  {transaction.amount.toLocaleString("es-MX")}
                                </p>

                                <span className="mt-1 inline-flex rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                  {transaction.status}
                                </span>

                              </div>

                            </article>

                          );

                        })

                      ) : (

                        <div className="rounded-[22px] border border-dashed border-white/10 bg-[#07111f] p-8 text-center text-sm text-slate-500">
                          Aquí van a aparecer los movimientos cuando consultes una cuenta.
                        </div>

                      )
                    }

                  </div>

                </section>

              </div>

            )
          }

          {
            tab === "transactions" && (

              <div className="mx-auto max-w-3xl rounded-[28px] border border-white/5 bg-[#0b1524] p-6 shadow-2xl shadow-black/20">

                <div className="mb-8">
                  <p className="text-sm text-cyan-300/80">
                    Operaciones bancarias
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-white">
                    Depósitos y retiros
                  </h2>
                </div>

                <div className="space-y-5">

                  <div>
                    <label className="mb-3 block text-sm text-slate-400">
                      Número de cuenta
                    </label>

                    <input
                      type="text"
                      value={cuenta}
                      onChange={(e) => setCuenta(e.target.value)}
                      placeholder="Ej. 001"
                      className="h-14 w-full rounded-2xl border border-white/5 bg-[#07111f] px-4 text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/40"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm text-slate-400">
                      Monto
                    </label>

                    <input
                      type="number"
                      value={monto}
                      onChange={(e) => setMonto(e.target.value)}
                      placeholder="Ej. 500"
                      className="h-14 w-full rounded-2xl border border-white/5 bg-[#07111f] px-4 text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/40"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">

                    <button
                      onClick={depositar}
                      className="h-14 rounded-2xl bg-emerald-400 text-lg font-semibold text-slate-950 transition hover:bg-emerald-300"
                    >
                      Depositar
                    </button>

                    <button
                      onClick={retirar}
                      className="h-14 rounded-2xl bg-rose-400 text-lg font-semibold text-slate-950 transition hover:bg-rose-300"
                    >
                      Retirar
                    </button>

                  </div>

                  {
                    mensaje && (

                      <div className={`rounded-2xl border px-4 py-4 text-sm font-medium ${
                        tipoMensaje === "success"
                          ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                          : "border-rose-400/20 bg-rose-400/10 text-rose-300"
                      }`}>
                        {mensaje}
                      </div>

                    )
                  }

                </div>

              </div>

            )
          }

          {
            tab === "analytics" && (

              <div className="rounded-[28px] border border-white/5 bg-[#0b1524] p-10 text-center text-slate-400 shadow-2xl shadow-black/20">
                Analytics próximamente.
              </div>

            )
          }

          {
            tab === "support" && (

              <div className="rounded-[28px] border border-white/5 bg-[#0b1524] p-10 text-center text-slate-400 shadow-2xl shadow-black/20">
                Support próximamente.
              </div>

            )
          }

        </main>

      </div>

    </div>
  );
}

export default App;
