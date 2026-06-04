import AccountSearch from "../components/AccountSearch";

import AccountSummary from "../components/AccountSummary";
import MonthlyFlow from "../components/MonthlyFlow";

import TransactionsList from "../components/TransactionsList";

import type {
    ApiResponse
} from "../../../shared/types";

type AccountsPageProps = {

    cuenta: string;

    setCuenta: React.Dispatch<
        React.SetStateAction<string>
    >;

    consultarCuenta: () => void;

    data: ApiResponse | null;

};

function AccountsPage({

    cuenta,

    setCuenta,

    consultarCuenta,

    data

}: AccountsPageProps) {

    return (

        <div className="space-y-5">

            <AccountSearch
                cuenta={cuenta}
                setCuenta={setCuenta}
                consultarCuenta={consultarCuenta}
            />

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
                            data?.transactions || []
                        }
                    />

                </div>

                <div className="sticky top-24">

                    <MonthlyFlow
                        transactions={
                            data?.transactions || []
                        }
                    />

                </div>

            </div>

        </div>

    );

}

export default AccountsPage;