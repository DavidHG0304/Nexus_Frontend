import { Eye } from "lucide-react";

import type { ApiResponse } from "../../types";

type AccountSummaryProps = {
    data: ApiResponse | null;
};

function AccountSummary({
    data
}: AccountSummaryProps) {

    return (

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

                        <div className="rounded-[26px] bg-gradient-to-br from-cyan-400 to-cyan-500 p-5 text-slate-950">

                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-900/70">
                                Saldo disponible
                            </p>

                            <h1 className="mt-3 text-4xl font-bold tracking-tight">

                                $
                                {data.account.balance.toLocaleString("es-MX")}

                            </h1>

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

                        Consulta una cuenta para ver saldo.

                    </div>

                )
            }

        </div>

    );

}

export default AccountSummary;