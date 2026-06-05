import {
    ArrowRightLeft
} from "lucide-react";

import { motion } from "framer-motion";

import {
    usePrivacy
} from "../../../shared/context/PrivacyContext";

import type {
    DashboardTransaction
} from "../../dashboard/types/dashboard.types";

import {
    activityCard,
    emptyStateCard,
    miniIconContainer,
    primaryCard
} from "../../../styles/shared/cards";

import {
    amountText,
    cyanLabel,
    mutedText,
    sectionHeading,
    smallMutedText,
    statusBadge
} from "../../../styles/shared/text";

type TransactionsListProps = {

    transactions:
    DashboardTransaction[];

};

function TransactionsList({
    transactions
}: TransactionsListProps) {

    const {
        showBalance
    } = usePrivacy();

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

                    {transactions.length}

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

                                return (
                                    new Date(
                                        b.date
                                    ).getTime()

                                    -

                                    new Date(
                                        a.date
                                    ).getTime()
                                );

                            })

                            .map((transaction) => (

                                <article
                                    key={
                                        transaction._id
                                    }
                                    className={
                                        activityCard
                                    }
                                >

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-3
                                        "
                                    >

                                        <div
                                            className={`
                                                ${miniIconContainer}
                                                bg-cyan-400/10
                                                text-cyan-300
                                            `}
                                        >

                                            <ArrowRightLeft
                                                className="
                                                    h-4
                                                    w-4
                                                "
                                            />

                                        </div>

                                        <div>

                                            <h4
                                                className="
                                                    text-sm
                                                    font-medium
                                                    text-white
                                                "
                                            >

                                                {
                                                    transaction.type
                                                }

                                            </h4>

                                            <p
                                                className={
                                                    mutedText
                                                }
                                            >

                                                {
                                                    transaction.description
                                                }

                                            </p>

                                        </div>

                                    </div>

                                    <div
                                        className="
                                            text-right
                                        "
                                    >

                                        <motion.p
                                            animate={{
                                                filter:
                                                    showBalance
                                                        ? "blur(0px)"
                                                        : "blur(8px)",

                                                opacity:
                                                    showBalance
                                                        ? 1
                                                        : 0.6
                                            }}
                                            transition={{
                                                duration:
                                                    0.25
                                            }}
                                            className={`
                                                ${amountText}
                                                text-cyan-400
                                                select-none
                                            `}
                                        >

                                            $

                                            {
                                                transaction.amount
                                                    .toLocaleString(
                                                        "es-MX"
                                                    )
                                            }

                                        </motion.p>

                                        <span
                                            className={
                                                statusBadge
                                            }
                                        >

                                            {
                                                transaction.status
                                            }

                                        </span>

                                    </div>

                                </article>

                            ))

                    ) : (

                        <div
                            className={
                                emptyStateCard
                            }
                        >

                            <p
                                className={
                                    mutedText
                                }
                            >

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