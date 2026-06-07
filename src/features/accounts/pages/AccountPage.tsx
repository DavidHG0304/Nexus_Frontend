import Loader from "../../../shared/components/ui/Loader";
import { useDashboard } from "../../dashboard/hook/useDashboard";
import AccountSummary from "../components/AccountSummary";

import MonthlyFlow from "../components/MonthlyFlow";

import TransactionsList from "../components/TransactionsList";



function AccountsPage() {

    const {

        data,

        loading,

        error

    } = useDashboard();

    if (loading) {

        return (

            <div className="space-y-5 animate-pulse">

                <div
                    className="
                        grid
                        gap-5
                        items-start
                        xl:grid-cols-[1.15fr_0.55fr]
                    "
                >

                    <div className="space-y-5">

                        {/* AccountSummary Skeleton */}
                        <div className="rounded-[28px] border border-white/5 bg-[#0b1524] p-5 space-y-5">
                            <div className="flex justify-between items-center">
                                <div className="space-y-2">
                                    <div className="h-3 w-32 rounded bg-white/5" />
                                    <div className="h-5 w-40 rounded bg-white/5" />
                                </div>
                                <div className="h-10 w-10 rounded-full bg-white/5" />
                            </div>
                            <div className="h-28 w-full rounded-[26px] bg-cyan-400/10" />
                            <div className="grid gap-4 sm:grid-cols-2">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="h-16 w-full rounded-2xl bg-white/3 p-4 space-y-2">
                                        <div className="h-3 w-16 rounded bg-white/5" />
                                        <div className="h-4 w-32 rounded bg-white/5" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* TransactionsList Skeleton */}
                        <div className="rounded-[28px] border border-white/5 bg-[#0b1524] p-5 space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="space-y-2">
                                    <div className="h-3 w-32 rounded bg-white/5" />
                                    <div className="h-5 w-40 rounded bg-white/5" />
                                </div>
                                <div className="h-10 w-24 rounded-full bg-white/5" />
                            </div>
                            <div className="space-y-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="h-14 w-full rounded-2xl bg-white/3" />
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* MonthlyFlow Skeleton */}
                    <div className="rounded-[28px] border border-white/5 bg-[#0b1524] p-5 space-y-6">
                        <div className="space-y-2">
                            <div className="h-3 w-32 rounded bg-white/5" />
                            <div className="h-5 w-40 rounded bg-white/5" />
                        </div>
                        <div className="h-48 w-full rounded-2xl bg-white/3" />
                        <div className="space-y-3">
                            <div className="h-14 w-full rounded-2xl bg-white/3" />
                            <div className="h-14 w-full rounded-2xl bg-white/3" />
                        </div>
                    </div>

                </div>

            </div>

        );

    }

    if (error) {

        return (

            <div
                className="
                    rounded-3xl
                    border
                    border-red-500/20
                    bg-red-500/10
                    p-6
                    text-red-400
                "
            >

                {error}

            </div>

        );

    }

    if (!data) {

        return null;

    }

    return (

        <div className="space-y-5">

            <div
                className="
                    grid
                    gap-5
                    items-start
                    xl:grid-cols-[1.1fr_0.55fr]
                "
            >

                <div className="space-y-5">

                    <AccountSummary
                        data={data}
                    />

                    <TransactionsList

                        transactions={
                            data.lastTransactions
                        }

                        accountNumber={
                            data.account.accountNumber
                        }

                    />

                </div>

                <div className="sticky top-24">

                    <MonthlyFlow

                        transactions={
                            data.lastTransactions
                        }

                        accountNumber={
                            data.account.accountNumber
                        }

                    />

                </div>

            </div>

        </div>

    );

}

export default AccountsPage;