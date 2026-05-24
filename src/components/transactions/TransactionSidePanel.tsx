import {
    ArrowDownLeft,
    ArrowUpRight,
    ShieldCheck
} from "lucide-react";

import type { ApiResponse } from "../../types";

import {
    activityCard,
    miniIconContainer,
    primaryCard,
    secondaryCard
} from "../../styles/cards";

import {
    depositAmount,
    depositStyle,
    progressBar,
    secureIcon,
    withdrawAmount,
    withdrawStyle
} from "../../styles/transactions";

import {
    cyanLabel,
    smallMutedText
} from "../../styles/text";

type TransactionSidePanelProps = {
    data: ApiResponse | null;
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
          p-5
        `}
            >

                <p className={cyanLabel}>

                    Available Balance

                </p>

                <h1 className="mt-3 text-5xl font-bold tracking-tight text-white">

                    $

                    {
                        data?.account.balance
                            ?.toLocaleString("es-MX")
                        || "0"
                    }

                </h1>

                <div className="mt-6 space-y-3">

                    <div>

                        <div
                            className={`
                mb-1
                flex
                items-center
                justify-between
                ${smallMutedText}
              `}
                        >

                            <span>

                                Daily Limit

                            </span>

                            <span>

                                $50,000.00

                            </span>

                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-white/5">

                            <div
                                className={progressBar}
                                style={{
                                    width: "35%"
                                }}
                            />

                        </div>

                    </div>

                    <div className="flex items-center justify-between text-sm">

                        <span className="text-slate-400">

                            Used today

                        </span>

                        <span className="font-medium text-white">

                            $7,500.00

                        </span>

                    </div>

                </div>

            </section>

            <section
                className={`
          ${secondaryCard}
          p-5
        `}
            >

                <div className="mb-4 flex items-center justify-between">

                    <h3 className={cyanLabel}>

                        Recent Activity

                    </h3>

                    <span className={smallMutedText}>

                        Live

                    </span>

                </div>

                <div className="space-y-3">

                    {
                        [...(data?.transactions || [])]

                            .sort((a, b) => {

                                const dateA =
                                    new Date(a.date || "")
                                        .getTime();

                                const dateB =
                                    new Date(b.date || "")
                                        .getTime();

                                return dateB - dateA;

                            })

                            .slice(0, 3)

                            .map((transaction, index) => {

                                const isDeposit =
                                    transaction.type
                                        .toLowerCase()
                                        .includes("deposit");

                                return (

                                    <div
                                        key={index}
                                        className={activityCard}
                                    >

                                        <div className="flex items-center gap-3">

                                            <div
                                                className={`
                          ${miniIconContainer}

                          ${isDeposit
                                                        ? depositStyle
                                                        : withdrawStyle
                                                    }
                        `}
                                            >

                                                {
                                                    isDeposit ? (

                                                        <ArrowDownLeft className="h-4 w-4" />

                                                    ) : (

                                                        <ArrowUpRight className="h-4 w-4" />

                                                    )
                                                }

                                            </div>

                                            <div>

                                                <p className="text-sm font-medium text-white">

                                                    {transaction.type}

                                                </p>

                                                <p className={smallMutedText}>

                                                    {transaction.status}

                                                </p>

                                            </div>

                                        </div>

                                        <p
                                            className={`
                        text-sm
                        font-semibold

                        ${isDeposit
                                                    ? depositAmount
                                                    : withdrawAmount
                                                }
                      `}
                                        >

                                            {isDeposit ? "+" : "-"}

                                            $

                                            {
                                                transaction.amount
                                                    .toLocaleString("es-MX")
                                            }

                                        </p>

                                    </div>

                                );

                            })
                    }

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