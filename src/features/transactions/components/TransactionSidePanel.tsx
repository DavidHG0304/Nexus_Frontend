import {

    DollarSign,

    ShieldCheck
} from "lucide-react";

import type { DashboardResponse } from "../../dashboard/types/dashboard.types";

import {

    primaryCard,
    secondaryCard
} from "../../../styles/shared/cards";

import {

    secureIcon,

} from "../../../styles/transactions/transactions";

import {
    cyanLabel,
    smallMutedText
} from "../../../styles/shared/text";

type TransactionSidePanelProps = {
    data: DashboardResponse | null;
};

function TransactionSidePanel({
    data
}: TransactionSidePanelProps) {

    return (

        <div className="space-y-4">

            <section
                className={`
          ${primaryCard}
          border-cyan-400/10
          p-5 flex justify-between items-center
        `}
            >


                <div className="flex flex-col items-start gap-1">
                    <p className={cyanLabel}>

                        Available Balance

                    </p>

                    <h1 className="mt-3 text-5xl font-bold tracking-tight text-white ">

                        $

                        {
                            data?.account.balance
                                ?.toLocaleString("es-MX")
                            || "0"
                        }

                    </h1>
                </div>
                <div
                    className="
                        grid
                        h-14
                        w-14
                        place-items-center
                        rounded-2xl
                        bg-cyan-400/10
                        text-cyan-300
                    "
                >

                    <DollarSign
                        className="
                            h-6
                            w-6
                        "
                    />

                </div>

            </section>









            <section
                className={`
          ${secondaryCard}
          px-4
          py-3
        `}
            >

                <div className="flex items-center gap-3">

                    <div className={secureIcon}>

                        <ShieldCheck className="h-5 w-5" />

                    </div>

                    <div>

                        <h3 className="text-sm font-medium text-white">

                            Encrypted & Secure

                        </h3>

                        <p className={smallMutedText}>

                            Protected banking operations.

                        </p>

                    </div>

                </div>

            </section>

        </div>

    );

}

export default TransactionSidePanel;