import {
    ArrowDownLeft,
    ArrowUpRight
} from "lucide-react";

import type {
    Transaction
} from "../../../shared/types";

import {
    activityCard,
    emptyStateCard,
    miniIconContainer,
    primaryCard
} from "../../../styles/shared/cards";

import {
    depositAmount,
    depositStyle,
    withdrawAmount,
    withdrawStyle
} from "../../../styles/transactions/transactions";

import {
    amountText,
    cyanLabel,
    mutedText,
    sectionHeading,
    smallMutedText,
    statusBadge
} from "../../../styles/shared/text";

type TransactionsListProps = {
    transactions: Transaction[];
};

function TransactionsList({
    transactions
}: TransactionsListProps) {

    return (

        <section
            className={`
        ${primaryCard}
        p-5
      `}
        >

            <div className="mb-5 flex items-center justify-between">

                <div>

                    <p className={cyanLabel}>

                        Banking History

                    </p>

                    <h3 className={sectionHeading}>

                        Recent Transactions

                    </h3>

                </div>

                <span className={smallMutedText}>

                    {
                        transactions.length
                    }

                    {" "}
                    movements

                </span>

            </div>

            <div
                className="
        max-h-[480px]
        space-y-3
        overflow-y-auto
        pr-2
        "
            >

                {
                    transactions.length ? (

                        [...transactions]

                            .sort((a, b) => {

                                const dateA =
                                    new Date(a.date || "")
                                        .getTime();

                                const dateB =
                                    new Date(b.date || "")
                                        .getTime();

                                return dateB - dateA;

                            })

                            .map((transaction, index) => {

                                const isDeposit =
                                    transaction.type
                                        .toLowerCase()
                                        .includes("deposit");

                                return (

                                    <article
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

                                                <h4 className="text-sm font-medium text-white">

                                                    {transaction.type}

                                                </h4>

                                                <p className={mutedText}>

                                                    {transaction.description}

                                                </p>

                                            </div>

                                        </div>

                                        <div className="text-right">

                                            <p
                                                className={`
                          ${amountText}

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

                                            <span className={statusBadge}>

                                                {transaction.status}

                                            </span>

                                        </div>

                                    </article>

                                );

                            })

                    ) : (

                        <div className={emptyStateCard}>

                            <p className={mutedText}>

                                No transactions found.

                            </p>

                        </div>

                    )
                }

            </div>

        </section>

    );

}

export default TransactionsList;