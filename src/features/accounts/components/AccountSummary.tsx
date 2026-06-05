import {
    motion,
    AnimatePresence
} from "framer-motion";

import {
    Eye,
    EyeOff
} from "lucide-react";

import {
    usePrivacy
} from "../../../shared/context/PrivacyContext";

import type {
    DashboardResponse
} from "../../dashboard/types/dashboard.types";

type AccountSummaryProps = {
    data: DashboardResponse | null;
};

function AccountSummary({
    data
}: AccountSummaryProps) {

    const {
        showBalance,
        toggleBalanceVisibility
    } = usePrivacy();

    return (

        <div className="rounded-[28px] border border-white/5 bg-[#0b1524] p-5 shadow-2xl shadow-black/20">

            <div className="mb-5 flex items-center justify-between">

                <div>

                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        Current Balance
                    </p>

                    <h3 className="text-xl font-semibold text-white">
                        Account Summary
                    </h3>

                </div>

                <button
                    type="button"
                    aria-label="Toggle balance visibility"
                    title="Toggle balance visibility"
                    onClick={toggleBalanceVisibility}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-cyan-300"
                >

                    {
                        showBalance
                            ? (
                                <Eye
                                    className="
                                        h-4
                                        w-4
                                    "
                                />
                            )
                            : (
                                <EyeOff
                                    className="
                                        h-4
                                        w-4
                                    "
                                />
                            )
                    }

                </button>

            </div>

            <AnimatePresence mode="wait">

                {
                    data ? (

                        <motion.div
                            key="account-loaded"
                            initial={{
                                opacity: 0,
                                y: 15,
                                scale: 0.98
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1
                            }}
                            exit={{
                                opacity: 0,
                                y: -15
                            }}
                            transition={{
                                duration: 0.25
                            }}
                        >

                            <div
                                className="
                                    rounded-[26px]
                                    bg-gradient-to-br
                                    from-cyan-400
                                    to-cyan-500
                                    p-5
                                    text-slate-950
                                "
                            >

                                <p
                                    className="
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-[0.25em]
                                        text-slate-900/70
                                    "
                                >

                                    Available Balance

                                </p>

                                <motion.h1
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
                                        duration: 0.25
                                    }}
                                    className="
                                        mt-3
                                        text-4xl
                                        font-bold
                                        tracking-tight
                                        select-none
                                    "
                                >

                                    $

                                    {
                                        data
                                            .account
                                            .balance
                                            .toLocaleString(
                                                "en-US"
                                            )
                                    }

                                </motion.h1>

                            </div>

                            <div
                                className="
                                    mt-5
                                    grid
                                    gap-4
                                    sm:grid-cols-2
                                "
                            >

                                <div
                                    className="
                                        rounded-2xl
                                        bg-white/5
                                        p-4
                                    "
                                >

                                    <p
                                        className="
                                            text-xs
                                            uppercase
                                            tracking-[0.18em]
                                            text-slate-500
                                        "
                                    >

                                        Client

                                    </p>

                                    <p
                                        className="
                                            mt-2
                                            text-lg
                                            font-semibold
                                            text-white
                                        "
                                    >

                                        {
                                            data
                                                .client
                                                .name
                                        }

                                    </p>

                                </div>

                                <div
                                    className="
                                        rounded-2xl
                                        bg-white/5
                                        p-4
                                    "
                                >

                                    <p
                                        className="
                                            text-xs
                                            uppercase
                                            tracking-[0.18em]
                                            text-slate-500
                                        "
                                    >

                                        Account

                                    </p>

                                    <p
                                        className="
                                            mt-2
                                            text-lg
                                            font-semibold
                                            text-white
                                        "
                                    >

                                        {
                                            data
                                                .account
                                                .accountNumber
                                        }

                                    </p>

                                </div>

                                <div
                                    className="
                                        rounded-2xl
                                        bg-white/5
                                        p-4
                                    "
                                >

                                    <p
                                        className="
                                            text-xs
                                            uppercase
                                            tracking-[0.18em]
                                            text-slate-500
                                        "
                                    >

                                        Type

                                    </p>

                                    <p
                                        className="
                                            mt-2
                                            text-lg
                                            font-semibold
                                            text-white
                                        "
                                    >

                                        {
                                            data
                                                .account
                                                .accountType
                                        }

                                    </p>

                                </div>

                                <div
                                    className="
                                        rounded-2xl
                                        bg-white/5
                                        p-4
                                    "
                                >

                                    <p
                                        className="
                                            text-xs
                                            uppercase
                                            tracking-[0.18em]
                                            text-slate-500
                                        "
                                    >

                                        Currency

                                    </p>

                                    <p
                                        className="
                                            mt-2
                                            text-lg
                                            font-semibold
                                            text-white
                                        "
                                    >

                                        {
                                            data
                                                .account
                                                .currency
                                        }

                                    </p>

                                </div>

                                <div
                                    className="
                                        rounded-2xl
                                        bg-white/5
                                        p-4
                                    "
                                >

                                    <p
                                        className="
                                            text-xs
                                            uppercase
                                            tracking-[0.18em]
                                            text-slate-500
                                        "
                                    >

                                        Status

                                    </p>

                                    <p
                                        className="
                                            mt-2
                                            text-lg
                                            font-semibold
                                            text-emerald-400
                                        "
                                    >

                                        {
                                            data
                                                .account
                                                .status
                                        }

                                    </p>

                                </div>

                                <div
                                    className="
                                        rounded-2xl
                                        bg-white/5
                                        p-4
                                    "
                                >

                                    <p
                                        className="
                                            text-xs
                                            uppercase
                                            tracking-[0.18em]
                                            text-slate-500
                                        "
                                    >

                                        Email

                                    </p>

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            font-medium
                                            text-white
                                        "
                                    >

                                        {
                                            data
                                                .client
                                                .email
                                        }

                                    </p>

                                </div>

                            </div>

                        </motion.div>

                    ) : (

                        <motion.div
                            key="account-empty"
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            exit={{
                                opacity: 0
                            }}
                            className="
                                rounded-[26px]
                                border
                                border-dashed
                                border-white/10
                                bg-white/3
                                p-6
                                text-center
                                text-sm
                                text-slate-500
                            "
                        >

                            Loading account information...

                        </motion.div>

                    )
                }

            </AnimatePresence>

        </div>

    );

}

export default AccountSummary;