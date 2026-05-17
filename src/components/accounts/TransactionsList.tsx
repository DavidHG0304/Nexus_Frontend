import { ArrowRightLeft } from "lucide-react";

import type { Transaction } from "../../types";

type TransactionsListProps = {
    transactions: Transaction[];
};

function TransactionsList({
    transactions
}: TransactionsListProps) {

    return (

        <div className="rounded-[28px] border border-white/5 bg-[#0b1524] p-5 shadow-2xl shadow-black/20">

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

            <div className="space-y-4 max-h-[650px] overflow-y-auto pr-2">

                {
                    transactions.length ? (

                        [...transactions]

                            .sort((a, b) => {

                                const dateA =
                                    new Date(a.date || "").getTime();

                                const dateB =
                                    new Date(b.date || "").getTime();

                                return dateB - dateA;

                            })

                            .map((transaction, index) => {

                                const isIncome =
                                    transaction.type
                                        .toLowerCase()
                                        .includes("deposit") ||

                                    transaction.type
                                        .toLowerCase()
                                        .includes("transfer");

                                return (

                                    <article
                                        key={index}
                                        className="flex items-center justify-between gap-4 rounded-[22px] border border-white/5 bg-[#07111f] p-4"
                                    >

                                        <div className="flex items-start gap-3">

                                            <div className={`mt-1 grid h-11 w-11 place-items-center rounded-2xl ${isIncome
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

                                            <p className={`text-lg font-semibold ${isIncome
                                                    ? "text-cyan-300"
                                                    : "text-rose-300"
                                                }`}>

                                                {isIncome ? "+" : "-"}

                                                $

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

                        <p className="text-slate-400">

                            No hay transacciones para mostrar.

                        </p>

                    )

                }

            </div>

        </div>

    );

}

export default TransactionsList;