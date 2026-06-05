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

            <div
                className="
                    flex
                    h-[60vh]
                    items-center
                    justify-center
                    text-slate-400
                "
            >

                Loading dashboard...

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