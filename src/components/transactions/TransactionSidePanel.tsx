import {
    ShieldCheck,
    UserCircle2
} from "lucide-react";

import type { ApiResponse } from "../../types";

type TransactionSidePanelProps = {
    data: ApiResponse | null;
};

function TransactionSidePanel({
    data
}: TransactionSidePanelProps) {

    return (

        <div className="space-y-5">

            <div className="rounded-[32px] border border-cyan-400/10 bg-[#091423] p-6 shadow-2xl shadow-black/30">

                <p className="text-sm text-slate-400">
                    Available Balance
                </p>

                <h1 className="mt-3 text-5xl font-bold tracking-tight text-white">

                    $
                    {data?.account.balance.toLocaleString("es-MX") || "0"}

                </h1>

                <div className="mt-6 rounded-2xl bg-cyan-400/10 px-4 py-3 text-sm text-cyan-300">

                    Account:
                    {" "}
                    {data?.account.accountNumber || "N/A"}

                </div>

            </div>

            <div className="rounded-[32px] border border-white/5 bg-[#091423] p-6">

                <div className="flex items-center gap-3">

                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-300">

                        <ShieldCheck className="h-6 w-6" />

                    </div>

                    <div>

                        <h3 className="font-semibold text-white">
                            Secure Transaction
                        </h3>

                        <p className="text-sm text-slate-400">
                            Protected banking operations.
                        </p>

                    </div>

                </div>

            </div>

            <div className="rounded-[32px] border border-white/5 bg-[#091423] p-6">

                <h3 className="mb-5 text-lg font-semibold text-white">
                    Recent Recipients
                </h3>

                <div className="space-y-4">

                    {
                        [
                            "Juan Pérez",
                            "María López",
                            "Carlos Ramírez"
                        ].map((name) => (

                            <div
                                key={name}
                                className="flex items-center gap-3"
                            >

                                <div className="grid h-12 w-12 place-items-center rounded-full bg-white/5 text-cyan-300">

                                    <UserCircle2 className="h-6 w-6" />

                                </div>

                                <div>

                                    <p className="font-medium text-white">
                                        {name}
                                    </p>

                                    <p className="text-sm text-slate-500">
                                        Nexus Client
                                    </p>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>

        </div>

    );

}

export default TransactionSidePanel;